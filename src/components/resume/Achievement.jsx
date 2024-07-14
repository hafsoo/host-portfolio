import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Achievements</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
         
         <ResumeCard
         title=" Redesign internee.pk website "
         subTitle="Internee.pk - Front End Developer"
         result="Success"
         des="Led the development of a responsive Redesign internee.pk website using React, improving the user experience across all devices. Implemented dynamic product listings, a streamlined checkout process, and interactive UI components, resulting in a 30% increase in user engagement and a 20% boost in sales."
/>

        </div>
      </div>
      
    </motion.div>
  );
};

export default Achievement;
