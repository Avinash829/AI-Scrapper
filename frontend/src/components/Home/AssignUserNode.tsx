'use client';

import { Handle, Position } from 'reactflow';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function AssignUserNode() {
    return (
        <div
            className="border bg-white overflow-hidden rounded-lg  w-[400px] text-sm"
            style={{
                minWidth: 320,
                borderColor: '#F3F4F6',
                boxShadow:
                    '0 6px 18px rgba(15,23,42,0.04), 0 1px 2px rgba(15,23,42,0.04)',
            }}
        >
            <Handle
                type="target"
                position={Position.Top}
                 className="!bg-transparent !border-none"
            />

            <div className="flex items-center gap-2 px-5 py-3">
                <div
                    className="flex items-center justify-center rounded-full"
                    style={{
                        width: 26,
                        height: 26,
                    }}
                >
                    <Image
                        src="/assign.svg"
                        alt="User Icon"
                        width={24}
                        height={24}
                    />
                </div>
                <span
                    style={{
                        fontWeight: 600,
                        color: '#111827',
                    }}
                    className="text-sm"
                >
                    Assign User
                </span>
            </div>

            {/* Divider */}
            <div
                style={{
                    height: 1,
                    backgroundColor: '#E5E7EB',
                }}
            />

            {/* Content */}
            <div className="flex items-center justify-between px-5 py-3 text-sm">
                <div>
                    <div
                        style={{
                            fontSize: 12,
                            // color: '#6B7280',
                            fontWeight: 500,
                            letterSpacing: 0.3,
                        }}
                        className='text-gray-500'
                    >
                        USER
                    </div>
                    <div
                        style={{
                            fontSize: 14,
                            fontWeight: 600,
                        }}
                        className='text-gray-500'
                    >
                        Chelsea Tang
                    </div>
                </div>

                <ArrowRight
                    size={16}
                    color="#9CA3AF"
                    strokeWidth={1.5}
                    style={{ marginTop: 10 }}
                />

                <div className="text-right">
                  
                     <div
                        style={{
                            fontSize: 12,
                            // color: '#6B7280',
                            fontWeight: 500,
                            letterSpacing: 0.3,
                        }}
                        className='text-gray-500'
                    >
                                                CUSTOM FIELD

                    </div>
                    <div
                        style={{
                            fontSize: 14,
                            fontWeight: 600,
                        }}
                        className='text-gray-500'
                    >
                                                Lead Owner

                    </div>
                </div>
            </div>

            <Handle
                type="source"
                position={Position.Bottom}
                 className="!bg-transparent !border-none"
            />
        </div>
    );
}
