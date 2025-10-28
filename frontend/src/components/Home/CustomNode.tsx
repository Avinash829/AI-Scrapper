"use client";

import { Handle, Position } from "@xyflow/react";
import { HiPlus } from "react-icons/hi";

export function AddStepNode() {
    return (
        <div className="relative flex items-center gap-2 bg-white border border-gray-200 rounded-full shadow-sm px-5 py-2 cursor-pointer hover:shadow-md transition">
            <HiPlus className="text-gray-900 text-xl" />
            <span className="text-gray-900 font-semibold text-lg leading-none text-sm">
                Add Step
            </span>
            <Handle type="target" position={Position.Top} className="!bg-transparent !border-none" />
            <Handle type="source" position={Position.Bottom} className="!bg-transparent !border-none" />
        </div>
    );
}

export function ExitNode() {
    return (
        <div className="relative flex items-center justify-center bg-white border border-gray-200 rounded-full shadow-sm px-3 py-1.5">
            <span className="text-gray-400 font-medium text-base leading-none">
                Exit
            </span>
            <Handle type="target" position={Position.Top} className="!bg-transparent !border-none" />
        </div>
    );
}
