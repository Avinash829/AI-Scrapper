'use client';
import { Handle, Position } from 'reactflow';
import { Zap, Users, MessageSquare, XCircle } from 'lucide-react';

interface CustomNodeProps {
  data: {
    label: string;
    subtitle: string;
    color: string;
    type: string;
  };
}

export default function CustomNode({ data }: CustomNodeProps) {
  const getIcon = () => {
    switch (data.type) {
      case 'trigger':
        return <Zap size={20} />;
      case 'action':
        return data.label === 'Assign User' ? <Users size={20} /> : <MessageSquare size={20} />;
      case 'exit':
        return <XCircle size={20} />;
      default:
        return null;
    }
  };

  const getColorClasses = () => {
    const colors: Record<string, { bg: string; border: string; icon: string; hover: string }> = {
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        icon: 'text-green-600',
        hover: 'hover:bg-green-100',
      },
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        icon: 'text-blue-600',
        hover: 'hover:bg-blue-100',
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        icon: 'text-purple-600',
        hover: 'hover:bg-purple-100',
      },
      red: {
        bg: 'bg-red-50',
        border: 'border-red-200',
        icon: 'text-red-600',
        hover: 'hover:bg-red-100',
      },
    };
    return colors[data.color] || colors.blue;
  };

  const colorClasses = getColorClasses();

  return (
    <div
      className={`px-5 py-4 shadow-lg rounded-xl border-2 ${colorClasses.bg} ${colorClasses.border} ${colorClasses.hover} transition-all cursor-pointer min-w-[280px]`}
    >
      {data.type !== 'trigger' && (
        <Handle type="target" position={Position.Top} className="w-3 h-3 bg-gray-400" />
      )}

      <div className="flex items-start gap-3">
        <div className={`${colorClasses.icon} mt-0.5`}>{getIcon()}</div>
        <div className="flex-1">
          <div className="font-semibold text-gray-900">{data.label}</div>
          <div className="text-sm text-gray-600 mt-1">{data.subtitle}</div>
        </div>
      </div>

      {data.type !== 'exit' && (
        <Handle type="source" position={Position.Bottom} className="w-3 h-3 bg-gray-400" />
      )}
    </div>
  );
}
