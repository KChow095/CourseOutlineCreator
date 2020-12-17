import logo from './logo.svg';
import './App.css';
import courseInfromation from './components/courseInformation';
import gradeDetermination from './components/gradeDetermination';
import learningObjectives from './components/learningObjectives';

function App() {
  return (
    <div className="App">
     <courseInfromation />
     <learningObjectives />
     <gradeDetermination />
    </div>
  );
}

export default App;
