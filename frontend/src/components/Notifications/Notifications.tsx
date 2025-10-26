'use client';

import { Bell } from 'lucide-react';

export default function Notifications() {
  const notifications = [
    { id: 1, title: 'New user signed up', time: '2h ago' },
    { id: 2, title: 'Project updated', time: '5h ago' },
    { id: 3, title: 'New message received', time: '1d ago' },
    { id: 4, title: 'Workflow completed', time: '2d ago' },
    { id: 5, title: 'Server maintenance scheduled', time: '3d ago' },
  ];

  return (
    <div className="w-[75vw] flex-1 bg-white rounded-4xl shadow-sm border border-gray-200 ml-6 mt-6 mr-6 p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
          <Bell size={20} />
          Notifications
        </h2>
        <button className="text-sm text-blue-600 hover:underline">
          Mark all as read
        </button>
      </div>

      {/* Notifications List */}
      <div className="flex-1 overflow-y-auto space-y-3">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className="p-4 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-between hover:bg-gray-100 transition cursor-pointer"
          >
            <span className="text-gray-800">{notif.title}</span>
            <span className="text-gray-400 text-sm">{notif.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
