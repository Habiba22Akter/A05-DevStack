import BannerImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section id="home" className="mx-auto max-w-[1240px] px-5 pb-24 pt-20 lg:px-0 lg:pt-28">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold leading-[1.05] text-slate-950 sm:text-5xl lg:text-[58px]">
            Build Your Ideal
            <br />
            <span className="brand-gradient">Development Stack</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-slate-500 lg:text-lg">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#technologies"
              className="brand-gradient-bg rounded-lg px-6 py-3 text-sm font-semibold text-white"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="rounded-lg border border-slate-200 px-7 py-3 text-sm font-medium text-slate-700"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={BannerImage}
            alt="Development stack illustration"
            className="w-full max-w-[390px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
