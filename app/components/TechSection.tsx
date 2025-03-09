"use client";
import { technologies } from "@/app/constants";
import TechCard from "@/app/components/TechCard";

const TechSection = () => {
    return (
        <div className="mx-auto lg:max-w-[1152px] flex flex-row flex-wrap justify-center gap-10">
            {technologies.map((technology) => (
				<div className="w-28 h-28" key={technology.name}>
					<TechCard imgUrl={technology.icon} desc={technology.name} />
				</div>
			))}
        </div>
    )
}

export default TechSection