import github from "../img/github.png";
import instagram from "../img/instagram.png";
import whastApp from '../img/whatsApp.png';

import perfil_whatsApp from '../img/perfil_whatsApp.png';
import perfil_github from '../img/perfil_github.png';
import perfil_instagram from '../img/perfil_instagram.png';
import FooterLink from "./FooterLink";

const Footer = () => {

  const perfils = [
    { img: github, alt: 'perfil de github', title: 'JhonatanVeliz', perfil: perfil_github, path: 'https://github.com/JhonatanVeliz' },
    { img: whastApp, alt: 'perfil de whatsApp', title: '+502 5067 0910', perfil: perfil_whatsApp, path: 'https://api.whatsapp.com/send?phone=50670910' },
    { img: instagram, alt: 'perfil de instagram', title: 'JhonatanVeliz19', perfil: perfil_instagram, path: 'https://www.instagram.com/jhonatanveliz19/' }
  ];

  return (
    <div className='footer'>
      <div className="grid paddings">

        <div>
          <pre className='footer__line'>
            &lt;END/&gt;
          </pre>
        </div>

        <div className="footer__content">

          <nav className="footer__nav">

            {
              perfils.map((perfil, index) => (
                <FooterLink
                  key={index}
                  img={perfil.img}
                  alt={perfil.alt}
                  title={perfil.title}
                  perfil={perfil.perfil}
                  path={perfil.path}
                />
              ))
            }

          </nav>

          <h4 className="footer__copy">
            &copy; Creado por Jhonatan Véliz 2023
          </h4>

        </div>

      </div>
    </div>
  )
}

export default Footer