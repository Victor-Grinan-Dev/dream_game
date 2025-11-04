import NavBar from "../components/appComponents/navBar/NavBar"
import SideBar from "../components/appComponents/sideBar/SideBar"
import Main from "./Main"
import './layout.scss'

const Layout = () => {

  return (
    <div className="layout" >
        <div className="right-section">
            <NavBar />
            <Main/>
        </div>
       <SideBar/>
    </div>
  )
}

export default Layout