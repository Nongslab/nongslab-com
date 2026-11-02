import React from "react";
import FooterLogo from '../../assets/footer_logo.svg';

const Footer = () => {
  return (
    <footer className="w-full px-6 md:px-16 lg:px-24 py-8 md:py-16 bg-[#FAFAFA] text-[#222]">

      {/* TOP SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
        {/* Left */}
        <div className="grid grid-cols-1 gap-4 md:gap-10">
          <div className="flex flex-col gap-4 md:gap-6">
            <img src={FooterLogo} alt="Nongslab Logo" className="w-40 md:w-44" />

            <p className="text-light max-w-md leading-relaxed">
              Nongslab is a digital production studio founded in 2024. We build high-performance websites, UI/UX design, and custom web applications, from design to launch.
            </p>
          </div>
        </div>

        {/* Middle Services */}
        <div>
          <h3 className="font-semibold text-light mb-4">Main Services</h3>
          <ul className="space-y-3 text-gray-600">
            <li>Web Development (React, WordPress, Laravel)</li>
            <li>UI/UX Design (Figma)</li>
            <li>Digital Workflow Optimization</li>
          </ul>

          <h3 className="font-semibold text-light mt-8 mb-4">
            Support Services
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li>Digitalization Consulting</li>
            <li>Data Entry & Management</li>
          </ul>
        </div>

        {/* Right: site navigation */}
        <div>
          <h3 className="font-semibold text-light mb-4">Site</h3>
          <ul className="space-y-3 text-gray-600">
            <li><a href="#about" className="hover:text-black transition-colors">About</a></li>
            <li><a href="#services" className="hover:text-black transition-colors">Services</a></li>
            <li><a href="#work" className="hover:text-black transition-colors">Work</a></li>
            <li><a href="#contact" className="hover:text-black transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-t mt-8 mb-8"></div>

      {/* Bottom */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <p className="text-gray-700 text-center md:text-left">
          © Copyright {new Date().getFullYear()}, All Rights Reserved by{" "}
          <span className="font-semibold">Nongslab</span>
        </p>
        <a
          href="mailto:nlabs.asia@gmail.com"
          className="text-gray-700 text-center md:text-right hover:text-black transition-colors min-h-[44px] flex items-center justify-center md:justify-end"
        >
          nlabs.asia@gmail.com
        </a>
      </div>

    </footer>
  );
};

export default Footer;
