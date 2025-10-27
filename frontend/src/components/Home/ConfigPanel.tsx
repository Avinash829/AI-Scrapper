'use client';

import { useState, useRef, useEffect } from 'react';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import { FiChevronDown, FiCopy } from 'react-icons/fi';
import Image from 'next/image';

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
        <div className="w-90 border border-gray-200 flex flex-col h-[82vh] rounded-4xl bg-white shadow-sm mr-6 mt-2 scrollbar-hide">
            
            <div className="p-6 border-b border-gray-200 flex items-center gap-3">
                            <Image
                                src="/ai-scrapper-logo.png"
                                alt="AI Scrapper Logo"
                                width={36}
                                height={36}
                                className="rounded-lg"
                            />
                            <h2 className="text-lg font-semibold text-gray-900">Chat Response</h2>
                        </div>

            {/* Content */}
            <div className="p-6 flex-1 overflow-y-auto space-y-4 scrollbar-hide">
                {/* Prompt */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Prompt</label>
                    <textarea
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none bg-gray-200"
                        rows={4}
                        placeholder="Enter your prompt here..."
                        defaultValue="Scrape profile data from LinkedIn"
                    />
                </div>

                {/* Platform with React Icons */}
                <div ref={dropdownRef}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Platform</label>
                    <div className="relative">
                        <button
                            onClick={() => setOpen(!open)}
                            className="w-full flex items-center justify-between px-4 py-3 border border-gray-300 rounded-lg bg-gray-200 hover:bg-gray-300 transition-all focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            <div className="flex items-center gap-2 text-gray-700">
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-200"
                        placeholder="Add tags..."
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
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none bg-gray-200"
                            rows={3}
                            placeholder="Add description..."
                        />
                    )}
                </div>
            </div>

            {/* Start Button */}
            <div className="p-6 shrink-0">
                <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-all shadow-sm">
                    <FiCopy size={18} className="text-white" />
                    <span>Start Scraping</span>
                </button>
            </div>

        </div>
    );
}
