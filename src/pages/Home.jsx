import Greeting from '../components/Greeting.jsx'
import { currentUser } from '../data/currentUser.js'

function Home() {
  return (
    <section className="card">
      <h2>Home</h2>
      <Greeting name={currentUser.fullName} />
      <p className="muted">Now showing tonight:</p>
      <ul className="film-list">
        <li><span>The Last Monsoon</span><span>7:30 PM</span></li>
        <li><span>Neon Harbour</span><span>8:15 PM</span></li>
        <li><span>Paper Lanterns</span><span>9:00 PM</span></li>
      </ul>
    </section>
  )
}

export default Home
