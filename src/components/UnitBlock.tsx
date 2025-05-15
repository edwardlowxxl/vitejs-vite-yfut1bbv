import React from 'react';

export type UnitData = {
  id: string;
  owner?: string;
  whatsapp?: string;
  status?: string;
  color?: string;
};

type Props = {
  unit: UnitData;
  onClick: (unit: UnitData) => void;
};

export default function UnitBlock({ unit, onClick }: Props) {
  return (
    <div
      className={`border p-2 rounded text-sm text-center cursor-pointer`}
      style={{
        backgroundColor: unit.color || '#fff',
        boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
      }}
      onClick={() => onClick(unit)}
    >
      {unit.id}
    </div>
  );
}
