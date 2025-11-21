import React from 'react';

const membersData = [
  { id: 1, name: 'John Doe', membershipType: 'Gold', joinDate: '2025-01-10' },
  { id: 2, name: 'Jane Smith', membershipType: 'Silver', joinDate: '2025-03-15' },
  { id: 3, name: 'Alice Johnson', membershipType: 'Platinum', joinDate: '2025-06-01' },
];

const Member = () => {
  return (
    <div className="p-6">
      {/* Header with Add Member button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">Members</h2>
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded shadow">
          + Add Member
        </button>
      </div>

      {/* Members grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {membersData.map((member) => (
          <div key={member.id} className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
            <p className="text-gray-500">Membership: {member.membershipType}</p>
            <p className="text-gray-400 text-sm">Joined on: {member.joinDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Member;
