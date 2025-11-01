"use client";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "@/components/buttons/ModeToggle";
import ProjectCard from "@/components/cards/ProjectCard";
import Shuffle from "@/components/Shuffle";
import { Button } from "@/components/ui/button";
import { projectsData } from "@/const/data";

const page = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex justify-between items-center gap-4 mb-6">
        <Button asChild variant="ghost">
          <Link href="/" className="flex gap-2">
            <MoveLeft className="w-4" />
            Go Back Home
          </Link>
        </Button>
        <div>
          <ModeToggle />
        </div>
      </div>
      <div>
        <div className="flex flex-col justify-center text-center py-6 sm:py-8 lg:py-12 max-md:hidden">
          <Shuffle
            text="My Builds"
            shuffleDirection="right"
            duration={0.35}
            animationMode="evenodd"
            shuffleTimes={1}
            ease="power3.out"
            stagger={0.03}
            threshold={0.1}
            triggerOnce={true}
            triggerOnHover={true}
            respectReducedMotion={true}
          />
          <p className="text-lg sm:text-xl lg:text-2xl mt-4 text-muted-foreground max-w-2xl mx-auto">
            Crafting digital experiences that matter
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 z-10 gap-6">
          {projectsData.map((Item) => {
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
        <div className="flex justify-center items-center gap-4 mt-12 pt-8 border-t border-border">
          <Link href="/">
            <Button variant="outline" className="flex gap-2">
              Back to Home
            </Button>
          </Link>
          <Link href="/projects#">
            <Button variant="outline" className="flex gap-2">
              Go to Top
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
