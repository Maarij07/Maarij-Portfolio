"use client";
import { Cog, File } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { NavLinkItems } from "@/const/data";
import useActiveSection from "@/lib/useActiveSection";
import { ModeToggle } from "../buttons/ModeToggle";
import { Button } from "../ui/button";
import MobileNavMenu from "./MobileNavMenu";

const Navbar = () => {
  const { isActive } = useActiveSection();
  const [mobileMenuActive, setMobileMenuActive] = useState<boolean>(false);
  return (
    <div
      className={`${mobileMenuActive ? "fixed top-0 left-0 w-full h-full bg-background/90 z-10 text-foreground" : ""}`}
    >
      <div className="max-sm:w-full flex justify-end md:justify-between items-center py-2 px-6">
        <ul className="hidden md:flex space-x-4 text-sm">
          {NavLinkItems.map((item) => {
            const active = isActive(item.href);

            return (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className={
                    active
                      ? "font-bold text-muted-foreground cursor-target"
                      : "cursor-target"
                  }
                  aria-current={active ? "page" : undefined}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <h1 className="flex-1 md:hidden">Let's connect</h1>
        <div className="flex gap-3">
          <a
            href="/files/Maarij Bukhari_Khan_Web_Developer_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant={"outline"}>
              <span>
                <File />
              </span>
              <span className="hidden md:block">Resume</span>
            </Button>
          </a>
          <span className="hidden md:block">
            <ModeToggle />
          </span>
          <div className="md:hidden space-x-3">
            <ModeToggle />
            <Button
              variant="outline"
              className="group"
              onClick={() => setMobileMenuActive((v) => !v)}
            >
              <motion.span
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 145 }}
                transition={{ duration: 0.2 }}
                className="group-hover:rotate-[145deg] transition-transform duration-200"
              >
                <Cog />
              </motion.span>
            </Button>
            {mobileMenuActive ? (
              <div className="mt-2">
                <MobileNavMenu
                  menuState={mobileMenuActive}
                  toggleMenu={setMobileMenuActive}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
