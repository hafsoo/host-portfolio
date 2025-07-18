// Projects.jsx
import Title from "../layouts/Title";

import project1 from '../../assets/images/projects/project1.avif';
import project2 from '../../assets/images/projects/project2.avif';
import project3 from '../../assets/images/projects/project3.avif';
import project4 from '../../assets/images/projects/project4.avif';
import project5 from '../../assets/images/projects/project5.avif';
import project6 from '../../assets/images/projects/project6.avif';
import eshop from '../../assets/images/projects/eshop.jpeg'
;
import ProjectsCard from "./ProjectsCard";

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
          des="Discover a world of culinary delights and book your favorite dining spots with ease. Enjoy personalized recommendations, exclusive deals, and seamless reservations. Browse detailed menus and read user reviews to make informed choices. Share your own dining experiences and follow your favorite restaurants for real-time updates and special offers."
          src={project1}
          githublink={"https://github.com/hafsoo/Flavoro.git"}
          websitelink={"https://flavoro-three.vercel.app/"}
        />
        <ProjectsCard
          title="Portfolio"
          des="A professional portfolio website showcasing your work, skills, and contact info. Includes clean layout, responsive design, and interactive navigation, ideal for clients and employers."
          src={project2}
          githublink={"https://github.com/hafsoo/portfolio.git"}
          websitelink={"https://haffsaa.000webhostapp.com/"}
        />
        <ProjectsCard
          title="Virtual Internship Platform"
          des="InterneePK connects professionals with top companies for remote internships. Offers mentorship, certification, real-world experience, and flexible learning."
          src={project3}
          githublink={"https://github.com/hafsoo/redesign-Internee.pk.git"}
          websitelink={"https://redesign-internee-pk.vercel.app/"}
        />
        <ProjectsCard
          title="Textutilies"
          des="Textutilies is a handy tool to count words/characters, remove extra spaces, and clean text formatting. Great for writers, students, and content creators."
          src={project4}
          githublink={"https://github.com/hafsoo/Textutilies.git"}
          websitelink={"https://hafsoo.github.io/Textutilies//"}
        />
        <ProjectsCard
          title="News App"
          des="A real-time news application with topic filtering and category browsing. Stay updated with headlines from various sources, including articles, images, and videos."
          src={project5}
          githublink={"https://github.com/hafsoo/Restful-APIS.git"}
          websitelink={"http://localhost:5173/#/business"}
        />
        <ProjectsCard
          title="Firebase User Authentication"
          des="SecureAuth provides Firebase-powered login, registration, password reset, and email verification. Scalable and secure for any app needing auth."
          src={project6}
          githublink={"https://github.com/hafsoo/Firebase-user-authentication.git"}
          websitelink={""}
        />
        <ProjectsCard
          title="eShop"
          des="eShop is a full-featured e-commerce app built using the MERN stack. It supports product browsing, cart, checkout, authentication, and admin dashboards."
          src={eshop}
          githublink={"https://github.com/hafsoo/ESHOP"}
          websitelink={"https://eshop-eyuz.vercel.app/"}
        />
      </div>
    </section>
  );
};

export default Projects;
