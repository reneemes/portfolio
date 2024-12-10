import '../assets/styles/About.scss'
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function About() {

  return (
    <section className="about-container" id="about">
      <h1>About Me</h1>
      <div className="about-me">
        <p>
          My career journey began with a passion for problem-solving, which has driven me to excel in diverse roles—whether I’m ensuring smooth operations as a flight attendant, piloting unmanned systems, or managing teams in high-pressure environments.
          With a background in unmanned vehicle system operations, I enjoy tackling complex technical challenges and ensuring precision in everything I do. As a communications specialist, I honed my ability to formulate clear and impactful messages, while my experience as a flight attendant has strengthened my leadership and crisis management skills.
          No matter the industry or task, I’m committed to delivering high-quality results, always looking for opportunities to grow and apply my versatile skill set to new challenges.
        </p>
        <div className='email-section'>
          <EmailIcon />
          <p className='email'>RMessersmith25@gmail.com</p>
        </div>
        <div className='location-section'>
          <LocationOnIcon />
          <p className='location'>Prefered Location: Charlotte, NC</p>
        </div>
      </div>
    </section>
  );
};

export default About;