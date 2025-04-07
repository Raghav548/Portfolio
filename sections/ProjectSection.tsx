import Image from "next/image";
import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import ProjectCard from "@/components/ProjectCard";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

import terminalPortfolio from "public/projects/totalrecon.webp";
import haruFashion from "public/projects/darkweb.webp";
import haruApi from "public/projects/thm.webp";
import astroPaper from "public/projects/htb.webp";
import CampusSphere from "public/campusSphere.png";
import SolarSystem from "public/solarSystem.png";
import LaptopPrice from "public/laptopPrice.png";

const ProjectSection: React.FC = () => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for project section
  const projectSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    projectSection && onSectionChange!("projects");
  }, [projectSection]);

  return (
    <section ref={sectionRef} id="projects" className="section">
      <div className="project-title text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="section-heading">Featured Projects</h2>
        </RoughNotation>
      </div>
      <span className="project-desc text-center block mb-4" ref={elementRef}>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </span>
      <div className="flex flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} project={project} />
        ))}
      </div>
      <div className="others text-center mb-16">
        Other projects can be explored in{" "}
        <a
          href="https://github.com/Raghav548"
          className="font-medium underline link-outline text-marrsgreen dark:text-carrigreen whitespace-nowrap"
        >
          my github profile
        </a>  
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Campus Sphere",
    type: "College Portal",
    image: (
      <Image
        src={CampusSphere}
        sizes="100vw"
        fill
        alt="Total Recon"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "A full-stack web application built to streamline academic and administrative tasks for students and faculty. The portal offers a user-friendly interface and role-based access control to ensure secure and organized management of college activities.",
    tags: ["Node js","React js","Mongo db","Express js","jwt"],
    liveUrl: "https://backend-project-sem5.vercel.app",
    codeUrl: "https://github.com/Raghav548/Backend-Project-sem5-",
    bgColor: "bg-[#B4BEE0]",
  },
  {
    title: "Laptop Price Predictor",
    type: "Tool",
    image: (
      <Image
        src={LaptopPrice}
        sizes="100vw"
        fill
        alt="Darkweb Crawler"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "A machine learning web application that predicts the price of a laptop based on its specifications. Designed to help users estimate laptop costs using real-world data and regression modeling.",
    tags: ["Python","AI/ML","Linear_regression","flask-api","Scikit-learn"],
    liveUrl: "https://laptop-price-prediction-mern.vercel.app/",
    codeUrl: "https://github.com/Raghav548/Laptop_price_prediction",
    bgColor: "bg-[#A6CECE]",
  },
  {
    title: "Solar System Simulation",
    type: "3d",
    image: (
      <Image
        src={SolarSystem}
        sizes="100vw"
        fill
        alt="Haru API"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "A stunning, interactive 3D web application built with Three.js and React, allowing users to visually explore the solar system in real time.",
    tags: ["React", "THREE.js"],
    liveUrl: "https://solar-system-nu-ashen.vercel.app/",
    codeUrl: "https://github.com/Raghav548/Solar_system",
    bgColor: "bg-[#C5E4E7]",
  },
  // {
  //   title: "HackTheBox",
  //   type: "Frontend",
  //   image: (
  //     <Image
  //       src={astroPaper}
  //       sizes="100vw"
  //       fill
  //       alt="AstroPaper"
  //       className="transition-transform duration-500 hover:scale-110 object-cover"
  //     />
  //   ),
  //   desc: "Hack The Box is a leading gamified cybersecurity upskilling, certification, and talent assessment software platform enabling individuals, businesses, government institutions",
  //   tags: ["Machines", "Challanges", "Ctfs", "Networks"],
  //   liveUrl: "https://app.hackthebox.com/profile/730543",
  //   codeUrl: "https://app.hackthebox.com/profile/730543",
  //   bgColor: "bg-[#9FD0E3]",
  // },
  // {
  //   title: "TryHackMe Profile",
  //   type: "Backend",
  //   image: (
  //     <Image
  //       src={haruApi}
  //       sizes="100vw"
  //       fill
  //       alt="Haru API"
  //       className="transition-transform duration-500 hover:scale-110 object-cover"
  //     />
  //   ),
  //   desc: "TryHackMe is an online platform that teaches cyber security through short, gamified real-world labs. TryHackMe gives students their own personal hackable machine",
  //   tags: ["Web", "Challanges", "Owasp", "Academy"],
  //   liveUrl: "https://tryhackme.com/p/chetanbug",
  //   codeUrl: "https://tryhackme.com/p/chetanbug",
  //   bgColor: "bg-[#C5E4E7]",
  // }
];

export default ProjectSection;
