import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-scroll';

function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Jonathan Zepeda</h1>
            <nav>
                <ul className={styles.navList}>
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#sobre-mi">Sobre mí</a></li>
                    <li><Link
                        to="proyectos"
                        smooth={true}
                        duration={500}
                        offset={-70}
                        spy={true}
                        activeClass="active"
                    ><a href="#sobre-mi">Proyectos</a>
                    </Link></li>
                    <li><Link
                        to="contacto"
                        smooth={true}
                        duration={500}
                        offset={-70}
                        spy={true}
                        activeClass="active"
                    >
                        <a href="#sobre-mi">Contacto</a>
                    </Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
