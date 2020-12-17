import './App.css';
import classNames from "classnames";
import "bulma/css/bulma.css";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from 'react';
import GradeDetermination from './components/GradeDetermination.js';
import LearningObjectives from './components/LearningObjectives.js';
import CourseInformation from './components/CourseInformation.js';
import CourseName from './components/CourseName.js';

function App() {
  return (
    <div className = "container">
      <div className="App"> 
      <header className = "title">
        <h1 className = "title is-1">Course Outline Creator</h1>
        <p className="subtitle is-4">Create course outlines fast</p>
      </header>
        <CourseName />
        <CourseInformation/>
      </div>
    </div>
  );
}

export default App;
