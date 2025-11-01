import { Github, Linkedin } from "lucide-react";
import * as motion from "motion/react-client";
import Link from "next/link";
import CountUp from "../blocks/TextAnimations/CountUp/CountUp";
import SectionHeader from "../SectionHeader";
import { Button } from "../ui/button";

const AboutMeSection = () => {
  return (
    <section className="w-full h-full">
      <div className="w-full max-w-7xl mx-auto px-6 h-full flex justify-center items-center flex-col">
        <SectionHeader title="About Me" />
        <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/90 max-w-4xl mx-auto mt-4 font-medium dark:font-light text-center">
          I’m a <span>web developer </span>who loves building fast, user-focused
          products. I work with modern frameworks like Next.js, React, Tailwind,
          and Motion to craft clean, responsive interfaces and I pair that with
          SEO expertise so the things I build aren’t just functional, they’re
          discoverable.
        </h1>
        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/90 max-w-4xl mx-auto mt-4 font-medium dark:font-light text-center">
          <div>
            <CountUp from={0} to={55} duration={1} />+{" "}
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Projects Completed
            </motion.span>
          </div>
          <div></div>
        </h2>
        <div className="mt-6 space-x-3">
          <Link href={"https://github.com/Maarij07"} target="_blank">
            <Button variant={"outline"}>
              <Github />
              Github
            </Button>
          </Link>
          <Link href={"https://www.linkedin.com/in/maarij-bukhari/"} target="_blank">
            <Button variant={"outline"}>
              <Linkedin />
              LinkedIn
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
