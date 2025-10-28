/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useCallback, useEffect } from 'react';
import ReactFlow, {
    Node,
    Edge,
    Connection,
    addEdge,
    useNodesState,
    useEdgesState,
    getStraightPath,
    EdgeProps,
    MarkerType,
    useReactFlow,
    ReactFlowProvider,
} from 'reactflow';
import { Background, Controls } from '@xyflow/react';
import 'reactflow/dist/style.css';

import TriggerNode from './TriggerNode';
import AssignUserNode from './AssignUserNode';
import { AddStepNode, ExitNode } from './CustomNode';
import { Maximize2 } from 'lucide-react';
import Image from 'next/image';

const nodeTypes = {
    trigger: TriggerNode,
    assignUser: AssignUserNode,
    addStep: AddStepNode,
    exit: ExitNode,
};

function CustomEdge({ id, sourceX, sourceY, targetX, targetY, markerEnd }: EdgeProps) {
    const [edgePath] = getStraightPath({ sourceX, sourceY, targetX, targetY });
    return (
        <path
            id={id}
            className="react-flow__edge-path"
            d={edgePath}
            fill="none"
            stroke="#E5E7EB"
            strokeWidth={1.25}
            markerEnd={markerEnd}
        />
    );
}

const edgeTypes = { custom: CustomEdge };

const initialNodes: Node[] = [
    {
        id: 'trigger',
        type: 'trigger',
        position: { x: 460, y: 10 },
        data: {},
    },
    {
        id: 'assignUser',
        type: 'assignUser',
        position: { x: 460, y: 170 },
        data: {},
    },
    {
        id: 'addStep',
        type: 'addStep',
        position: { x: 595, y: 340 },
        data: {},
    },
    {
        id: 'exit',
        type: 'exit',
        position: { x: 632, y: 430 },
        data: {},
    },
];

const initialEdges: Edge[] = [
    {
        id: 'edge-1-2',
        source: 'trigger',
        target: 'assignUser',
        type: 'custom',
        markerEnd: { type: MarkerType.Arrow },
    },
    {
        id: 'edge-2-3',
        source: 'assignUser',
        target: 'addStep',
        type: 'custom',
        markerEnd: { type: MarkerType.Arrow },
    },
    {
        id: 'edge-3-4',
        source: 'addStep',
        target: 'exit',
        type: 'custom',
        markerEnd: { type: MarkerType.Arrow },
    },
];

interface WorkflowCanvasProps {
    onNodeSelect?: (node: Node | null) => void;
}

function CanvasContent({ onNodeSelect }: WorkflowCanvasProps) {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const { fitView } = useReactFlow();

    const onConnect = useCallback(
        (params: Connection) => setEdges((eds) => addEdge(params, eds)),
        [setEdges]
    );

    const onNodeClick = useCallback(
        (_event: React.MouseEvent, node: Node) => onNodeSelect?.(node),
        [onNodeSelect]
    );

    const onPaneClick = useCallback(() => onNodeSelect?.(null), [onNodeSelect]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            fitView({ padding: 0.3, includeHiddenNodes: true });
        }, 150);
        return () => clearTimeout(timeout);
    }, [fitView, nodes]);

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeClick={onNodeClick}
            onPaneClick={onPaneClick}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            fitView
            minZoom={0.8}
            maxZoom={1.2}
        >
            <Background />
               <div className="absolute bottom-8 right-6">
                    <button
                        onClick={() => fitView({ padding: 0.3, duration: 600 })}
                        className="
                            flex
                            items-center
                            gap-2
                            px-4
                            py-2
                            bg-white
                            text-gray-700
                            rounded-xl
                            shadow-md
                            hover:shadow-lg
                            hover:bg-gray-50
                            transition-all
                            text-sm
                            font-medium
                        "
                    >
                        <Image
                            src="/expland.svg"   
                            alt="Zoom to fit icon"
                            width={16}
                            height={16}
                            className="text-gray-700"
                        />
                        <span>Zoom to fit</span>

                    </button>
                </div>
        </ReactFlow>
    );
}

export default function WorkflowCanvas(props: WorkflowCanvasProps) {
    return (
        <div
            className="flex-1 bg-[#fafafa] relative"
            style={{
                fontFamily:
                    'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto',
            }}
        >
            <ReactFlowProvider>
                <CanvasContent {...props} />
            </ReactFlowProvider>
        </div>
    );
}
