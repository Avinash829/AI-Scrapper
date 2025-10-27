'use client';

import { useState } from 'react';
import { Node } from 'reactflow';
import { ReactFlowProvider } from '@xyflow/react';
import Sidebar from '@/components/Sidebar';
import WorkflowCanvas from '@/components/Home/WorkflowCanvas';
import ConfigPanel from '@/components/Home/ConfigPanel';
import BottomToolbar from '@/components/Home/BottomToolbar';
import NodeModal from '@/components/Home/NodeModal';
import Projects from '@/components/Projects/Projects';
import Notifications from '@/components/Notifications/Notifications';
import Mails from '@/components/Mails/Mails';
import Header from '@/components/Header';

import '@xyflow/react/dist/style.css';

export default function Page() {
    const [activeTab, setActiveTab] = useState('home');
    const [selectedNode, setSelectedNode] = useState<Node | null>(null);

    return (
        <ReactFlowProvider>
            <div className="flex h-screen relative overflow-hidden">

                {/*Global CSS Dotted Background */}
                <div
                    className="absolute inset-0 -z-10 bg-gray-50 "
                    style={{
                        backgroundImage:
                            'radial-gradient(black 0.8px, transparent 0.5px)',
                        backgroundSize: '20px 20px',
                    }}
                ></div>

                {/* Sidebar */}
                <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

                {/* Main Content */}
                <div className="flex-1 flex flex-col overflow-hidden relative">
                    <Header activeTab={activeTab} />

                    <div className="flex-1 flex overflow-hidden mt-4">
                        {activeTab === 'home' ? (
                            <>
                                <WorkflowCanvas onNodeSelect={setSelectedNode} />
                                <ConfigPanel />
                                <BottomToolbar />
                            </>
                        ) : activeTab === 'projects' ? (
                            <Projects />
                        ) : activeTab === 'notifications' ? (
                            <Notifications />
                        ) : activeTab === 'mails' ? (
                            <Mails />
                        ) : (
                            <div className="flex-1 flex items-center justify-center text-gray-400 text-lg">
                                {activeTab} content placeholder
                            </div>
                        )}
                    </div>
                </div>

                {/* Node Modal */}
                {selectedNode && (
                    <NodeModal node={selectedNode} onClose={() => setSelectedNode(null)} />
                )}
            </div>
        </ReactFlowProvider>
    );
}
