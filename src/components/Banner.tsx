import bannerImage from '../assets/banner-stack.png';

const Banner = () => (
  <section id="home" className="bg-white">
    <div className="page-container grid min-h-[520px] items-center gap-10 py-16 md:grid-cols-2 lg:min-h-[590px] lg:py-20">
      <div className="max-w-[650px]">
        <h1 className="text-[42px] font-extrabold leading-[1.02] tracking-[-0.045em] text-[#111827] sm:text-[52px] lg:text-[64px]">
          Build Your Ideal<br />
          <span className="brand-gradient-text">Development Stack</span>
        </h1>
        <p className="mt-7 max-w-[610px] text-[16px] leading-7 text-[#64748b] lg:text-[18px]">
          Explore frontend, backend, database, and tooling options,<br className="hidden lg:block" /> compare them side by side, and put together the stack that fits your<br className="hidden lg:block" /> next project.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <a href="#technologies" className="brand-gradient rounded-lg px-5 py-3.5 text-sm font-semibold text-white">Explore Technologies</a>
          <a href="#about" className="min-w-[150px] rounded-lg border border-[#d9dee8] px-5 py-3.5 text-center text-sm font-medium text-[#475569]">Learn More</a>
        </div>
      </div>
      <div className="flex justify-center md:justify-end">
        <img src={bannerImage} alt="Development technology stack" className="w-full max-w-[430px] lg:max-w-[470px]" />
      </div>
    </div>
  </section>
);
export default Banner;
