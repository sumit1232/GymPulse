import React from 'react';

const enquiryData = [
  { id: 1, name: 'Alice Brown', message: 'What are the membership plans?', date: '2025-10-01' },
  { id: 2, name: 'David Wilson', message: 'Is personal training available?', date: '2025-10-12' },
  { id: 3, name: 'Sara Lee', message: 'Do you have yoga classes?', date: '2025-10-15' },
];

const Enquiry = () => {
  return (
    <div className="p-6">
      {/* Header with Add Enquiry button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">Enquiries</h2>
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded shadow">
          + Add Enquiry
        </button>
      </div>

      {/* Enquiry list */}
      <div className="space-y-4">
        {enquiryData.map((enquiry) => (
          <div key={enquiry.id} className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
            <h3 className="text-lg font-bold text-gray-800">{enquiry.name}</h3>
            <p className="text-gray-600">{enquiry.message}</p>
            <p className="text-gray-400 text-sm mt-2">Date: {enquiry.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Enquiry;
