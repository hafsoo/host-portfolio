import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["MERN Stack Developer.", "Front-end Developer.", "Problem Solver."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I&apos;m{" "}
          <span className="text-designColor capitalize">Hafsa Riaz</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I specialize in creating interactive and responsive user experiences
          using HTML, CSS, and JavaScript, with a strong focus on building
          dynamic web applications using React. As a MERN stack developer, I
          work seamlessly across MongoDB, Express.js, React, and Node.js to
          develop full-stack solutions. My solid foundation in C, C++, and Java
          sharpens my problem-solving abilities, while my expertise in MySQL
          contributes to developing robust and efficient back-end systems.
          Passionate about continuous learning, I stay updated with emerging
          technologies to push the boundaries of what&apos;s possible on the web.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
