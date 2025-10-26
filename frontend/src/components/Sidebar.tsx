'use client';
import { HiHome, HiMail, HiBell, HiCog, HiFolder } from 'react-icons/hi';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const menuItems = [
    { id: 'projects', label: 'Projects', icon: HiFolder },
    { id: 'home', label: 'Home', icon: HiHome },
    { id: 'notifications', label: 'Notifications', icon: HiBell },
    { id: 'mails', label: 'Mails', icon: HiMail },
    { id: 'settings', label: 'Settings', icon: HiCog },
  ];

  return (
    <div className="w-64 border border-gray-200 flex flex-col h-[90vh] rounded-4xl bg-white shadow-sm ml-6 mt-6">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900">AI Scrapper</h1>
      </div>

      <nav className="flex-1 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-all ${
                activeTab === item.id
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
