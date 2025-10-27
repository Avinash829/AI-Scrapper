'use client';

import Image from 'next/image';

interface HeaderProps {
    activeTab: string;
}

export default function Header({ activeTab }: HeaderProps) {
    return (
        <div className="w-[78vw] h-[60px] bg-white rounded-4xl shadow-md flex items-center justify-between px-6 mt-6 ml-6">
          
            <div className="text-lg font-semibold text-gray-800">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </div>

            
            <div className="flex items-center gap-3">
                <Image
                    src="/avatar.png"
                    alt="User Avatar"
                    width={30}
                    height={30}
                    className="rounded-full border border-gray-200 shadow-sm"
                />
            </div>
        </div>
    );
}
