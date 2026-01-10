import React from 'react'
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className='flex items-center justify-center h-[calc(100vh-4rem)] w-full'>
        <div className='relative w-full h-full bg-cover bg-center' style={{ backgroundImage: "url('hero1.jpg')"}}>
            <div className="flex flex-col relative text-[#fbf9f5] text-right text-xs font-medium absolute top-4 right-4 text-black">
                <p>RERA‑compliant</p>
                <p>InterNACHI‑inspired practices</p>
                <p>Serving all 7 emirates</p>
            </div>
            <div className="flex flex-col gap-2 max-w-3xl top-110 left-16 absolute text-[#fbf9f5]">
                <h1 className='text-6xl font-bold leading-tight tracking-tight'>
                    Snag <span className='font-special italic'>properties</span> across the <span 
                        className='text-white font-bold'
                    >UAE</span>
                </h1>
                <p className='text-lg text-white/90'>
                Professional snagging, inspection, and property services for apartments, villas, and
                 townhouses across all seven emirates.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Hero;