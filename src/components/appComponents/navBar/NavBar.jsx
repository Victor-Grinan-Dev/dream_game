import { useSelector } from "react-redux";

const NavBar = () => {
  const currentTab = useSelector((state) => state.portal.currentTab);
  return (
      <div className="nav-bar">
        <div>logo</div>
        <h3>{currentTab}</h3>
        <div></div>
      </div>
  )
}

export default NavBar