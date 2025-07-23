import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>

          <a
            href="www.linkedin.com/in/hafsa-riaz-879476247" // <-- Replace with your actual LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaLinkedinIn />
          </a>

          <span className="bannerIcon">
            <FaInstagramSquare />
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>

          <span className="bannerIcon">
            <SiTailwindcss />
          </span>

          <span className="bannerIcon">
            <IoLogoJavascript />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
