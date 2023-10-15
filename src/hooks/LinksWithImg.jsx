import { Link } from "react-router-dom";

const Links = ({ img = '', title = 'img', classNames = '', path = '/' }) => {
  return (
    <Link to={path} >
      <img
        src={ img }
        alt={ title }
        className={classNames}
      />
    </Link>
  )
}

export default Links