'use client';

import { useState } from 'react';
import { Node } from 'reactflow';
import Sidebar from '@/components/Sidebar';
import WorkflowCanvas from '@/components/Home/WorkflowCanvas';
import ConfigPanel from '@/components/Home/ConfigPanel';
import BottomToolbar from '@/components/Home/BottomToolbar';
import NodeModal from '@/components/Home/NodeModal';
import Projects from '@/components/Projects/Projects';
import Notifications from '@/components/Notifications/Notifications';
import Mails from '@/components/Mails/Mails';
import Header from '@/components/Header';

export default function Page() {
  const [activeTab, setActiveTab] = useState('home'); // default to 'home'
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      

    <div className="flex-1 flex flex-col overflow-hidden relative">
        {/* Common Header */}
        <Header activeTab={activeTab} userName="Chelsea Tang" />

        {/* Content area */}
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
      {selectedNode && <NodeModal node={selectedNode} onClose={() => setSelectedNode(null)} />}
    </div>
  );
}
