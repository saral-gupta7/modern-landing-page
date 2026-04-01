import CustomButton from "./CustomButton";

interface HeroProps {
  webmUrl: string;
  mp4Url: string;
  poster: string;
  id: string;
  zIndex: string;
  eyebrow: string;
  rightLabel: string;
  caption: string;
  content: {
    text: string;
    isItalic?: boolean;
  }[];
}
const HeroVideo = ({
  webmUrl,
  mp4Url,
  poster,
  eyebrow,
  rightLabel,
  caption,
  content,
  id,
  zIndex,
}: HeroProps) => {
  return (
    <div
      className={`absolute inset-x-0 bottom-0 ${zIndex} mx-auto flex h-[86vh] w-[97%] max-w-[102rem] flex-col overflow-hidden rounded-[1.75rem] sm:h-[88vh] sm:rounded-[2rem]`}
      id={id}
    >
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-black/30 to-black/70"></div>
      <video
        muted
        autoPlay
        loop
        playsInline
        preload="metadata"
        poster={poster}
        className="absolute-video-position"
        aria-hidden="true"
      >
        <source src={webmUrl} type="video/webm" />
        <source src={mp4Url} type="video/mp4" />
      </video>

      <div className="relative z-20 flex h-full flex-col justify-between px-5 pt-14 pb-10 sm:px-10 sm:pt-16 sm:pb-14 lg:px-14">
        <div className="flex -translate-y-1 justify-between gap-4 text-[0.68rem] tracking-[0.35em] uppercase sm:-translate-y-2">
          <span className="max-w-[10rem] text-white/62 sm:max-w-none">
            {eyebrow}
          </span>
          <span className="max-w-[13rem] rounded-full border border-white/18 bg-white/10 px-3 py-2 text-right font-medium text-white/88 shadow-[0_0_28px_rgba(255,255,255,0.12)] backdrop-blur-md sm:max-w-none sm:px-4">
            {rightLabel}
          </span>
        </div>

        <div className="flex flex-col items-center gap-8 text-center">
          <h1 className="xs:text-4xl max-w-5xl text-center text-4xl leading-[1.02] font-semibold sm:text-5xl md:text-6xl lg:text-7xl">
            {content.map(({ text, isItalic }, index) => (
              <span
                key={index}
                className={`hero-span ${isItalic ? "font-playfair italic" : ""}`}
              >
                {text}{" "}
              </span>
            ))}
          </h1>
          <p className="font-playfair max-w-2xl text-base leading-7 text-white/76 sm:text-lg">
            {caption}
          </p>
          <CustomButton
            title="Explore"
            className="border-[#f5f0e8]/65 text-lg"
          />
        </div>

        <div className="flex items-end justify-between gap-4 text-sm text-white/55">
          <p className="max-w-[14rem] leading-6 sm:max-w-xs">
            Built to feel tactile, intimate, and cinematic without losing
            clarity.
          </p>
          <span className="hidden text-right tracking-[0.32em] uppercase sm:block">
            Scroll to continue
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;
