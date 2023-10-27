import { useState, useEffect } from "react";
import { changeVariableCss } from "../helpers";

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

import LinksImg from "../hooks/LinksWithImg";

import '../css/header.css';

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

  const initialState = {
    src: sun,
    title: 'claro',
    color_bg: '#030507',
    color_border_top: '#2194f2',
    color_text: '#c1c1c1',
    color_bg_card: '#050c1a',
    color_border_card: '#2194f265',
    color_box_card: '#9292920',
    color_about_link: '#2194f2'
  };

  const secondState = {
    src: moon,
    title: 'oscuro',
    color_bg: '#c1c1c1',
    color_border_top: 'linear-gradient(#303030, 50%, #0057FF 50%)',
    color_text: '#222',
    color_bg_card: '#c1c1c1',
    color_border_card: '#c1c1c103',
    color_box_card: '#929292',
    color_about_link: '#004cff'
  }

  const [mode, setMode] = useState(
    JSON.parse(localStorage.getItem('theme')) || initialState
  );

  const handleMode = () => {

    if (mode.title === 'claro') {
      setMode(secondState);
      changeVariableCss([
        {nameVariable: '--color-bg', valueVariable: mode.color_bg},
        {nameVariable: '--color-border-top', valueVariable: mode.color_border_top},
        {nameVariable: '--color-text', valueVariable: mode.color_text},
        {nameVariable: '--color-bg-card', valueVariable: mode.color_bg_card},
        {nameVariable: '--border-card', valueVariable: mode.color_border_card},
        {nameVariable: '--box-card', valueVariable: mode.color_box_card},
        {nameVariable: '--color-plus-links', valueVariable: mode.color_about_link},
      ]);
      localStorage.setItem('theme', JSON.stringify(mode));
      return;
    }

    setMode(initialState);
    changeVariableCss([
      {nameVariable: '--color-bg', valueVariable: mode.color_bg},
      {nameVariable: '--color-border-top', valueVariable: mode.color_border_top},
      {nameVariable: '--color-text', valueVariable: mode.color_text},
      {nameVariable: '--color-bg-card', valueVariable: mode.color_bg_card},
      {nameVariable: '--border-card', valueVariable: mode.color_border_card},
      {nameVariable: '--box-card', valueVariable: mode.color_box_card},
      {nameVariable: '--color-plus-links', valueVariable: mode.color_about_link},
    ])
    localStorage.setItem('theme', JSON.stringify(mode));
  };

  useEffect(() => {
    handleMode();
  }, [])
  

  return (
    <header className="header">

      <div className="heroe">

        <nav className="grid heroe__nav">

          <div className="heroe__nav__content">

            <div className="heroe__nav__content__bg" onClick={handleMode}>

              <div
                className={`heroe__nav__content__rounded 
                  ${mode.title == 'claro'
                    ? 'heroe__nav__content__rounded--light'
                    : 'heroe__nav__content__rounded--dark'}`
                  }
              >
                <img src={mode.src} alt={mode.title} />
              </div>

            </div>

          </div>

        </nav>

        <div className="heroe__tools grid">

          <h2 className="heroe__tools__title">Creando Proyectos Con:</h2>

          <div className="heroe__tools__pictures">
            {
              tecnologies.map((tecnologie) => (
                <LinksImg
                  key={tecnologie.id}
                  img={tecnologie.img}
                  title={tecnologie.title}
                  classNames={`heroe__tools__pictures__img`}
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
