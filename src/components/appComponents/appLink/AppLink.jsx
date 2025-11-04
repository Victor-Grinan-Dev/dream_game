import { Link } from "react-router-dom"

const AppLink = ({caption, url}) => {
  return (
    <div className="app-link">
        <Link to={url} >{caption}</Link>
    </div>
  )
}

export default AppLink