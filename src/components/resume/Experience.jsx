import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Internee.pk"
            subTitle="React Internship - (2024 - Present)"
            result="Pakistan-Lahore"
            des="Internee.pk is your gateway to valuable virtual internships, connecting students and recent graduates with leading companies worldwide. Gain real-world experience and enhance your skills through remote internships in various industries, from tech to marketing. Benefit from personalized mentorship, flexible schedules, and a user-friendly platform designed to support your career growth. Build your professional network, receive certifications, and prepare for a successful future with Internee.pk. Transform your learning into action with our comprehensive virtual internship opportunities."
          />
         
        </div>
      </div>
       
    </motion.div>
  );
};

export default Experience;
