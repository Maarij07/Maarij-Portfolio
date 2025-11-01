"use client";
import { useState } from "react";
import { tabsData } from "@/const/data";
import { TransitionPanel } from "../motion-primitives/transition-panel";
import SectionHeader from "../SectionHeader";
import { Button } from "../ui/button";
import { CardCarousel } from "../ui/card-carousel";

const MyStackSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="h-full min-h-0 flex items-center justify-center py-3 md:py-6">
      <div className="w-full max-w-6xl flex flex-col items-center px-6">
        <header className="text-center mb-4">
          <SectionHeader
            title=" My Tech Stack"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
          />
          <p className="max-w-sm md:max-w-2xl mx-auto text-muted-foreground  xl:hidden">
            A balance of frontend, backend, design, and deployment{" "}
            <span className="max-sm:hidden">
              {" "}
              — building modern, scalable, and user-focused applications.
            </span>
          </p>
        </header>

        <div className="w-full flex-1 min-h-0 flex flex-col">
          <div className="mb-4 flex justify-center space-x-2 flex-wrap gap-y-4">
            {tabsData.map((tab, idx) => (
              <Button
                key={tab.title}
                variant={`${activeIndex === idx ? "default" : "outline"}`}
                onClick={() => setActiveIndex(idx)}
                className="rounded"
              >
                {tab.title}
              </Button>
            ))}
          </div>

          <div className="border-t border-zinc-200 dark:border-zinc-700 md:pt-6 md:px-0 h-full min-h-0">
            <TransitionPanel
              activeIndex={activeIndex}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              variants={{
                enter: { opacity: 0, y: -24, filter: "blur(4px)" },
                center: { opacity: 1, y: 0, filter: "blur(0px)" },
                exit: { opacity: 0, y: 24, filter: "blur(4px)" },
              }}
            >
              {tabsData.map((tab) => (
                <div
                  key={tab.title}
                  className="py-4 h-full min-h-0 flex items-center"
                >
                  <div className="w-full h-full min-h-0 overflow-hidden">
                    <CardCarousel
                      images={tab.images}
                      autoplayDelay={2000}
                      showPagination={false}
                      showNavigation={true}
                      tabIds={tabsData.map((t) => t.title)}
                      activeTabIndex={activeIndex}
                      onTabClick={setActiveIndex}
                      title={tab.title}
                      description={tab.description}
                    />
                  </div>
                </div>
              ))}
            </TransitionPanel>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MyStackSection;
