'use client';
import { X, ChevronDown } from 'lucide-react';

interface NodeModalProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  node: any;
  onClose: () => void;
}

export default function NodeModal({ node, onClose }: NodeModalProps) {
  return (
    <div className="fixed inset-0 bg-opacity-100 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white">
          <h2 className="text-xl font-semibold text-gray-900">{node.data.label}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {node.id === 'node-2' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Assign To
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  defaultValue="Chelsea Tang"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Role
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  defaultValue="Lead Owner"
                />
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors shadow-sm">
                Save Assignment
              </button>
            </>
          )}

          {node.id === 'node-1' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Trigger Type
                </label>
                <div className="relative">
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white">
                    <option>Manual</option>
                    <option>Scheduled</option>
                    <option>Webhook</option>
                    <option>Event-based</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                </div>
              </div>

              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-lg transition-colors shadow-sm">
                Configure Trigger
              </button>
            </>
          )}

          {node.id === 'node-4' && (
            <>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-sm text-red-800">
                  This is the end of the workflow. No further actions will be executed.
                </p>
              </div>

              <button className="w-full bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 rounded-lg transition-colors shadow-sm">
                Close Workflow
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
