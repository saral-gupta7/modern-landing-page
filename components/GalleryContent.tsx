import React from "react";

interface GalleryContentProps {
  content: string;
  title: string;
  className: string;
}
const GalleryContent = ({ content, title, className }: GalleryContentProps) => {
  return (
    <div
      className={`${className} absolute flex h-full w-full flex-col justify-center gap-5 p-30`}
    >
      <h1 className="text-4xl font-semibold">{title}</h1>
      <p className="font-playfair text-lg text-white/90">{content}</p>
    </div>
  );
};

export default GalleryContent;
