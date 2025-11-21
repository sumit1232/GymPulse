import React from 'react';

const trainersData = [
  { id: 1, name: 'Michael Scott', specialty: 'Strength Training', experience: '5 years' },
  { id: 2, name: 'Pam Beesly', specialty: 'Yoga', experience: '3 years' },
  { id: 3, name: 'Jim Halpert', specialty: 'Cardio', experience: '4 years' },
];

const Trainer = () => {
  return (
    <div className="p-6">
      {/* Header with Add Trainer button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">Trainers</h2>
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded shadow">
          + Add Trainer
        </button>
      </div>

      {/* Trainers grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {trainersData.map((trainer) => (
          <div key={trainer.id} className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-gray-800">{trainer.name}</h3>
            <p className="text-gray-500">Specialty: {trainer.specialty}</p>
            <p className="text-gray-400 text-sm">Experience: {trainer.experience}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trainer;
