import html from "../img/html.png";
import figma from "../img/figma.png";
import css from "../img/css.png";
import js from "../img/js.png";
import react from "../img/react.png";
import tailwind from "../img/tailwind.png";
import php from "../img/php.png";
import laravel from "../img/laravel.png";
import mysql from "../img/mysql.png";
import jest from "../img/jest.png";
import git from "../img/git.png";

import sun from "../img/sun.png";
import moon from "../img/moon.png";

import { ToolsImg } from "./ToolsImg";
import { useState } from "react";

const tecnologies = [
  { title: "figma tecnologie", img: figma, id: 111 },
  { title: "html tecnologie", img: html, id: 112 },
  { title: "css tecnologie", img: css, id: 113 },
  { title: "tailwind tecnologie", img: tailwind, id: 114 },
  { title: "javascript tecnologie", img: js, id: 115 },
  { title: "react tecnologie", img: react, id: 116 },
  { title: "php tecnologie", img: php, id: 117 },
  { title: "laravel tecnologie", img: laravel, id: 118 },
  { title: "mysql tecnologie", img: mysql, id: 119 },
  { title: "jest tecnologie", img: jest, id: 120 },
  { title: "gti tecnologie", img: git, id: 121 },
];

const Header = () => {

  const [srcMode, setSrcMode] = useState({ src: sun, title: 'claro' });

  const handleMode = () => {

    if (srcMode.title === 'claro') {
      setSrcMode({ src: moon, title: 'oscuro' });
      return;
    }

    setSrcMode({ src: sun, title: 'claro' });
  }

  return (
    <header className="header">

      <div className="heroe">

        <nav className="grid heroe__nav">

          <div className="heroe__nav__content">

            <div className="heroe__nav__content__bg" onClick={ handleMode }>

              <div
                className={`heroe__nav__content__rounded 
                  ${srcMode.title == 'claro'
                    ? 'heroe__nav__content__rounded--light'
                    : 'heroe__nav__content__rounded--dark'}`}
              >
                <img src={srcMode.src} alt={srcMode.title} />
              </div>

            </div>

          </div>

        </nav>

        <div className="heroe__tools grid">

          <h2 className="heroe__tools__title">Creando Proyectos Con:</h2>

          <div className="heroe__tools__pictures">
            {
              tecnologies.map((tecnologie) => (
                <ToolsImg
                  key={tecnologie.id}
                  img={tecnologie.img}
                  title={tecnologie.title}
                />
              ))
            }
          </div>

        </div>

      </div>

    </header>
  );
};

export default Header;
