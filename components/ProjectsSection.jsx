"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
    {
        id: 1,
        title: "Indian Restaurant Website",
        description: "Indian Restaurant website developed utilizing HTML5, CSS3, JavaScript and ReactJS frameworks, to meet project specifications and ensure responsiveness across various devices and web browsers.",
        link: "https://newtasteofindia.ca/",
        previewImage: "/images/newtaste1.jpg",
        images: ["/images/newtaste1.jpg", "/images/newtaste2.jpg", "/images/newtaste3.jpg"],
        tag: ["All", "Web"],
    },
    {
        id: 2,
        title: "Linktree Portfolio Website",
        description: "Portfilio website for a Discord Bot Developer with live profile tracking with HTML5, CSS3, JavaScript, Bootstrap, Laynard api and web socket. It also has Linktree and projects portfolio.",
        link: "https://whoisrabbit.com/linktree",
        previewImage: "/images/rabbit-2.png",
        images: ["/images/projects/test5.png", "/images/projects/test2.png", "/images/projects/test6.png", "/images/projects/test7.png"],
        tag: ["All", "Software"],
    },
    {
        id: 3,
        title: "Verified Discord Bots",
        description: "Elevated community server engagement by developing and maintaining Discord Bots, including Groove for music, TNN Utils for moderation, and Decentral AI for cryptocurrency.",
        link: "https://whoisrabbit.com/projects",
        previewImage: "/images/Bots.png",
        images: ["/images/Groove.png", "/images/projects/test4.png"],
        tag: ["All", "Software"],
    },
];
const ProjectSection = () => {
    const [tag, setTag] = useState("All");

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );


    return (
        <>
            <h2 className="text-center text-4xl font-bold text--colors_default mt-4 mb-8 md:mb-12">
                See What I&apos;m Working On
            </h2>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        visitLink={project.link}
                        previewImage={project.previewImage}
                        images={project.images}
                    />
                ))}
            </div>
        </>
    );
};

export default ProjectSection;