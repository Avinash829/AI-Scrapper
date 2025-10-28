'use client';
import Image from 'next/image';

interface SidebarProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
    const menuItems = [
        { id: 'projects', label: 'Projects', icon: '/folder_n.svg'  },
        { id: 'home', label: 'Home', icon: '/home.svg' },
        { id: 'notifications', label: 'Notifications', icon: '/bell.svg' },
        { id: 'mails', label: 'Mails', icon: '/mail.svg' },
        { id: 'settings', label: 'Settings', icon: '/setting-2.svg' },
    ];

    return (
        <div className="w-[255px] shadow-sm flex flex-col h-[95vh] rounded-4xl bg-white ml-6 my-6">
            {/* Header */}
            <div className="p-6 border-b border-gray-200 flex items-center gap-3">
                <Image
                    src="/logo.svg"
                    alt="AI Scrapper Logo"
                    width={32}
                    height={32}
                    className="rounded-md"
                />
                <h2 className="text-sm font-semibold text-gray-900">
                    Ai Scrapper
                </h2>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4">
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-sm rounded-lg mb-1 transition-all ${
                            activeTab === item.id
                                ? 'bg-gray-200 text-gray-900'
                                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                        }`}
                    >
                        <Image
                            src={item.icon}
                            alt={item.label}
                            width={14}
                            height={14}
                            className="object-contain"
                        
                        />
                        <span className="font-medium">{item.label}</span>
                    </button>
                ))}
            </nav>
        </div>
    );
}
