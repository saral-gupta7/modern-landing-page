import React from "react";

interface GalleryContentProps {
  content: string;
  title: string;
  className: string;
  index: number;
}
const GalleryContent = ({
  content,
  title,
  className,
  index,
}: GalleryContentProps) => {
  return (
    <div
      className={`${className} absolute inset-0 flex h-full w-full flex-col justify-center gap-6 px-8 py-14 lg:px-16`}
    >
      <span className="section-label">{`Sequence ${String(index).padStart(2, "0")}`}</span>
      <h1 className="font-space-grotesk max-w-lg text-4xl leading-tight font-semibold lg:text-5xl">
        {title}
      </h1>
      <p className="font-playfair max-w-xl text-lg leading-8 text-white/82">
        {content}
      </p>
    </div>
  );
};

export default GalleryContent;
