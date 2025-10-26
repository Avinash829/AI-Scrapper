'use client';

import { User } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  userName?: string;
}

export default function Header({ activeTab, userName = 'Avinash' }: HeaderProps) {
  return (
    <div className="w-[78vw] h-[60px] bg-white rounded-2xl shadow-md flex items-center justify-between px-6 mt-6 ml-6">
      {/* Left: Active Tab */}
      <div className="text-lg font-semibold text-gray-800">
        {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
      </div>

      {/* Right: User */}
      <div className="flex items-center gap-3">
        <User size={24} className="text-gray-600" />
        <span className="text-gray-700 font-medium">{userName}</span>
      </div>
    </div>
  );
}
