import CustomButton from "./CustomButton";

interface HeroProps {
  url: string;
  id: string;
  zIndex: string;
  content: {
    text: string;
    isItalic?: boolean;
  }[];
}
const HeroVideo = ({ url, content, id, zIndex }: HeroProps) => {
  return (
    <div
      className={`flex-center absolute inset-x-0 bottom-0 ${zIndex} h-7/8 flex-col overflow-hidden`}
      id={id}
    >
      {/* Dark overlay */}
      <div className="absolute-layer"></div>
      {/* Base Video */}
      <video
        muted
        autoPlay
        loop
        playsInline
        className="absolute-video-position"
      >
        <source src={url} type="video/mp4" />
      </video>

      <div className="flex-center z-20 flex-col flex-wrap gap-10">
        <h1 className="xs:text-4xl text-center text-3xl sm:text-5xl md:text-6xl">
          {content.map(({ text, isItalic }, index) => (
            <span
              key={index}
              className={`hero-span ${isItalic ? "font-playfair italic" : ""}`}
            >
              {text}{" "}
            </span>
          ))}
        </h1>
        <CustomButton title="Explore" className="border-white/70 text-2xl" />
      </div>
    </div>
  );
};

export default HeroVideo;
