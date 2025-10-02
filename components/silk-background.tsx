'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const Silk = dynamic(() => import('./silk'), {
    ssr: false,
    loading: () => null,
});

export default function SilkBackground() {
    return (
        <Suspense fallback={null}>
            <div className="fixed inset-0 -z-10 w-full h-screen">
                <Silk
                    speed={5}
                    scale={1}
                    color="#1e3a8a"
                    noiseIntensity={1.5}
                    rotation={0}
                />
            </div>
        </Suspense>
    );
}
