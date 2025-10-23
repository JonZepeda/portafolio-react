import React from "react";
import styles from "./ProjectCard.module.css";
function ProjectCard({title, description, image, link}){
    return (
       <div className={styles.card}>
           <img src={image} alt={title} className="project-Card__image"/>
           <h3>{title}</h3>
           <p>{description}</p>
           {link && (
               <a href={link} target="_blank" rel="noopener noreferrer"> Ver Proyecto</a>
           )}
       </div>
    );
}
export default ProjectCard;