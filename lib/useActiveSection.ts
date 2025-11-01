"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export function useActiveSection() {
  const pathname = usePathname();
  const [currentHash, setCurrentHash] = useState<string>("");

  useEffect(() => {
    const getNormHash = () => {
      const h = window.location.hash || "";
      return h === "#" ? "" : h;
    };

    setCurrentHash(getNormHash());
    const onHashChange = () => setCurrentHash(getNormHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined")
      return;

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[id]"),
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;

        visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const top = visible[0];
        const id = top.target.id ? `#${top.target.id}` : "";

        try {
          const newHash = id === "#" ? "" : id;
          if ((window.location.hash || "") !== (id || "")) {
            window.history.replaceState(
              null,
              "",
              id || window.location.pathname + window.location.search,
            );
          }
          setCurrentHash(newHash === "#" ? "" : newHash);
        } catch {
          if ((window.location.hash || "") !== (id || ""))
            window.location.hash = id || "";
          setCurrentHash(id === "#" ? "" : id);
        }
      },
      { root: null, rootMargin: "0px", threshold: [0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((s) => {
      observer.observe(s);
    });

    return () => observer.disconnect();
  }, []);

  const normalizePath = useCallback((p: string) => {
    try {
      const dec = decodeURI(p || "/");
      return dec === "/" ? "/" : dec.replace(/\/+$/g, "");
    } catch {
      return p || "/";
    }
  }, []);

  const isActive = useCallback(
    (linkPath: string) => {
      const [linkPathname, linkHash] = linkPath.includes("#")
        ? [
            linkPath.slice(0, linkPath.indexOf("#")) || "/",
            linkPath.slice(linkPath.indexOf("#")),
          ]
        : [linkPath || "/", ""];

      const normalizedNav = normalizePath(pathname ?? "/");
      const normalizedLinkPath = normalizePath(linkPathname);

      if (normalizedNav !== normalizedLinkPath) return false;

      if (linkHash) {
        if (currentHash === "") {
          return linkHash === "#home";
        }
        return linkHash === currentHash;
      }

      return currentHash === "";
    },
    [pathname, currentHash, normalizePath],
  );

  return { isActive, pathname, currentHash };
}

export default useActiveSection;
