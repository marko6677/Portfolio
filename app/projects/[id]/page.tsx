import ProjectDetail from "@/app/components/projects/ProjectDetail";
import { detailPageData } from "@/app/constants/detail"; // Import your detail page data

// This function is required for static site generation with dynamic routes
export async function generateStaticParams() {
  // Generate a params object for each project ID in detailPageData
  return detailPageData.map((project) => ({
    id: project.id.toString(), // Convert ID to string as params are always strings
  }));
}

export default function ProjectDetailPage() {
  return <ProjectDetail />;
}