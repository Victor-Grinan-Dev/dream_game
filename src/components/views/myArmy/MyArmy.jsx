import { Link } from "react-router-dom"

const MyArmy = () => {
  return (
    <div>
      <div><Link to={"/create-formation"}>CreateFormation</Link></div>
    </div>
  )
}

export default MyArmy