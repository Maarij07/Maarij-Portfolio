"use client";

import * as motion from "motion/react-client";
import { SectionNamesFloat } from "@/const/data";
import useActiveSection from "@/lib/useActiveSection";

const FloatingLinks = () => {
  const { isActive } = useActiveSection();

  return (
    <motion.div
      className="top-1/2 fixed right-5 z-50"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {SectionNamesFloat.map((section, sectionIndex) => (
        <motion.div
          key={section.href}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: sectionIndex * 0.1,
            ease: "easeOut",
          }}
        >
          <ul className="flex flex-col gap-3">
            {section.currentSection.map((link, linkIndex) => {
              const active = isActive(link.path);

              return (
                <motion.li
                  key={link.path}
                  className="group relative cursor-target"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: sectionIndex * 0.1 + linkIndex * 0.05,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.05,
                    x: -8,
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 25,
                    },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-foreground/10 to-accent/15"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: active ? 1 : 0,
                      scale: active ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />

                  <motion.div
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-muted-foreground/10 to-accent/10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.2 },
                    }}
                  />

                  <motion.a
                    href={link.path}
                    className={`relative inline-block w-20 px-2 py-1.5 text-left rounded-lg text-xs transition-colors duration-300 ${
                      active
                        ? "text-foreground font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    whileHover={{
                      transition: { duration: 0.2 },
                    }}
                  >
                    <motion.span
                      animate={active ? { y: [0, -1, 0] } : { y: 0 }}
                      transition={{
                        duration: 2,
                        repeat: active ? Infinity : 0,
                        ease: "easeInOut",
                      }}
                    >
                      {link.link}
                    </motion.span>

                    <div className="relative mt-1 h-[2px]">
                      <motion.span
                        className={`absolute left-0 top-0 h-full ${
                          active ? "bg-foreground" : "bg-muted-foreground/60"
                        }`}
                        initial={{ width: active ? "100%" : "0%" }}
                        animate={{
                          width: active ? "100%" : "0%",
                        }}
                        whileHover={{
                          width: "100%",
                          transition: { duration: 0.3, ease: "easeOut" },
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      />

                      {active && (
                        <motion.span
                          className="absolute top-0 h-full w-6 bg-gradient-to-r from-transparent via-background/80 to-transparent"
                          animate={{
                            x: ["-24px", "80px"],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            repeatDelay: 1,
                          }}
                        />
                      )}
                    </div>

                    <motion.div
                      className="absolute -left-1 top-1/2 w-1 h-1 rounded-full bg-current"
                      initial={{ scale: 0, x: 0 }}
                      animate={{
                        scale: active ? 1.5 : 0,
                        x: active ? -4 : 0,
                      }}
                      whileHover={{
                        scale: 1.2,
                        x: -4,
                        transition: { duration: 0.2 },
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ translateY: "-50%" }}
                    />
                  </motion.a>

                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={`${link.path}-p-${i}`}
                        className="absolute w-1 h-1 bg-foreground/70 rounded-full"
                        style={{
                          left: `${20 + i * 30}%`,
                          top: `${30 + i * 20}%`,
                        }}
                        initial={{ scale: 0, y: 0 }}
                        whileHover={{
                          scale: [0, 1, 0],
                          y: [0, -20, -40],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          delay: i * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    ))}
                  </motion.div>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FloatingLinks;
