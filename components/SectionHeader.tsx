import { cn } from "@/lib/utils";

const SectionHeader = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <h1
      className={cn(
        "text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-2 uppercase tracking-tight",
        "hover:scale-105 hover:translate-y-[-2px] hover:font-semibold hover:tracking-widest transition-all duration-300",
        className,
      )}
      style={{ fontFamily: "Compressa VF" }}
    >
      {title}
    </h1>
  );
};

export default SectionHeader;
