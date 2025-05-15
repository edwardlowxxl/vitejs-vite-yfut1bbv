import React, { useState, useEffect } from 'react';
import UnitBlock, { UnitData } from './UnitBlock';
import UnitModal from './UnitModal';
import { getAllUnits, saveUnit } from '../firestoreHelpers';

type Props = {
  floors: number;
  unitsPerFloor: number;
  buildingName: string;
};

export default function FloorGrid({ floors, unitsPerFloor, buildingName }: Props) {
  const [units, setUnits] = useState<UnitData[]>([]);
  const [selectedUnit, setSelectedUnit] = useState<UnitData | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const generateUnits = (): UnitData[] => {
    return Array.from({ length: floors * unitsPerFloor }, (_, index) => {
      const floor = floors - Math.floor(index / unitsPerFloor);
      const unit = (index % unitsPerFloor) + 1;
      return { id: `A-${floor}-${unit}` };
    });
  };

  useEffect(() => {
    const loadData = async () => {
      const savedUnits = await getAllUnits(buildingName);
      const baseUnits = generateUnits();
      const merged = baseUnits.map((u) => {
        const saved = savedUnits.find((s) => s.id === u.id);
        return saved || u;
      });
      setUnits(merged);
    };
    loadData();
  }, [floors, unitsPerFloor, buildingName]);

  const handleSave = async (updated: UnitData) => {
    await saveUnit(buildingName, updated);
    setUnits((prev) =>
      prev.map((u) => (u.id === updated.id ? updated : u))
    );
    setSelectedUnit(null);
  };

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-2 text-center">🏢 Building Layout</h2>

      {/* 🔍 Filter Buttons */}
      <div className="flex gap-2 mb-4 justify-center">
        {['all', 'for sale', 'for rent', 'occupied'].map((status) => (
          <button
            key={status}
            onClick={() => setFilterStatus(status)}
            className={`px-3 py-1 rounded border ${
              filterStatus === status
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700'
            }`}
          >
            {status.toUpperCase()}
          </button>
        ))}
      </div>

      {/* 🧱 Unit Grid */}
      {Array.from({ length: floors }).map((_, rowIndex) => {
        const floor = floors - rowIndex;

        const rowUnits = units.filter((u) =>
          u.id.startsWith(`A-${floor}-`) &&
          (filterStatus === 'all' || u.status === filterStatus)
        );

        return (
          <div key={floor} className="flex gap-2 justify-center mb-2">
            {rowUnits.map((unit) => (
              <UnitBlock
                key={unit.id}
                unit={unit}
                onClick={setSelectedUnit}
              />
            ))}
          </div>
        );
      })}

      {selectedUnit && (
        <UnitModal
          unit={selectedUnit}
          onClose={() => setSelectedUnit(null)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
