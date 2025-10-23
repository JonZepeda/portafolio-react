import React from "react";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";
import calculadora from "../assets/images/calculadora.png"
import api from "../assets/images/api.png";
import maletin from "../assets/images/maletin.png";

function Projects(){
    const projects = [
        {
            title: "Proyecto Calculadora",
            description: "Proyecto Calculadora Realizado con React",
            image: calculadora,
            link:"na",
        },
        {
            title: "Proyecto Api",
            description: "Proyecto API Realizado con .Net",
            image: api,
            link:"api",
        },
        {
            title: "Portafolio Web ",
            description: "Portafolio Web con HTML/CSS/JavaScript",
            image: maletin,
            link:"https://github.com/JonZepeda/portafolio",
        },
    ];

    return (
        <section id="proyectos" className={`${styles.projects} ${styles.fadeIn}`}>
            <h2>Proyectos</h2>
            <div className={styles.projects__grid}>
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    )
}

export default Projects