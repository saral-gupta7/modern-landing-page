import { TvMinimal } from "lucide-react";
const MobileView = () => {
  return (
    <section className="flex-center h-screen flex-col gap-5 bg-black text-center text-2xl text-red-400">
      <TvMinimal size={60} />
      Please open this page on a bigger screen for the best experience. Thank
      you!
    </section>
  );
};

export default MobileView;
