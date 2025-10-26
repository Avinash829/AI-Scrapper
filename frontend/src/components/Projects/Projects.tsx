'use client';

import { Plus } from 'lucide-react';

export default function Projects() {
  // Dummy list of projects
  const projects = [
    { id: 1, name: 'Website Redesign' },
    { id: 2, name: 'Marketing Campaign' },
    { id: 3, name: 'Lead Generation' },
  ];

  return (
    <div className="w-[75vw] flex-1 bg-white rounded-4xl shadow-sm border border-gray-200 ml-6 mt-6 mr-6 p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Projects</h2>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors shadow-sm">
          <Plus size={16} />
          Add New Project
        </button>
      </div>

      {/* Projects List */}
      <div className="flex-1 overflow-y-auto space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-4 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-between hover:bg-gray-100 cursor-pointer transition"
          >
            <span className="font-medium text-gray-800">{project.name}</span>
            <span className="text-gray-400 text-sm">#ID {project.id}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
