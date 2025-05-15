import React, { useState } from 'react';

type InputPanelProps = {
  onSubmit: (floors: number, units: number) => void;
};

export default function InputPanel({ onSubmit }: InputPanelProps) {
  const [floors, setFloors] = useState(10);
  const [unitsPerFloor, setUnitsPerFloor] = useState(4);

  return (
    <div className="bg-white shadow-md rounded p-4 mb-4 w-full max-w-md">
      <h2 className="text-lg font-semibold mb-2">Building Settings</h2>

      <div className="mb-2">
        <label className="block font-medium">Number of Floors:</label>
        <input
          type="number"
          value={floors}
          onChange={(e) => setFloors(parseInt(e.target.value))}
          className="w-full border rounded px-2 py-1"
        />
      </div>

      <div className="mb-2">
        <label className="block font-medium">Units per Floor:</label>
        <input
          type="number"
          value={unitsPerFloor}
          onChange={(e) => setUnitsPerFloor(parseInt(e.target.value))}
          className="w-full border rounded px-2 py-1"
        />
      </div>

      <button
        onClick={() => onSubmit(floors, unitsPerFloor)}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
      >
        Generate Layout
      </button>
    </div>
  );
}
