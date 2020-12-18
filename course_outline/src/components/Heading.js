import React from 'react';
import "bulma/css/bulma.css";

function Heading(){
    return(
        <section class="hero is-warning is-medium is-bold">
        <div class="hero-head">
          <nav class="navbar">
            <div class="container">
              <div class="navbar-brand">
                <a class="navbar-item">
                  <img src="/UCLogo.png" alt="Logo"/>
                </a>
                <span class="navbar-burger" data-target="navbarMenuHeroA">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
            </div>
          </nav>
        </div>
      
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title">
                Course Outline Creator
            </h1>
            <h2 class="subtitle">
                Create course outlines fast
            </h2>
          </div>
        </div>
      </section>
        );
}
export default Heading;