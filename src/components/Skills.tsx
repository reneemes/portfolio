import '../assets/styles/Skills.scss'

function Skills() {

  return (
    <section className='skills-section' id='skills'>
      <h1>Skills</h1>
      <div className='skills'>
        <div className='languages'>
          <h2>Programming Languages</h2>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt='JavaScript'/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt='TypeScript'/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" alt='HTML'/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" alt='CSS'/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg" alt='Ruby'/>
        </div>
        <div className='frameworks'>
          <h2>Frameworks</h2>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt='React'/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg" alt='Cypress'/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt='Tailwind CSS'/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain.svg" alt='Rails'/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rspec/rspec-original.svg" alt='RSpec'/>
        </div>
        <div className='tools'>
          <h2>Tools</h2>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" alt='Postman'/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain-wordmark.svg" alt='PostgreSQL'/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg" alt='Git'/>
          {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt='Figma'/> */}
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/heroku/heroku-plain-wordmark.svg" alt='Heroku'/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg" alt='Vercel'/>
        </div>
      </div>
    </section>
  )
};

export default Skills;
