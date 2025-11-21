import React from 'react';

const stats = [
  { id: 1, label: 'Total Members', value: 150, bgColor: 'bg-green-500' },
  { id: 2, label: 'Active Members', value: 120, bgColor: 'bg-blue-500' },
  { id: 3, label: 'Classes Today', value: 8, bgColor: 'bg-yellow-500' },
  { id: 4, label: 'Revenue This Month', value: '$12,500', bgColor: 'bg-purple-500' },
];

const recentActivities = [
  'John Doe joined the Gold Membership.',
  'Yoga class added by Trainer Pam Beesly.',
  'Payment received from Jane Smith.',
  'Dumbbells set maintenance scheduled.',
];

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Gym Management Dashboard</h1>

      {/* Stats summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {stats.map(({ id, label, value, bgColor }) => (
          <div key={id} className={`rounded-lg shadow p-6 text-white ${bgColor}`}>
            <h2 className="text-2xl font-semibold">{value}</h2>
            <p className="mt-2">{label}</p>
          </div>
        ))}
      </div>

      {/* Recent activities */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Recent Activities</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          {recentActivities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
