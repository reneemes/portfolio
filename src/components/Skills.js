import '../assets/styles/Skills.scss'

function Skills() {

  return (
    <section className='skills-section' id='skills'>
      <h1>Skills</h1>
      <div className='skills'>
        <div className='languages'>
          <h2>Programming Languages</h2>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt='JavaScript'/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg" alt='Ruby'/>
        </div>
        <div className='frameworks'>
          <h2>Frameworks</h2>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt='React'/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain.svg" alt='Rails'/>
        </div>
      </div>
    </section>
  )
};

export default Skills;
