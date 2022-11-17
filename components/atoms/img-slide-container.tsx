import Image, { StaticImageData } from "next/image";

export interface ImgSlideContainerProps {
  img: StaticImageData;
  alt: string;
}

const ImgSlideContainer = ({ img, alt }: ImgSlideContainerProps) => {
  return (
    <div className="h-50 relative flex w-full flex-col">
      <Image
        draggable={false}
        src={img}
        alt="tailwind screenshot"
        placeholder="blur"
        style={{
          objectFit: "contain",
          userSelect: "none",
        }}
      />
      <a
        href={img.src}
        target="_blank"
        rel="noreferrer"
        className="py-1 text-sm text-gray-600 hover:text-white"
      >
        open in a new tab
      </a>
    </div>
  );
};

export default ImgSlideContainer;
