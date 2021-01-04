import React, { useState, useEffect, Profiler } from "react";
import ggsestc from ".././assets/img/ggsestc_logo.png";
const divStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  };
const Academic = () => {
return (
    <div id="academic" className="jumbotron jumbotron-fluid m-0" style={{backgroundColor:'white'}}>
      <div className="container container-fluid">
        <div className="row">
            <div className="col d-lg-inline align-self-center">
            <h1 className="display-4 mb-5 text-center">Academic History</h1>
            {/* <h1 className="display-4 pb-5">Experience</h1> */}
            <div className="row" style={divStyle}>
                <div className="col text-center" >
                    <img
                        // className="border border-secondary rounded-circle"
                        src={ggsestc}
                        alt="dell technologies logo"
                        width="250"
                        height="120"
                    />
                    <br/>
                    <br/>
                    <h3>Guru Gobind Singh Educational Society's Technical Campus 
                        </h3>
                    <p className="lead text-center" style={{fontSize:'22px'}}>
                        
                        B-Tech In Computer Science
                        <br/>
                        2015-2019
                    </p>
                    <a
                  className="btn btn-outline-dark btn-lg"
                  href="https://ggsestc.ac.in/"
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="Resume/CV"
                >
                  Visit Website
                </a>
                </div>
                
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Academic;