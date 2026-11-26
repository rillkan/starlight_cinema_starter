import aboutText from '../content/About.md?raw'

function About() {
  return (
    <section className="card">
      <h2>About Starlight Cinema</h2>
      <p className="about-text">{aboutText}</p>
    </section>
  )
}

export default About
