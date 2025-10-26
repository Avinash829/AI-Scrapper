'use client';

import { Plus, Mail } from 'lucide-react';

export default function Mails() {
  const mails = [
    { id: 1, subject: 'Welcome to AI Scrapper', sender: 'team@aiscrapper.com', time: '2h ago' },
    { id: 2, subject: 'Project Update', sender: 'manager@willowave.com', time: '5h ago' },
    { id: 3, subject: 'New Workflow Assigned', sender: 'workflow@willowave.com', time: '1d ago' },
    { id: 4, subject: 'Reminder: Meeting', sender: 'hr@willlowave.com', time: '2d ago' },
    { id: 5, subject: 'Newsletter October', sender: 'newsletter@willowave.com', time: '3d ago' },
  ];

  return (
    <div className="h-[80vh] w-[75vw] flex-1 bg-white rounded-4xl shadow-sm border border-gray-200 ml-6 mr-6 mt-6 p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
          <Mail size={20} />
          Mails
        </h2>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors shadow-sm">
          <Plus size={16} />
          Compose Mail
        </button>
      </div>

      {/* Mail List */}
      <div className="flex-1 overflow-y-auto space-y-3">
        {mails.map((mail) => (
          <div
            key={mail.id}
            className="p-4 bg-gray-50 rounded-xl border border-gray-200 flex flex-col hover:bg-gray-100 transition cursor-pointer"
          >
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-800">{mail.subject}</span>
              <span className="text-gray-400 text-sm">{mail.time}</span>
            </div>
            <div className="text-gray-500 text-sm mt-1">{mail.sender}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
