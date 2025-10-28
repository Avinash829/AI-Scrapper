'use client';

import { Handle, Position } from 'reactflow';
import Image from 'next/image';

export default function TriggerNode() {
    return (
        <div
            className="px-5 py-4 rounded-lg border bg-white w-[400px] text-sm"
            style={{
                minWidth: 300,
                borderColor: '#F3F4F6',
                boxShadow:
                    '0 6px 18px rgba(15,23,42,0.04), 0 1px 2px rgba(15,23,42,0.04)',
            }}
        >
            {/* Top content */}
            <div className="flex items-center gap-2 mb-3">
                <Image
                    src="/trigger.svg"
                    alt="Trigger Icon"
                    width={12}
                    height={12}
                />
                <span
                    style={{
                        fontWeight: 600,
                        color: '#111827',
                    }}
                    className="text-sm"
                >
                    Trigger
                </span>
            </div>

            {/* Tag */}
            <div
                className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5"
                style={{
                    borderColor: '#E5E7EB',
                    backgroundColor: '#FFFFFF',
                    boxShadow:
                        '0 1px 2px rgba(15,23,42,0.05), inset 0 1px 0 rgba(255,255,255,0.6)',
                }}
            >
                <Image
                    src="/manual.svg"
                    alt="Manual Icon"
                    width={12}
                    height={12}
                />
                <span
                    style={{
                        fontSize: 13,
                        fontWeight: 500,
                        color: '#111827',
                        letterSpacing: 0.3,
                    }}
                >
                    MANUAL
                </span>
            </div>

            <Handle
                type="source"
                position={Position.Bottom}
                className="!bg-transparent !border-none"
            />
        </div>
    );
}
