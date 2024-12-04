import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Education,
  Project,
//   Contact,
  Navigation,
  Footer
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';
// import Education from "./components/Education";
import Skills from './components/Skills'
import About from './components/About'

function App() {
    const [mode, setMode] = useState<string>('light');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn transitionDuration={700}>
            <Main/>
            <About />
            <Education/>
            <Timeline/>
            <Project/>
            <Skills />
            {/* <Contact/> */}
        </FadeIn>
        <Footer />
    </div>
    );
}

export default App;