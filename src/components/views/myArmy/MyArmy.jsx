import { Link } from "react-router-dom"

const MyArmy = () => {
  return (
    <div>
      <h3>MyArmy</h3>
      <div><Link to={"/create-formation"}>CreateFormation</Link></div>
    </div>
  )
}

export default MyArmy