const Footer = () => {
  return (
    <footer id="contact" className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-[1240px] px-5 py-16 lg:px-0">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div id="about">
            <a href="#home" className="flex items-center gap-2">
              <span className="brand-gradient-bg flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold text-white">DS</span>
              <span className="text-xl font-bold text-slate-900">Dev <span className="brand-gradient">Stack</span></span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="mt-6 flex gap-5 text-sm font-medium text-slate-600">
              <a href="https://github.com" target="_blank">GitHub</a>
              <a href="https://twitter.com" target="_blank">Twitter</a>
              <a href="https://linkedin.com" target="_blank">LinkedIn</a>
            </div>
          </div>

          <div id="projects">
            <h4 className="text-xs font-bold tracking-wide text-slate-900">PRODUCT</h4>
            <ul className="mt-5 space-y-3 text-sm text-slate-500">
              <li><a href="#home">Home</a></li>
              <li><a href="#technologies">Technologies</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-wide text-slate-900">COMPANY</h4>
            <ul className="mt-5 space-y-3 text-sm text-slate-500">
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-wide text-slate-900">LEGAL</h4>
            <ul className="mt-5 space-y-3 text-sm text-slate-500">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-slate-100 pt-7 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
