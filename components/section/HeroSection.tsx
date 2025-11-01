import Image from "next/image";
import Link from "next/link";
import ShinyText from "../blocks/TextAnimations/ShinyText/ShinyText";
import HeroTopTagline from "../shared/HeroTopTagline";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <div className="md:h-full min-h-0 flex flex-col md:flex-row ">
      <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start py-6 md:p-0">
        <div className="max-w-2xl mx-auto px-6 py-8 text-foreground text-center md:text-left">
          <HeroTopTagline />
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            <ShinyText
              text=" Designing and Developing Web Solutions that Deliver"
              disabled={false}
              speed={5}
              className="custom-class"
            />
          </h1>
          <h5 className="mb-6 max-w-xl text-muted-foreground">
            Where innovation meets user-centered design to create meaningful
            experiences
          </h5>
          <div className="flex justify-center md:justify-start gap-2">
            <Link href="#lets-talk">
              <Button>Contact Me</Button>
            </Link>
            <Link href="#builds">
              <Button>View My Work</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative w-full md:block md:w-1/2 z-10">
        <Image
          src="/assets/images/maarij-profile-full.png"
          alt="Maarij Bukhari's Profile Picture"
          width={1200}
          height={1600}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="w-full h-auto object-cover object-top"
          priority
        />
      </div>
    </div>
  );
};
export default HeroSection;
