/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useCallback } from 'react';
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
} from 'reactflow';
import {
  Background,
} from '@xyflow/react';
import 'reactflow/dist/style.css';

// Import your 4 custom node components
import TriggerNode from './TriggerNode';
import AssignUserNode from './AssignUserNode';
import { BackgroundVariant } from '@xyflow/react';
import { AddStepNode, ExitNode } from './CustomNode';

// Register all node types
const nodeTypes = {
    trigger: TriggerNode,
    assignUser: AssignUserNode,
    addStep: AddStepNode,
    exit: ExitNode,
};

function CustomEdge({ id, sourceX, sourceY, targetX, targetY, markerEnd }: EdgeProps) {
    const [edgePath] = getStraightPath({
        sourceX,
        sourceY,
        targetX,
        targetY,
    });

    return (
        <path
            id={id}
            className="react-flow__edge-path"
            d={edgePath}
            fill="none"
            stroke="#E5E7EB"   /* subtle gray */
            strokeWidth={1.25}
            markerEnd={markerEnd}   /* <-- keep arrowheads */
        />
    );
}


const edgeTypes = { custom: CustomEdge };

// ---------- Nodes ----------
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
        markerEnd: {
        type: MarkerType.Arrow,
        },
        label: 'default arrow',
    },
    {
        id: 'edge-2-3',
        source: 'assignUser',
        target: 'addStep',
        type: 'custom',
        markerEnd: {
        type: MarkerType.Arrow,
        },
        label: 'default arrow',
    },
    {
        id: 'edge-3-4',
        source: 'addStep',
        target: 'exit',
        type: 'custom',
        markerEnd: {
        type: MarkerType.Arrow,
        },
        label: 'default arrow',
    },
];


interface WorkflowCanvasProps {
    onNodeSelect?: (node: Node | null) => void;
}

export default function WorkflowCanvas({ onNodeSelect }: WorkflowCanvasProps) {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        (params: Connection) => setEdges((eds) => addEdge(params, eds)),
        [setEdges]
    );

    const onNodeClick = useCallback(
        (_event: React.MouseEvent, node: Node) => onNodeSelect?.(node),
        [onNodeSelect]
    );

    const onPaneClick = useCallback(() => onNodeSelect?.(null), [onNodeSelect]);

    return (
        <div
            className="flex-1 bg-[#fafafa] relative"
            style={{
                fontFamily:
                    'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto',
            }}
        >
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

        </ReactFlow>

        </div>
    );
}
