"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { detailPageData } from "@/app/constants/detail";
import { fadeIn } from "@/app/utils/motion";

// Define your technology badge component
const TechBadge = ({ name, color }: { name: string; color: string }) => {
  // Determine if this is a standard color class (like 'blue-text-gradient') or full classname
  const isStandardColor = typeof color === 'string' && color.includes('-text-gradient');
  
  const badgeClass = isStandardColor 
    ? `inline-block px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2 ${color.replace('text-', 'bg-').replace('-gradient', '-900')} text-white`
    : `inline-block px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2 ${color}`;
    
  return (
    <span className={badgeClass}>
      {name}
    </span>
  );
};

const ProjectDetail = () => {
  // Get the project ID from the URL params
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState<any>(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (params.id) {
      // Find the project with matching ID
      const projectData = detailPageData.find(
        (p) => p.id === Number(params.id)
      );
      
      if (projectData) {
        setProject(projectData);
      } else {
        // If project not found, redirect to projects page
        router.push("/#work");
      }
    }
  }, [params.id, router]);

  if (!project) {
    return (
      <div className="flex items-center justify-center font-sans h-screen bg-[#151030]">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // Function to extract YouTube video ID from YouTube URL
  const getYouTubeVideoId = (url: string) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  // Check if we have a video link and if it's a YouTube link
  const isYouTube = project.video_link && (
    project.video_link.includes("youtube.com") || 
    project.video_link.includes("youtu.be")
  );
  const youtubeId = isYouTube ? getYouTubeVideoId(project.video_link) : null;
  
  return (
    <div className="bg-[#151030] min-h-screen text-white font-sans">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[60vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#151030] z-10"></div>
        <Image
          src={project.image || "/placeholder-project.jpg"}
          alt={project.title || project.name}
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute bottom-0 left-[50%] -translate-x-[50%] p-8 z-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-center">
            {project.title || project.name}
          </h1>
          <div className="flex flex-wrap gap-2 mb-4 ml-[20%]">
            {project.technologies ? (
              project.technologies.map((tech: string, index: number) => (
                <TechBadge key={index} name={tech} color="bg-blue-900 text-white" />
              ))
            ) : project.tags ? (
              project.tags.map((tag: any, index: number) => (
                <TechBadge key={index} name={tag.name} color={tag.color} />
              ))
            ) : null}
          </div>
        </div>
        <div className="absolute top-4 left-4 z-20">
          <button
            onClick={() => router.push("/#work")}
            className="flex items-center px-4 py-2 bg-[#2a2456] rounded-full hover:bg-[#342d6e] transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to Projects
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="md:col-span-2">
            <motion.div
              variants={fadeIn("right", "spring", 0.2, 0.8)}
              className="bg-[#1e1b4b] rounded-2xl p-8 mb-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-white">Overview</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {project.summarize || project.description}
              </p>

              {/* Additional content from detailPageData */}
              {project.contents && project.contents.length > 0 && (
                <div className="mt-8">
                  <h2 className="text-2xl font-bold mb-4 text-white">Key Features</h2>
                  <ul className="space-y-4">
                    {project.contents.map((content: any, index: number) => (
                      <li key={index} className="bg-[#2a2456] p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-white mb-2">{content.tag}</h3>
                        <p className="text-gray-300">{content.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>

            {project.video_link && (
              <motion.div
                variants={fadeIn("up", "spring", 0.4, 0.8)}
                className="bg-[#1e1b4b] rounded-2xl p-8 mb-8"
              >
                <h2 className="text-2xl font-bold mb-4 text-white">Demo Video</h2>
                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                  {showVideo ? (
                    isYouTube && youtubeId ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
                        className="w-full h-[400px]"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={`${project.title || project.name} demo video`}
                      ></iframe>
                    ) : (
                      <video
                        src={project.video_link}
                        controls
                        autoPlay
                        className="w-full h-[400px] bg-black"
                      ></video>
                    )
                  ) : (
                    <div className="relative h-[400px] bg-[#2a2456] rounded-xl flex items-center justify-center overflow-hidden">
                      <Image
                        src={project.image || "/placeholder-project.jpg"}
                        alt={`${project.title || project.name} thumbnail`}
                        fill
                        className="object-cover opacity-60"
                      />
                      <button
                        onClick={() => setShowVideo(true)}
                        className="absolute inset-0 flex items-center justify-center focus:outline-none z-10"
                        aria-label="Play video"
                      >
                        <div className="bg-violet-600 rounded-full p-5 hover:bg-violet-700 transition transform hover:scale-110">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-white"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="absolute bottom-6 text-white text-xl font-bold bg-black bg-opacity-60 px-4 py-2 rounded-lg">
                          Watch Demo
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <motion.div
              variants={fadeIn("left", "spring", 0.3, 0.8)}
              className="bg-[#1e1b4b] rounded-2xl p-8 mb-8 sticky top-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-white">Project Details</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-200">Technologies</h3>
                <div className="flex flex-wrap">
                  {project.technologies ? (
                    project.technologies.map((tech: string, idx: number) => (
                      <span key={idx} className="inline-block px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2 bg-blue-900 text-white">
                        {tech}
                      </span>
                    ))
                  ) : project.tags ? (
                    project.tags.map((tag: any, idx: number) => (
                      <span key={idx} className={`inline-block px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2 ${tag.color.replace('text-', 'bg-').replace('-gradient', '-900')} text-white`}>
                        {tag.name}
                      </span>
                    ))
                  ) : null}
                </div>
              </div>

              <div className="border-t border-[#342d6e] pt-6 mt-6">
                <h3 className="text-xl font-bold mb-4 text-white">Links</h3>
                {project.deploy_link && (
                  <Link
                    href={project.deploy_link}
                    target="_blank"
                    className="flex items-center text-violet-400 hover:text-violet-300 mb-3 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Live Site
                  </Link>
                )}
                {project.source_code_link && (
                  <Link
                    href={project.source_code_link}
                    target="_blank"
                    className="flex items-center text-violet-400 hover:text-violet-300 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Source Code
                  </Link>
                )}
              </div>

              {project.platform && (
                <div className="mt-6">
                  <h3 className="text-xl font-bold mb-4 text-white">Platform</h3>
                  <div className="flex items-center">
                    <Image
                      src={
                        project.platform === "Netlify"
                          ? "/tech/netlify.webp"
                          : project.platform === "Vercel"
                          ? "/tech/vercel.svg"
                          : project.platform === "Wordpress"
                          ? "/tech/wordpress.webp"
                          : project.platform === "Web"
                          ? "/web.webp"
                          : project.platform === "Automation"
                          ? "/automation.webp"
                          : "/tech/figma.webp"
                      }
                      width={24}
                      height={24}
                      alt={project.platform}
                      className="mr-2"
                    />
                    <span className="text-violet-300">{project.platform}</span>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;