import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Link from "next/link";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">

        <ProjectCard
          src="/proj1.jpeg"
          title="Smifty: Smart Wheelchair"
          description="We have made a smart wheelchair prototype which uses YOLO v6 model to detect and avoid objects, will act as an aid for physically disabled people"
        />
        <ProjectCard
          src="/proj2.png"
          title="Gbpiet-TnP_Portal"
          description="A college training and placement website is a website that provides information and resources to students and alumni who are looking for jobs. The website may include information on upcoming job fairs, company profiles, and job postings. It may also offer resources such as resume writing tips, interview preparation tips, and salary negotiation tips.
          The website may also have a section for employers who are looking to recruit students and alumni. This section may include information on how to post job openings, how to contact students and alumni, and how to schedule interviews."
        />
        <ProjectCard
          src="/proj3.png"
          title="Spardha: Coding Competition Platform"
          description="Spardha offers hundreds of competitive programming challenges. It is one of the best site for competitive programming that allows you to write code in their online editor and view a collection of challenges. The coding problems are separated into different categories based on your skill level. Competitive coding is a great way to improve your programming skills and learn new algorithms."
        />
      </div>
    </div>
  );
};

export default Projects;
