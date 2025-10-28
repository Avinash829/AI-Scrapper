/* eslint-disable react-hooks/set-state-in-effect */
'use client';
import { Workflow, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function BottomToolbar() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; 
    return (
        <div
            className="
                fixed
                top-[90vh]
                left-[545px]
                w-[330px]
                h-[50px]
                flex
                items-center
                justify-between
                gap-[5px]
                bg-white
                border
                border-gray-200
                rounded-[100px]
                px-[10px]
                py-[8px]
                opacity-100
                shadow-lg
            "
        >
            <button
                className="
                    flex
                    items-center
                    gap-2
                    px-4
                    py-2
                    rounded-full
                    text-xs
                    text-gray-600
                    bg-gray-100
                    hover:bg-blue-100
                    transition-colors
                "
            >
                <Workflow size={18} />
                <span className="text-xs text-gray-700">Workflow</span>
            </button>

            <button
                className="
                    flex
                    items-center
                    gap-2
                    px-4
                    py-2
                    rounded-full
                    hover:bg-gray-200
                    transition-colors
                    text-gray-700
                    text-xs
                "
            >
                <Image
                    src="/sheet.svg"
                    alt="Sheets Icon"
                    width={18}
                    height={18}
                />
                <span className="text-xs text-gray-400">Sheet</span>
            </button>

            <button
                className="
                    flex
                    items-center
                    gap-2
                    px-4
                    py-2
                    rounded-full
                    hover:bg-gray-200
                    transition-colors
                    text-[#3995FF]                   
                     text-xs
                "
            >
                <Image
                    src="/askai.svg"    
                    alt="askai"
                    width={16}
                    height={16}
                    className="text-gray-700"
                />

                <span className="text-xs">Ask AI</span>
            </button>
        </div>
    );
}
