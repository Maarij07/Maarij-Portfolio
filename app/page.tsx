import * as motion from "motion/react-client";
import AboutMeSection from "@/components/section/AboutMeSection";
import BuildsSection from "@/components/section/BuildsSection";
import HeroSection from "@/components/section/HeroSection";
import LetsTalkSection from "@/components/section/LetsTalkSection";
import MyStackSection from "@/components/section/MyStackSection";
import FloatingLinks from "@/components/shared/FloatingLinks";
import Navbar from "@/components/shared/Navbar";

const page = () => {
  return (
    <>
      <motion.section
        className="h-screen snap-start md:h-screen md:min-h-screen flex flex-col overflow-hidden"
        id="home"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.45 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Navbar />
        <HeroSection />
      </motion.section>
      <motion.section
        className="h-screen snap-start md:h-screen md:min-h-screen flex flex-col overflow-hidden"
        id="my-stack"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.45 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <MyStackSection />
      </motion.section>
      <motion.section
        className="h-screen snap-start md:h-screen md:min-h-screen flex flex-col overflow-hidden"
        id="builds"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.45 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <BuildsSection />
      </motion.section>
      <motion.section
        className="h-screen snap-start md:h-screen md:min-h-screen flex flex-col overflow-hidden"
        id="about-me"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.45 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <AboutMeSection />
      </motion.section>
      <motion.section
        className="h-screen snap-start md:h-screen md:min-h-screen flex flex-col overflow-hidden"
        id="lets-talk"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.45 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <LetsTalkSection />
      </motion.section>
      <div className="hidden lg:block">
        <FloatingLinks />
      </div>
    </>
  );
};
export default page;
