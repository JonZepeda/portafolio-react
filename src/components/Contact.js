import React from 'react';
import styles from './Contact.module.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Contact() {
    return (
    <section  id="contacto"  className={`${styles.contact} ${styles.fadeIn}`}>
            <h2>Contacto</h2>
            <p>
                <FaEnvelope /> <a href="jzepe2003@gmail.com">jzepe2003@gmail.com</a></p>
            <p>Sígueme en:</p>
            <ul>
                <li><a href="https://github.com/JonZepedatailwindcss -v" target="_blank" rel="noopener noreferrer">
                    <FaGithub /> GitHub</a></li>
                <li><a href="https://linkedin.com/in/zepeda-jonathan" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin/> LinkedIn</a></li>
            </ul>
        </section>
    );
}

export default Contact;
