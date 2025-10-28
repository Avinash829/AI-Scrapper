'use client';

import Image from 'next/image';

interface HeaderProps {
    activeTab: string;
    selectedProject?: string | null;
}

export default function Header({ activeTab, selectedProject }: HeaderProps) {
    const isHome = activeTab === 'home';
    const isProjects = activeTab === 'projects';

    const displayText = isHome ? (
        <span className="text-sm flex items-center">
            <span className="font-medium text-gray-800">Workflows</span>
            <span className="text-gray-400 ml-2 font-normal">· Updated 2 mins ago</span>
        </span>
    ) : isProjects && selectedProject ? (
        <span className="text-sm flex items-center text-gray-500">
            <span className="cursor-pointer text-black hover:text-gray-900 font-medium">
                Projects
            </span>
            <span className="mx-2 text-gray-400">›</span>
            <span className="text-gray-400 font-normal">Project Name</span>
            <span className="mx-2 text-gray-400">›</span>
            <span className="text-gray-400 font-normal">Sheet</span>
        </span>
    ) : (
        <span className="text-sm font-semibold text-gray-800">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
        </span>
    );

    return (
        <div className="w-[78vw] h-[60px] bg-white rounded-4xl shadow-sm flex items-center justify-between px-6 mt-6 ml-8">
            <div className="text-sm font-semibold text-gray-800 ml-6">
                {displayText}
            </div>

            <div className="flex items-center gap-[10px]">
                <Image
                    src="/user.svg"
                    alt="User Avatar"
                    width={34}
                    height={34}
                    className="rounded-full border border-gray-100 mr-4"
                />
            </div>
        </div>
    );
}
