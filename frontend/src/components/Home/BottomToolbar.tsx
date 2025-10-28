'use client';
import { Workflow, Table, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function BottomToolbar() {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg border border-gray-200 px-2 py-1 flex items-center gap-1">
      <button
    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm text-gray-600 bg-gray-100 hover:bg-blue-100 transition-colors">
            <Workflow size={18} />

    <span className="font-medium text--gray-700">Workflow</span>
</button>

      {/* <div className="w-px h-6 bg-gray-200"></div> */}
      <button className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors text-gray-700 text-sm">
        <Image
            src="/sheet.svg"
            alt="Sheets Icon"
            width={18}
            height={18}
        />
        <span className="font-medium text-gray-400">Sheet</span>
    </button>

      {/* <div className="w-px h-6 bg-gray-200"></div> */}
      <button className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors text-indigo-400 text-sm">
        <Sparkles size={18} />
        <span className="font-medium">Ask AI</span>
      </button>
    </div>
  );
}
