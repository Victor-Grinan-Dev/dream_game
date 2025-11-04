import { Link } from "react-router-dom"

const MyProfile = () => {
  return (
    <div>
      <p>user profile details</p>
      <p>player stats</p>
      <Link to="settings">Go to Settings</Link>

    </div>
  )
}

export default MyProfile