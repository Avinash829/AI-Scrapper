'use client';

import Image from 'next/image';

interface ProjectsProps {
    selectedProject: string | null;
    setSelectedProject: (name: string | null) => void;
}

export default function Projects({ selectedProject, setSelectedProject }: ProjectsProps) {
    const projects = [
        { id: 1, name: 'SALES CALL 1', description: 'NO DESCRIPTION' },
    ];

    return (
        <div className="h-[80vh] w-[68vw] flex-1 bg-white rounded-4xl shadow-sm border border-gray-200 ml-6 mr-6 mt-6 p-6 flex flex-col">
            
            {/* Header inside Projects component */}
            <div className="flex items-center justify-between mb-6">
                {!selectedProject ? (
                    <>
                        <h2 className="text-base font-semibold text-gray-900">
                            Total Project : {projects.length}
                        </h2>
                        <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-700 text-gray-50 px-4 py-2 rounded-lg transition-colors shadow-sm text-sm">
                            <Image
                                src="/add.svg"
                                alt="Add Project"
                                width={14}
                                height={14}
                            />
                            Add Project
                        </button>
                    </>
                ) : (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        {/* <span
                            onClick={() => setSelectedProject(null)}
                            className="cursor-pointer hover:text-gray-800 font-medium"
                        >
                            Projects
                        </span>
                        <span className="text-gray-400">›</span>
                        <span className="font-semibold text-gray-800">{selectedProject}</span> */}
                    </div>
                )}
            </div>

            {/* Main content */}
            {!selectedProject ? (
                <div className="flex-1 overflow-y-auto space-y-3">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project.name)}
                            className="p-4 bg-white rounded-xl border border-gray-200 flex items-center justify-between hover:shadow-sm cursor-pointer transition"
                        >
                            <div>
                                <div className="font-medium text-gray-800">
                                    {project.name}
                                </div>
                                <div className="text-gray-400 font-medium text-xs mt-2">
                                    {project.description.toUpperCase()}
                                </div>
                            </div>
                            <div className="flex -space-x-3">
                                <Image
                                    src="/project1.svg"
                                    alt="Member 2"
                                    width={28}
                                    height={28}
                                    className="rounded-full border border-white"
                                />
                                <Image
                                    src="/project2.svg"
                                    alt="Member 3"
                                    width={28}
                                    height={28}
                                    className="rounded-full border border-white"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex-1 flex items-center justify-center text-gray-400 text-sm">
                    {/* Placeholder for Sheet / Project inner view */}
                    {/* Project: {selectedProject} */}
                </div>
            )}
        </div>
    );
}
