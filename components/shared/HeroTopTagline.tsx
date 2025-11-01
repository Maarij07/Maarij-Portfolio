import { TextLoop } from "../motion-primitives/text-loop";

const HeroTopTagline = () => {
  return (
    <h4 className="mb-2">
      Hi, I'm Maarij Bukhari &mdash; I build sites for{" "}
      <span aria-hidden="true">
        <TextLoop
          className="overflow-y-clip text-muted-foreground font-semibold"
          transition={{
            type: "spring",
            stiffness: 900,
            damping: 80,
            mass: 10,
          }}
          variants={{
            initial: {
              y: 20,
              rotateX: 90,
              opacity: 0,
              filter: "blur(4px)",
            },
            animate: {
              y: 0,
              rotateX: 0,
              opacity: 1,
              filter: "blur(0px)",
            },
            exit: {
              y: -20,
              rotateX: -90,
              opacity: 0,
              filter: "blur(4px)",
            },
          }}
        >
          <span>founders</span>
          <span>makers</span>
          <span>product teams</span>
          <span>designers</span>
        </TextLoop>
      </span>
      <span className="sr-only">
        founders, developers, designers, and design engineers.
      </span>
    </h4>
  );
};
export default HeroTopTagline;
