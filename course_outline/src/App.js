import './App.css';
import "bulma/css/bulma.css";
import GradeDetermination from './components/GradeDetermination.js';
import LearningObjectives from './components/LearningObjectives.js';
import LetterDetermination from './components/LetterDetermination.js';
import CourseInformation from './components/CourseInformation.js';
import CourseName from './components/CourseName.js';
import Heading from './components/Heading.js';
import SubmitClear from './components/SubmitClear.js';
import Footing from './components/Footing.js';

function App() {
  return (
    <div className = "container">
      <div className="App"> 
        <Heading />
        <section className ="section">
          <CourseName />
        </section>
        <div className="is-divider"></div>
        <section className = "section">
          <CourseInformation/>
        </section>
        <div className="is-divider"></div>
        <section className = "section">
          <LearningObjectives />
        </section>
        <div className="is-divider"></div>
        <section className = "section">
          <GradeDetermination />
        </section>
        <div className="is-divider"></div>
        <section className = "section">
          <LetterDetermination/>
        </section>
        <section className = "section">
          <SubmitClear />
        </section>
        <Footing />
      </div>
    </div>
  );
}

export default App;
