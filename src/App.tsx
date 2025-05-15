import React, { useState } from 'react';
import InputPanel from './components/InputPanel';
import FloorGrid from './components/FloorGrid';

function App() {
  const [floors, setFloors] = useState<number | null>(null);
  const [units, setUnits] = useState<number | null>(null);
  const [buildingName, setBuildingName] = useState('');
  const handleSubmit = (floorCount: number, unitCount: number) => {
    setFloors(floorCount);
    setUnits(unitCount);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-6">🏢 Real Estate CRM</h1>
      <input
        type="text"
        placeholder="Enter Building Name"
        value={buildingName}
        onChange={(e) => setBuildingName(e.target.value)}
        className="mb-4 w-full max-w-md border rounded px-3 py-2"
      />

      <InputPanel onSubmit={handleSubmit} />

      {floors && units && buildingName && (
        <>
          <p className="mt-4">
            You're creating a building with <strong>{floors}</strong> floors and{' '}
            <strong>{units}</strong> units per floor.
          </p>
          <FloorGrid
            floors={floors}
            unitsPerFloor={units}
            buildingName={buildingName}
          />
        </>
      )}
    </div>
  );
}

export default App;
