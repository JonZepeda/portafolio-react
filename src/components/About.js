import React from "react";
import styles from "./About.module.css";
import miFoto from "../assets/images/JonathanZepeda.jpg"

function About(){
    return (
        <section className={`${styles.about} ${styles.fadeIn}`}>
            <img src={miFoto} alt="mi foto" className={styles.about__photo}/>
            <div className={styles.about__text}>
                <h2>Sobre mí</h2>
                <p>Me apasiona el desarrollo web y la creación de aplicaciones que faciliten la vida de las personas. Me encuentro aprendiendo tecnologías como HTML, CSS, JavaScript, React y .NET para convertirme en desarrollador Full Stack.
                    Me considero una persona autodidacta, responsable y con muchas ganas de seguir aprendiendo cada día.</p>
            </div>
        </section>
    );
}

export default About;