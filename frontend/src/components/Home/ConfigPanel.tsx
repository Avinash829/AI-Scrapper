'use client';

import { useState, useRef, useEffect } from 'react';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import { FiChevronDown, FiCopy } from 'react-icons/fi';
import Image from 'next/image';
import { HiOutlinePencil } from "react-icons/hi";
import { SparklesIcon } from "@heroicons/react/24/outline";

export default function ConfigPanel() {
    const [showDescription, setShowDescription] = useState(false);
    const [selected, setSelected] = useState('LinkedIn');
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const platforms = [
        { name: 'LinkedIn', icon: <FaLinkedin className="text-blue-600 text-lg" /> },
        { name: 'Twitter', icon: <FaTwitter className="text-sky-500 text-lg" /> },
        { name: 'Facebook', icon: <FaFacebook className="text-blue-500 text-lg" /> },
        { name: 'Instagram', icon: <FaInstagram className="text-pink-500 text-lg" /> },
        { name: 'GitHub', icon: <FaGithub className="text-gray-700 text-lg" /> },
    ];

    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="w-85 border border-gray-200 flex flex-col h-[82vh] rounded-4xl bg-white shadow-sm mr-6 mt-2 scrollbar-hide">
            
            <div className="p-6 flex items-center gap-3">
                            <Image
                                src="/logo.svg"
                                alt="AI Scrapper Logo"
                                width={32}
                                height={32}
                                className="rounded-md"
                            />
                            <h2 className="text-lg font-semibold text-gray-900">Chat Response</h2>
                        </div>

            {/* <div className='w-full bg-black'></div> */}

            {/* Content */}
            <div className="p-6 flex-1 overflow-y-auto space-y-4 scrollbar-hide">
                {/* Prompt */}
                <div className="relative mb-6">
                    {/* Header with Pen Icon */}
                    <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-medium text-gray-900">
                            Prompts
                        </label>
                        <Image
                            src="/prompt_pen.svg"
                            alt="Edit"
                            width={16}
                            height={16}
                            className="text-gray-700 hover:text-black cursor-pointer"
                        />
                    </div>


                    <div className="relative">
                        <textarea
                            className="w-full bg-gray-100 rounded-xl px-4 py-3 pr-10 text-gray-700 text-xs resize-none"
                            rows={3}
                            placeholder="Enter your prompt here..."
                        />


                        {/* AI Sparkles Icon (bottom-right) */}
                        <SparklesIcon className="absolute right-3 bottom-3 w-5 h-5 text-blue-500 pointer-events-none" />
                    </div>
                </div>

                {/* Platform with React Icons */}
                <div ref={dropdownRef}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Platforms</label>
                    <div className="relative">
                        <button
                            onClick={() => setOpen(!open)}
                            className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-gray-100"
                        >
                            <div className="flex items-center gap-2 text-gray-500 text-sm">
                                {platforms.find((p) => p.name === selected)?.icon}
                                <span>{selected}</span>
                            </div>
                            <FiChevronDown
                                size={18}
                                className={`text-gray-500 transition-transform ${
                                    open ? 'rotate-180' : ''
                                }`}
                            />
                        </button>

                        {open && (
                            <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
                                {platforms.map((p) => (
                                    <button
                                        key={p.name}
                                        onClick={() => {
                                            setSelected(p.name);
                                            setOpen(false);
                                        }}
                                        className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-50 ${
                                            selected === p.name ? 'bg-gray-100' : ''
                                        }`}
                                    >
                                        {p.icon}
                                        <span className="text-gray-700">{p.name}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Tags */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
                    <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg bg-gray-100 text-xs "
                        placeholder="Click to add a tag..."
                    />
                </div>

                {/* Description */}
                <div>
                    <button
                        onClick={() => setShowDescription(!showDescription)}
                        className="flex items-center justify-between w-full text-sm font-medium text-gray-700 mb-2"
                    >
                        <span>Description</span>
                        <FiChevronDown
                            size={16}
                            className={`transition-transform ${
                                showDescription ? 'rotate-180' : ''
                            }`}
                        />
                    </button>
                    {showDescription && (
                        <textarea
                            className="w-full px-4 py-3 rounded-lg bg-gray-100 text-sm"
                            rows={3}
                            placeholder="Add description..."
                        />
                    )}
                </div>
            </div>

            {/* Start Button */}
            <div className="p-6 shrink-0">
                <button className="w-full flex items-center justify-center gap-2 bg-indigo-400 hover:bg-blue-700 text-gray-200 font-medium py-2 rounded-lg transition-all shadow-sm text-sm">
                    <FiCopy size={16} className="text-white" />
                    <span>Start Scraping</span>
                </button>
            </div>

        </div>
    );
}
