import Link from "next/link";
import { projectsData } from "@/const/data";
import ProjectCard from "../cards/ProjectCard";
import SectionHeader from "../SectionHeader";

const BuildsSection = () => {
  return (
    <section className="w-full h-full">
      <div className="w-full max-w-7xl mx-auto px-6 h-full flex justify-center items-center flex-col">
        <SectionHeader title="Projects" />
        <div className="text-center text-shadow-muted mb-8 max-w-2xl">
          Where ideas become digital reality
        </div>
        <div className="max-sm:hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 z-10 gap-6">
          {projectsData.slice(0, 4).map((Item) => {
            return (
              <ProjectCard
                title={Item.title}
                description={Item.description}
                imageSrc={Item.imageSrc}
                href={Item.href}
                key={Item.title}
              />
            );
          })}
        </div>
        <Link
          href={"/projects"}
          className="mt-6 underline text-sm cursor-target px-3"
        >
          View All Projects
        </Link>
      </div>
    </section>
  );
};
export default BuildsSection;
