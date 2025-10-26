'use client';
import { Workflow, Table, Sparkles } from 'lucide-react';

export default function BottomToolbar() {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg border border-gray-200 px-2 py-2 flex items-center gap-2">
      <button className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-50 transition-colors text-gray-700">
        <Workflow size={18} />
        <span className="font-medium">Workflow</span>
      </button>
      <div className="w-px h-6 bg-gray-200"></div>
      <button className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-50 transition-colors text-gray-700">
        <Table size={18} />
        <span className="font-medium">Sheets</span>
      </button>
      <div className="w-px h-6 bg-gray-200"></div>
      <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors text-white">
        <Sparkles size={18} />
        <span className="font-medium">Ask AI</span>
      </button>
    </div>
  );
}
