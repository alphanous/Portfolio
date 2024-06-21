import React from "react";
import Nav from "./Nav";
import Footer from'./Footer';
import { useState,useEffect } from 'react';
import { Bars } from 'react-loader-spinner';
import img1 from '../images/cpp.svg'
import img2 from '../images/js.svg'
import img3 from '../images/nodejs.svg'
import img4 from '../images/c.png'
import img5 from '../images/react.svg'
import img6 from '../images/mongodb.svg'
import img7 from '../images/html.svg'
import img8 from '../images/css.svg'
import img9 from '../images/exp.png'
import img10 from '../images/mysql.png'
const Skills = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const timer = setTimeout(() => {
          setLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
        <div className="loader">
            <Bars
                height="80"
                width="80"
                color="#FF9C00"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
}
  return (
    <>
      <Nav />
      <div className="skills">
        <div className="technical_skills">
          <h1>Technical Skills</h1>
          <div className="tech_logo">
            <div className="cnt"><img src={img4} alt="c" /></div>
            <div className="cnt"><img src={img1} alt="c++" /></div>
            <div className="cnt"><img src={img7} alt="html" /></div>
            <div className="cnt"><img src={img8} alt="css" /></div>
            <div className="cnt"><img src={img2} alt="js" /></div>
            <div className="cnt"><img src={img3} alt="nodejs" /></div>
            <div className="cnt"><img src={img9} alt="expressjs" /></div>
            <div className="cnt"><img src={img5} alt="js" /></div>
            <div className="cnt"><img src={img6} alt="nodejs" /></div>
            <div className="cnt"><img src={img10} alt="c++" /></div>
          </div>
        </div>
        <div className="relevent_coursework">
          <h1>Relevent Coursework</h1>
          <div className="course_list">
            <ul>
              <li>OPERATING SYSTEM</li>
              <li>DATA STRUCTURE & ALGORITHMS</li>
              <li>DATA COMMUNICATION</li>
              <li>DATABASE MANAGEMENT SYSTEM</li>
            </ul>
            <ul>
              <li>OOPS(C++)</li>
              <li>COMPUTER NETWORKING</li>
              <li>CRYPTOGRAPHY</li>
              <li>SOFTWARE ENGINEERING</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Skills;
