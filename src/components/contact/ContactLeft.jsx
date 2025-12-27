import React from 'react'
import { FaFacebookF,FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";
import { SiGmail } from "react-icons/si";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Hafsa Riaz</h3>
        <p className="text-lg font-normal text-gray-400">
          Mern Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        I am a passionate and experienced Front End Developer with a strong background in building engaging and responsive web applications. I specialize in using modern web technologies like HTML, CSS, JavaScript, and React to create intuitive and dynamic user interfaces. Whether you need a new website, a web application, or a redesign of an existing site, I am here to help you achieve your goals. Let's connect and bring your vision to life!
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">03364483594</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">hafsariazturk9@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
        <a href="https://www.facebook.com/profile.php?id=100090003010756" target="_blank" rel="noopener noreferrer">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          </a>
          <a href="hafsariazturk9@gmail.com" target="_blank" rel="noopener noreferrer">
          <span className="bannerIcon">
          <SiGmail />
          </span>
          </a>
          <a href="www.linkedin.com/in/hafsa-riaz-879476247" target="_blank" rel="noopener noreferrer">
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft