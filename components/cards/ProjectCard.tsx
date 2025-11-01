import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({
  imageSrc = "",
  imageWidth = 250,
  imageHeight = 188,
  title,
  description,
  href = "#",
}: {
  imageSrc: string;
  imageWidth?: number;
  imageHeight?: number;
  title: string;
  description: string;
  href: string;
  buttonText?: string;
}) => {
  return (
    <Link
      href={href}
      rel="nofollow"
      target="_blank"
      className="w-full px-6 py-3 border cursor-target flex flex-col items-center justify-center "
    >
      <div className="w-[211.51px] h-[205.72px]">
        <Image src={imageSrc} width={imageWidth} height={imageHeight} alt="" />
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="text-xs">{description}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
