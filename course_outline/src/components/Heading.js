import React from 'react';
import "bulma/css/bulma.css";

function Heading(){
    return(
        <section className="hero is-warning is-medium is-bold">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item">
                  <img src="/UCLogo.png" alt="Logo"/>
                </a>
                <span className="navbar-burger" data-target="navbarMenuHeroA">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
            </div>
          </nav>
        </div>
      
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">
                Course Outline Creator
            </h1>
            <h2 className="subtitle">
                Create course outlines fast
            </h2>
          </div>
        </div>
      </section>
        );
}
export default Heading;