import './App.css';
import classNames from "classnames";
import "bulma/css/bulma.css";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from 'react';
import GradeDetermination from './components/GradeDetermination.js';
import LearningObjectives from './components/LearningObjectives.js';
import CourseInformation from './components/CourseInformation.js';
import CourseName from './components/CourseName.js';
import Heading from './components/Heading.js';
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
        <Footing />
      </div>
    </div>
  );
}

export default App;
