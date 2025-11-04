import { Link } from "react-router-dom"

const NavBar = () => {
  return (
      <div className="nav-bar">
        <Link to={"war-room"}>WarRoom</Link> <span> </span>
        <Link to={"my-army"}>MyArmy</Link>
      </div>
  )
}

export default NavBar