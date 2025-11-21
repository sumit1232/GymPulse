import React from 'react';

const assetsData = [
  { id: 1, name: 'Treadmill', quantity: 5, status: 'Good' },
  { id: 2, name: 'Yoga Mats', quantity: 20, status: 'New' },
  { id: 3, name: 'Dumbbells Set', quantity: 15, status: 'Fair' },
];

const Assets = () => {
  return (
    <div className="p-6">
      {/* Header with Add Asset button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">Assets</h2>
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded shadow">
          + Add Asset
        </button>
      </div>

      {/* Assets grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {assetsData.map((asset) => (
          <div
            key={asset.id}
            className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold text-gray-800">{asset.name}</h3>
            <p className="text-gray-500">Quantity: {asset.quantity}</p>
            <p className="text-gray-400 text-sm">Status: {asset.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assets;
