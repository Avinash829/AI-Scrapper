'use client';
import { Plus } from 'lucide-react';

interface AddNodeButtonProps {
  edgeId: string;
}

export default function AddNodeButton({ edgeId }: AddNodeButtonProps) {
  const handleAddNode = () => {
    console.log('Add node between:', edgeId);
  };

  return (
    <button
      onClick={handleAddNode}
      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 shadow-lg transition-all z-10"
      title="Add node"
    >
      <Plus size={20} />
    </button>
  );
}
