/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { useCallback } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Node,
  Edge,
  Connection,
  addEdge,
  useNodesState,
  useEdgesState,
  Panel,
  EdgeProps,
  getBezierPath,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { Plus } from 'lucide-react';
import CustomNode from './CustomNode';

const nodeTypes = { custom: CustomNode };

function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}: EdgeProps) {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <path id={id} style={style} className="react-flow__edge-path" d={edgePath} markerEnd={markerEnd} />
      <g transform={`translate(${labelX}, ${labelY})`}>
        <foreignObject width={40} height={40} x={-20} y={-20}>
          <div className="flex items-center justify-center w-full h-full">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-1.5 shadow-lg transition-all hover:scale-110"
              onClick={(e) => {
                e.stopPropagation();
                console.log('Add node between:', id);
              }}
            >
              <Plus size={16} />
            </button>
          </div>
        </foreignObject>
      </g>
    </>
  );
}

const edgeTypes = { custom: CustomEdge };

const initialNodes: Node[] = [
  {
    id: 'node-1',
    type: 'custom',
    position: { x: 250, y: 50 },
    data: { label: 'Trigger', subtitle: 'Manual', color: 'green', type: 'trigger' },
  },
  {
    id: 'node-2',
    type: 'custom',
    position: { x: 250, y: 200 },
    data: { label: 'Assign User', subtitle: 'Assign Chelsea Tang → Lead Owner', color: 'blue', type: 'action' },
  },
  {
    id: 'node-3',
    type: 'custom',
    position: { x: 250, y: 350 },
    data: { label: 'Chat Response', subtitle: 'Scrape LinkedIn Data', color: 'purple', type: 'action' },
  },
  {
    id: 'node-4',
    type: 'custom',
    position: { x: 250, y: 500 },
    data: { label: 'Exit', subtitle: 'Workflow ends here', color: 'red', type: 'exit' },
  },
];

const initialEdges: Edge[] = [
  { id: 'edge-1-2', source: 'node-1', target: 'node-2', type: 'custom', animated: true, style: { stroke: '#6366f1', strokeWidth: 2 } },
  { id: 'edge-2-3', source: 'node-2', target: 'node-3', type: 'custom', animated: true, style: { stroke: '#6366f1', strokeWidth: 2 } },
  { id: 'edge-3-4', source: 'node-3', target: 'node-4', type: 'custom', animated: true, style: { stroke: '#6366f1', strokeWidth: 2 } },
];

interface WorkflowCanvasProps {
  onNodeSelect: (node: Node | null) => void;
}

export default function WorkflowCanvas({ onNodeSelect }: WorkflowCanvasProps) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params: Connection) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
  const onNodeClick = useCallback((_event: React.MouseEvent, node: Node) => onNodeSelect(node), [onNodeSelect]);
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
        minZoom={0.5}
        maxZoom={1.5}
      >
        <Background color="#d1d5db" gap={16} />
        {/* <Controls className="bg-white rounded-lg shadow-lg border border-gray-200" /> */}
        {/* <MiniMap
          className="bg-white rounded-lg shadow-lg border border-gray-200"
          nodeColor={(node) => {
            const colors: Record<string, string> = {
              green: '#10b981',
              blue: '#3b82f6',
              purple: '#8b5cf6',
              red: '#ef4444',
            };
            return colors[node.data.color] || '#6b7280';
          }}
        /> */}
        {/* <Panel position="top-left" className="bg-white rounded-lg shadow-lg border border-gray-200 px-4 py-3 m-4">
          <h3 className="font-semibold text-gray-900">Sales Workflow</h3>
          <p className="text-sm text-gray-500 mt-1">4 nodes • 3 connections</p>
        </Panel> */}
      </ReactFlow>
    </div>
  );
}
