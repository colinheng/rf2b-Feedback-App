import { Link } from "react-router-dom"
import Card from "../components/shared/Card"

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>A REACT app for feedback to Miaow!</p>
        <p>Version 0.1</p>

        <p>
          <Link to="/">Back back back</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage
