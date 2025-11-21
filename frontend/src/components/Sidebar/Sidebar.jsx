import {
  UserGroupIcon,
  UsersIcon,
  CubeIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HomeIcon
} from '@heroicons/react/24/outline';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-gray-100 flex flex-col p-5">
      <h1 className="text-2xl font-bold mb-8">GymManager</h1>
      <nav className="flex flex-col space-y-4">
        <a href="/" className="flex items-center space-x-3 hover:bg-gray-700 p-3 rounded">
          <HomeIcon className="h-6 w-6" />
          <span>Dashboard</span>
        </a>
        <a href="/members" className="flex items-center space-x-3 hover:bg-gray-700 p-3 rounded">
          <UsersIcon className="h-6 w-6" />
          <span>Members</span>
        </a>
        <a href="/trainers" className="flex items-center space-x-3 hover:bg-gray-700 p-3 rounded">
          <UserGroupIcon className="h-6 w-6" />
          <span>Trainers</span>
        </a>
        <a href="/assets" className="flex items-center space-x-3 hover:bg-gray-700 p-3 rounded">
          <CubeIcon className="h-6 w-6" />
          <span>Assets</span>
        </a>
        <a href="/enquiry" className="flex items-center space-x-3 hover:bg-gray-700 p-3 rounded">
          <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" />
          <span>Enquiry</span>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
