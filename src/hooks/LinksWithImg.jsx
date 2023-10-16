import { HashLink } from "react-router-hash-link";

const Links = ({ img = '', title = 'img', classNames = '', path = '/#projects' }) => {
  return (
    <HashLink to={path} >
      <img
        src={ img }
        alt={ title }
        className={classNames}
      />
    </HashLink>
  )
}

export default Links