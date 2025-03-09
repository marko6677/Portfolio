"use client";
import { Suspense } from "react"
import Image from 'next/image'

const TechCard = ({ imgUrl, desc }: { imgUrl: string, desc: string }) => {
    return (
        <Suspense fallback={<div>Loading ...</div>}>
            <div className="w-[5rem] h-[5rem] rounded-lg">
                <div className="w-[80px] h-[80px] mx-auto">
                <img src={ imgUrl } className="w-full h-full" alt="" />
                </div>
                
                <p className="text-white text-[12px] text-center p-2">{desc}</p>
            </div>
        </Suspense>
    )
}

export default TechCard;