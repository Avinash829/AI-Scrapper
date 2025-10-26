'use client';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function ConfigPanel() {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="w-96 border border-gray-200 flex flex-col h-[80vh] rounded-4xl bg-white shadow-sm mr-6 mt-2 scrollbar-hide">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 flex-shrink-0">
        <h2 className="text-xl font-semibold text-gray-900">Chat Response</h2>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 overflow-y-auto space-y-6">
        {/* Prompt */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Prompt</label>
          <textarea
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
            rows={4}
            placeholder="Enter your prompt here..."
            defaultValue="Scrape profile data from LinkedIn"
          />
        </div>

        {/* Platform */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Platform</label>
          <div className="relative">
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white">
              <option>LinkedIn</option>
              <option>Twitter</option>
              <option>Facebook</option>
              <option>Instagram</option>
              <option>GitHub</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
          </div>
        </div>

        {/* Tags */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
          <input
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Add tags..."
            defaultValue="linkedin, scraping, lead"
          />
        </div>

        {/* Description */}
        <div>
          <button
            onClick={() => setShowDescription(!showDescription)}
            className="flex items-center justify-between w-full text-sm font-medium text-gray-700 mb-2"
          >
            <span>Description</span>
            <ChevronDown
              size={16}
              className={`transition-transform ${showDescription ? 'rotate-180' : ''}`}
            />
          </button>
          {showDescription && (
            <textarea
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
              rows={3}
              placeholder="Add description..."
            />
          )}
        </div>
      </div>

      {/* Button */}
      <div className="p-6 shrink-0">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors shadow-sm">
          Start Scraping
        </button>
      </div>
    </div>
  );
}
