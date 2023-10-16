const FooterLink = ({ img = '', alt = 'img', title = '', perfil = '', path = ''}) => {
  return (
    <a href={ path } className="footer__nav__link" target="_blank">

    <div className="footer__nav__link__img">
      <img src={ img } alt={ alt } />
    </div>

    <div className="footer__nav__link__content">
      <img src={ perfil } alt="fotografia de perfil"/>
      <span>{ title }</span>
    </div>

  </a>
  )
}

export default FooterLink