import { Link } from "gatsby"
import * as React from "react"
import './../styles/global.css'


// markup
const IndexPage = () => {
  return (
    <main>
      <h1>it's JustScience</h1>
      <ul>
        <li><Link to="/free-melody-loops">Free Melody Loops</Link></li>
        <li><Link to="/free-trap-beats">Free Trap Beats</Link></li>
        <li><Link to="/free-background-music">Free Background Music</Link></li>
      </ul>
    </main>
  )
}

export default IndexPage
