import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const initialMembers = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Alice Johnson'},
];

const Member = () => {
  const [members, setMembers] = useState(initialMembers);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '' });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add new member and close form
  const handleAddMember = () => {
    if (!formData.name) return;
    setMembers([...members, { id: Date.now(), ...formData }]);
    setFormData({ name: '' });
    setShowForm(false);
  };

  return (
    <div className="p-6 relative">
      {/* Header with Add Member button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">Members</h2>
        <button
          onClick={() => setShowForm(true)}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded shadow"
        >
          + Add Member
        </button>
      </div>

      {/* Members grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {members.map((member) => (
          <div key={member.id} className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
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

            <h3 className="text-xl font-semibold mb-4 text-white">Enter Name</h3>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full px-3 py-2 rounded bg-white bg-opacity-50 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
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
                onClick={handleAddMember}
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

export default Member;
