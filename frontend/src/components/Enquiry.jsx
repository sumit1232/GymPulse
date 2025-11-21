import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const initialEnquiries = [
  { id: 1, name: 'Alice Brown' },
  { id: 2, name: 'David Wilson'},
  { id: 3, name: 'Sara Lee'},
];

const Enquiry = () => {
  const [enquiries, setEnquiries] = useState(initialEnquiries);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: ''});

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add new enquiry and close form
  const handleAddEnquiry = () => {
    if (!formData.name ) return;
    setEnquiries([...enquiries, { id: Date.now(), ...formData }]);
    setFormData({ name: ''});
    setShowForm(false);
  };

  return (
    <div className="p-6">
      {/* Header with Add Enquiry button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">Enquiries</h2>
        <button
          onClick={() => setShowForm(true)}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded shadow"
        >
          + Add Enquiry
        </button>
      </div>

      {/* Enquiry list (unchanged UI) */}
      <div className="space-y-4">
        {enquiries.map((enquiry) => (
          <div
            key={enquiry.id}
            className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition"
          >
            <h3 className="text-lg font-bold text-gray-800">{enquiry.name}</h3>
          </div>
        ))}
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6 w-full max-w-sm shadow-lg relative">
            {/* Close Icon */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3 text-white hover:text-gray-300 focus:outline-none"
              aria-label="Close form"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            <h3 className="text-xl font-semibold mb-4 text-white">Add New Enquiry</h3>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full mb-3 px-3 py-2 rounded bg-white bg-opacity-50 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              value={formData.name}
              onChange={handleChange}
            />
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setShowForm(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-900 font-semibold py-2 px-4 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleAddEnquiry}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Enquiry;
