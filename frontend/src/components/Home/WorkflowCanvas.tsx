/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { useCallback } from 'react';
import ReactFlow, {
    Background,
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
import 'reactflow/dist/style.css';
import { Plus } from 'lucide-react';
import CustomNode from './CustomNode';

const nodeTypes = { custom: CustomNode };

function CustomEdge({ id, source, target, sourceX, sourceY, targetX, targetY, markerEnd }: EdgeProps) {
    const [edgePath, labelX, labelY] = getStraightPath({
        sourceX,
        sourceY,
        targetX,
        targetY,
    });

    const handleAddNode = (e: React.MouseEvent) => {
        e.stopPropagation();
        console.log('Add node between:', id);
    };

    const showAddButton = id === 'edge-2-3'; 

   return (
    <>
        <path
            id={id}
            className="react-flow__edge-path stroke-gray-300"
            d={edgePath}
            fill="none"
            strokeWidth={1.5}
            markerEnd={markerEnd}
        />
        {showAddButton && (
            <g transform={`translate(${labelX}, ${labelY})`}>
                <foreignObject width={120} height={45} x={-60} y={-22}>
                    <div className="flex items-center justify-center w-full h-full">
                        <button
                            onClick={handleAddNode}
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-full shadow-sm hover:bg-gray-50 transition-all"
                        >
                            {/* <Plus size={14} strokeWidth={2} className="text-gray-700" /> */}
                            <span className="leading-none">Add Step</span>
                        </button>
                    </div>
                </foreignObject>
            </g>
        )}
    </>
);

}

const edgeTypes = { custom: CustomEdge };

// ✅ Nodes - matching Figma color scheme
const initialNodes: Node[] = [
    {
        id: 'node-1',
        type: 'custom',
        position: { x: 400, y: 50 },
        data: {
            label: 'Trigger',
            subtitle: 'Manual',
            color: '#22c55e', // soft green
            type: 'trigger',
        },
    },
    {
        id: 'node-2',
        type: 'custom',
        position: { x: 400, y: 230 },
        data: {
            label: 'Assign User',
            subtitle: 'Assign Avinash → Lead Owner',
            color: '#3b82f6', // soft blue
            type: 'action',
        },
    },
    {
        id: 'node-3',
        type: 'custom',
        position: { x: 400, y: 420 },
        data: {
            label: 'Exit',
            subtitle: 'Workflow ends here',
            color: '#ef4444', // soft red
            type: 'exit',
        },
    },
];

// ✅ Edges - soft gray with arrow
const initialEdges: Edge[] = [
    {
        id: 'edge-1-2',
        source: 'node-1',
        target: 'node-2',
        type: 'custom',
        markerEnd: {
            type: MarkerType.ArrowClosed,
            color: '#9ca3af',
            width: 16,
            height: 16,
        },
    },
    {
        id: 'edge-2-3',
        source: 'node-2',
        target: 'node-3',
        type: 'custom',
        markerEnd: {
            type: MarkerType.ArrowClosed,
            color: '#9ca3af',
            width: 16,
            height: 16,
        },
    },
];

interface WorkflowCanvasProps {
    onNodeSelect: (node: Node | null) => void;
}

export default function WorkflowCanvas({ onNodeSelect }: WorkflowCanvasProps) {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        (params: Connection) => setEdges((eds) => addEdge(params, eds)),
        [setEdges]
    );

    const onNodeClick = useCallback(
        (_event: React.MouseEvent, node: Node) => onNodeSelect(node),
        [onNodeSelect]
    );

    const onPaneClick = useCallback(() => onNodeSelect(null), [onNodeSelect]);

    return (
        <div className="flex-1 bg-gray-50 relative">
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
                <Background color="black" gap={16} />
            </ReactFlow>
        </div>
    );
}
