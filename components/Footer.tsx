const Footer = () => {
  return (
    <footer id="footer" className="px-6 pt-4 pb-8 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-sm text-white/46">
            © 2026 Still Reverie. All rights reserved.
          </p>
          <p className="max-w-md text-xs leading-5 text-white/34">
            I do not own any of the images used in this presentation. All image
            rights belong to their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
