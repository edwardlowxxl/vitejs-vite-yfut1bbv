import React, { useState } from 'react';
import { UnitData } from './UnitBlock';

type Props = {
  unit: UnitData;
  onClose: () => void;
  onSave: (updatedUnit: UnitData) => void;
};

export default function UnitModal({ unit, onClose, onSave }: Props) {
  const [form, setForm] = useState<UnitData>(unit);

  const handleChange = (field: keyof UnitData, value: string) => {
    setForm({ ...form, [field]: value });
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded w-full max-w-md shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Edit {unit.id}</h2>

        <label className="block mb-2">
          Owner Name:
          <input
            className="border w-full p-1 mt-1"
            value={form.owner || ''}
            onChange={(e) => handleChange('owner', e.target.value)}
          />
        </label>

        <label className="block mb-2">
          WhatsApp:
          <input
            className="border w-full p-1 mt-1"
            value={form.whatsapp || ''}
            onChange={(e) => handleChange('whatsapp', e.target.value)}
          />
        </label>

        <label className="block mb-2">
          Status:
          <select
            className="border w-full p-1 mt-1"
            value={form.status || ''}
            onChange={(e) => {
              const status = e.target.value;
              let color = '';
              if (status === 'For Sale') color = '#fde047'; // yellow
              else if (status === 'For Rent') color = '#6ee7b7'; // green
              else if (status === 'Occupied') color = '#fca5a5'; // red
              else color = '#fff';

              setForm({ ...form, status, color });
            }}
          >
            <option value="">Select</option>
            <option>For Sale</option>
            <option>For Rent</option>
            <option>Occupied</option>
          </select>
        </label>

        <div className="flex justify-between mt-4">
          <button className="text-gray-500" onClick={onClose}>
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => onSave(form)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
