import React from 'react'
import Title from '../layouts/Title'
import { project1,project2,project3, project4,project5,project6 } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Flavoro Food App"
          des=" Discover a world of culinary delights and book your favorite dining spots with ease. Enjoy personalized recommendations, exclusive deals, and seamless reservations. Browse detailed menus and read user reviews to make informed choices. Enhance your dining experience with Flavoro! Share your own dining experiences and follow your favorite restaurants for real-time updates and special offers. Flavoro makes every meal a memorable adventure."
          src={project1}
          githublink={"https://github.com/hafsoo/Flavoro.git"}
          websitelink={"https://flavoro-three.vercel.app/"}
        />
        <ProjectsCard
          title="Portfolio"
          des=" Develop a professional project portfolio website designed to highlight your work and achievements. This project includes a clean and modern layout, featuring sections for your personal bio, project showcases, skill sets, and contact information. Utilize responsive design techniques to ensure optimal viewing on all devices. Enhance user engagement with interactive elements and smooth navigation. Ideal for presenting your talents to potential clients, employers, and collaborators, making a lasting impression in the competitive market."
          src={project2}
          githublink={"https://github.com/hafsoo/portfolio.git"}
          websitelink={"https://haffsaa.000webhostapp.com/"} 
        />
        <ProjectsCard
          title="Virtual Internship Platform "
          des="InterneePK connects aspiring professionals with industry-leading companies for remote internships. Gain real-world experience, personalized mentorship, and flexible learning opportunities from anywhere. Enhance your skills through hands-on projects and workshops. Build a strong professional network and earn valuable certifications upon completion. Discover, learn, and excel with InterneePK today!"
          src={project3}
          githublink={"https://github.com/hafsoo/redesign-Internee.pk.git"}
          websitelink={"https://redesign-internee-pk.vercel.app/"} 
        />
        <ProjectsCard
          title="Textutilies"
          des=" Texutilies is your go-to tool for efficient text management. Easily count words and characters in any text, helping you meet specific requirements quickly. Remove extra spaces effortlessly to tidy up your documents. Perfect for writers, students, and professionals needing precise text formatting. Simplify your text editing tasks with Texutilies!"
          src={project4}
          githublink={"https://github.com/hafsoo/Textutilies.git"}
          websitelink={"https://hafsoo.github.io/Textutilies//"} 
        />
        <ProjectsCard
          title="News App"
          des=" This News App brings you the latest news from around the world in real-time. Customize your feed to follow topics that matter most to you, from politics and business to entertainment and sports. Enjoy in-depth articles, breaking news alerts, and video coverage all in one app. Share stories with friends and stay informed with daily summaries. With NewsNow, you’ll never miss a headline."
          src={project5}
          githublink={"https://github.com/hafsoo/Restful-APIS.git"}
          websitelink={"http://localhost:5173/#/business"} 
        />
        <ProjectsCard
          title="Firebase User Authentication"
          des=" SecureAuth provides seamless and secure user authentication powered by Firebase. Easily integrate user sign-up, login, and password reset functionalities into your app. Enjoy robust security features, including email verification and multi-factor authentication. Manage user accounts effortlessly with Firebase's real-time database and analytics. Perfect for developers seeking reliable and scalable authentication solutions. SecureAuth ensures your users' data is protected, giving you peace of mind."
          src={project6}
          githublink={"https://github.com/hafsoo/Firebase-user-authentication.git"}
          websitelink={" "} 
        />
      </div>
    </section>
  );
}

export default Projects