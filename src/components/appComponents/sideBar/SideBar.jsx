import { Link } from "react-router-dom"
import { setCurrentTab } from "../../../app/features/portalSlice";
import { useDispatch } from "react-redux";

const SideBar = () => {
  const dispatch = useDispatch(); 

  const handleClick = (Component) => {
    dispatch(setCurrentTab(Component));
  };

  return (
    <div className="side-bar">
      {/* <Link to={"settings"} title="Settings" onClick={()=>handleClick("Settings")}>⚙️</Link> */}
      {/* <button className="sidebar-btn" title="Home">🏠</button> */}
      <Link to={"my-profile"} title="Profile" onClick={()=>handleClick("Profile")}>👤</Link>
      <Link to={"war-room"} title="War room" onClick={()=>handleClick("War room")}>⚔️</Link>
      <Link to={"my-army"} title="My army" onClick={()=>handleClick("My Army")}>🪖</Link>
      {/* <button className="sidebar-btn" title="Favorites">❤️</button> */}
      {/* <button className="sidebar-btn" title="Calculator">🧮</button> */}
      {/* <button className="sidebar-btn" title="Dice Game">🎲</button> */}
      {/* <button className="sidebar-btn" title="Blood Bowl">🏈</button> */}
      {/* <button className="sidebar-btn" title="Messages">💬</button> */}
      {/* <button className="sidebar-btn" title="Game">🎮</button> */}
      <Link to={"game-map"} title="Game" onClick={()=>handleClick("Game")}>🎮</Link>
      {/* <button className="sidebar-btn" title="Documents">📜</button> */}
      {/* <button className="sidebar-btn" title="Contact">☎️</button> */}
      {/* <button className="sidebar-btn" title="Links">🔗</button> */}
      
      <button className="sidebar-btn" title="Logout">👋</button>
    </div>
  )
}

export default SideBar
