import html from "../img/html.png";
import figma from "../img/figma.png";
import css from "../img/css.png";
import js from "../img/js.png";
import react from "../img/react.png";
import tailwind from "../img/tailwind.png";

const Header = () => {
  return (
    <header className="header">

      <nav className="header__nav">

        <ul className="header__nav__content">

          <li>
            <button>Inicio</button>
          </li>

          <li>
            <button>Mode</button>
          </li>

        </ul>

      </nav>

      <div className="perfil grid">

        <div className="perfil__tools">

          <h2 className="perfil__tools__title">Dev Tools</h2>

          <div className="perfil__tools__pictures">

            <img
              src={ figma }
              alt="tecnologie html"
              className="perfil__tools__img"
            />

            <img
              src={html}
              alt="tecnologie html"
              className="perfil__tools__img"
            />

            <img
              src={css}
              alt="tecnologie html"
              className="perfil__tools__img"
            />

            <img
              src={js}
              alt="tecnologie html"
              className="perfil__tools__img"
            />

            <img
              src={react}
              alt="tecnologie html"
              className="perfil__tools__img"
            />

            <img
              src={tailwind}
              alt="tecnologie html"
              className="perfil__tools__img"
            />

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
