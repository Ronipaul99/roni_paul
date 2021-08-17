import Navigation from './components/Navigation'
import Greetings from './containers/Greetings'
import Skills from './containers/Skills'
import Proficiency from './containers/Proficiency'
import Education from './containers/Education'
import Experience from './containers/Experience'
import Projects from './containers/Projects'
import GithubProfile from './containers/GithubProfile'
import './assets/css/argon-design-system-react.css';
import './assets/vendor/nucleo/css/nucleo.css';
import './assets/vendor/font-awesome/css/font-awesome.min.css'
import './App.css'
function App() {
  return (
    <div className="app">
      <Navigation/>
      <Greetings/>
      <Skills/>
      <Proficiency/>
      <Education/>
      <Experience/>
      <Projects/>
      <GithubProfile/>
    </div>
  );
}

export default App;
