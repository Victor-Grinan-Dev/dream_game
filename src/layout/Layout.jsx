import NavBar from "../components/appComponents/navBar/NavBar"
import SideBar from "../components/appComponents/sideBar/SideBar"
import Main from "./Main"

const Layout = () => {
  return (
    <div className="layout-container">
        <div className="rigth-block">
            <NavBar />
            <Main/>
        </div>
       <SideBar/>
    </div>
  )
}

export default Layout