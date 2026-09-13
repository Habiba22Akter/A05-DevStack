import Logo from '../assets/logo-text.png';
const Footer = () => <footer id="contact" className="border-t border-[#edf0f4] bg-white pt-16">
    <div className="page-container grid gap-10 pb-16 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <div><img src={Logo} alt="Dev Stack" className="h-8 w-auto" /><p className="mt-5 max-w-[400px] text-[12px] leading-5 text-[#7b8ba3]">Curated tools, technologies, and resources for developers building modern software.</p><div className="mt-7 flex gap-5 text-[11px] font-medium text-[#475569]"><a href="#">GitHub</a><a href="#">Twitter</a><a href="#">LinkedIn</a></div></div>
        <div><h4 className="text-[11px] font-bold text-[#1e293b]">PRODUCT</h4><div className="mt-5 space-y-3 text-[11px] text-[#7b8ba3]"><p>Home</p><p>Technologies</p><p>Projects</p></div></div>
        <div><h4 className="text-[11px] font-bold text-[#1e293b]">COMPANY</h4><div className="mt-5 space-y-3 text-[11px] text-[#7b8ba3]"><p>About</p><p>Contact</p><p>Careers</p></div></div>
        <div><h4 className="text-[11px] font-bold text-[#1e293b]">LEGAL</h4><div className="mt-5 space-y-3 text-[11px] text-[#7b8ba3]"><p>Privacy Policy</p><p>Terms of Service</p></div></div>
    </div>
    <div className="page-container flex items-center justify-between border-t border-[#edf0f4] py-7 text-[10px] text-[#94a3b8]"><p>© 2026 Dev Stack. All rights reserved.</p><div className="flex gap-7"><span>Privacy</span><span>Terms</span></div></div>
</footer>;
export default Footer;
