"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Tilt } from "react-tilt";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "./HigherOrderComponents";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type ProjectCardProps = {
	index: number;
	id: number;
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link?: string;
	deploy_link?: string; // Make optional
	video_link?: string;  // Make optional
	platform?: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web" | "Automation"; // Make optional and add "Automation"
};

const ProjectCard = ({
	index,
	id,
	name,
	description,
	tags,
	image,
	source_code_link,
	deploy_link,
	video_link,
	platform
}: ProjectCardProps) => {
	const router = useRouter();
	const [isHovered, setIsHovered] = useState(false);

	const handleCardClick = () => {
		router.push(`/projects/${id}`);
	};
	return (
		<motion.div 
			variants={fadeIn("up", "spring", index * 0.5, 0.75)}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className="cursor-pointer"
			onClick={handleCardClick}
		>
			<Tilt
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
			>
				<div className="relative w-full h-[230px]">
					<Image
						src={image}
						width={1000}
						height={1000}
						alt="project_image"
						className="w-full h-full object-cover rounded-2xl"
					/>

					<div className="absolute inset-0 flex justify-end m-3 card-img_hover">
						{source_code_link && <Link
							href={source_code_link}
							target="_blank"
							className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
						>
							<Image
								src="/tech/github.webp"
								width={24}
								height={24}
								alt="source-code"
								className="object-contain"
							/>
						</Link>}
						{deploy_link && platform &&
							<Link
								href={deploy_link}
								target="_blank"
								className="black-gradient w-10 h-10 ml-2 rounded-full flex justify-center items-center cursor-pointer"
							>
								<Image
									src={platform === "Netlify" ? "/tech/netlify.webp" : 
                                        platform === "Vercel" ? "/tech/vercel.svg" : 
                                        platform === "Wordpress" ? "/tech/wordpress.webp" : 
                                        platform === "Web" ? "/web.webp" :
                                        platform === "Automation" ? "/automation.webp" :  
                                        "/tech/figma.webp"}
									width={24}
									height={24}
									alt="source code"
									className="object-contain"
								/>
							</Link>
						}
					</div>
				</div>

				<div className="mt-5">
					<h3 className="text-white font-bold text-[24px]">{name}</h3>
					<p className="mt-2 text-secondary text-[14px]">{description}</p>
				</div>

				<div className="mt-4 flex flex-wrap gap-2">
					{tags.map((tag) => (
						<p
							key={`${name}-${tag.name}`}
							className={`text-[14px] ${tag.color}`}
						>
							#{tag.name}
						</p>
					))}
				</div>
			</Tilt>
		</motion.div>
	);
};
const Works = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className="sectionSubText">My work</p>
				<h2 className="sectionHeadText">Projects.</h2>
			</motion.div>

			<div className="w-full flex">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
				>
					Following projects showcases my skills and experience through
					real-world examples of my work. Each project is briefly described with
					links to code repositories and live demos in it. It reflects my
					ability to solve complex problems, work with different technologies,
					and manage projects effectively.
				</motion.p>
			</div>

			<div className="mt-20 flex flex-wrap gap-7">
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} index={index} {...project} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Works, "");