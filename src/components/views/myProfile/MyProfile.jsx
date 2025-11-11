import { Link } from "react-router-dom"
import AppButton from "../../appComponents/appButton/AppButton.jsx"

const MyProfile = () => {
  return (
    <div>
      <p>user profile details</p>
      <p>player stats</p>
      <Link to="settings">Go to Settings</Link>
      <AppButton caption="Test" type="9" fx={() => alert("btn works")} />

    </div>
  )
}

export default MyProfile