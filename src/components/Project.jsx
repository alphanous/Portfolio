import React from 'react'
import { useState,useEffect } from 'react';
import { Bars } from 'react-loader-spinner';
import Nav from './Nav'
import { FaGithub } from "react-icons/fa";
import link1 from '../images/movie.jpg'
import link2 from '../images/fash.png'
import link3 from '../images/pers.jpg'
import Footer from './Footer';
const Project = () => {
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
      <div className="project_main">
        <h1 className='main_heading'>My Projects</h1>
        <div className="project_container">
          <div className="project_card">
            <div className="img_cont">
              <img src={link1} alt="moviebuddy" />
            </div>
            <h1>Moviebuddy</h1> 
            <h1>(Online Movie Ticket Booking System)</h1>
            {/* <h3>Tach Stack Used: html, css, javascript, Node.Js, Express.Js, MongoDB</h3> */}
            <h3>Discription:</h3>
            <p>Created an web application on, online movie ticket booking system using mern stack.Web
              application contain three page, first page for login/register, second page is home page and third page is for
              booking tickets.At home page there are sections for like popular movies, services, contact-us.
              For backend i have used Node.js with express.js framework.
            </p>
            <a href="https://github.com/alphanous/moviebuddy" className='git'><button className='gb'>Github Link: <FaGithub /></button></a>
          </div>
          <div className="project_card">
          <div className="img_cont">
              <img src={link2} alt="fashionhub" />
            </div>
            <h1>Fashionhub </h1> 
            <h1>(An E-Commerce App)</h1>
            {/* <h3>Tach Stack Used:html, css, javascript, Node.Js, Express.Js, MongoDB</h3> */}
            <h3>Discription:</h3>
            <p>Created an e-commerce app using mern stack.I have used EJS for buliding structure of my
              application, noraml css for styling, for database management i have used mongodb.It contains login/register and
              home page, where user can select product to buy.
            </p>
            <a href="https://github.com/alphanous/fashionhub" className='git'><button className='gb'>Github Link: <FaGithub /></button></a>
          </div>
          <div className="project_card">
          <div className="img_cont">
              <img src={link3} alt="portfolio" />
            </div>
            <h1>Personal Portfolio</h1>
            {/* <h3>Tach Stack Used:html, css, javascript, React.Js</h3> */}
            <h3>Discription:</h3>
            <p>Created a personal portfolio website using html css javascript and react js and hosted on vercel.
              on home page i have my intro and resume also there is project,skills and contact page also.On project page 
              i have listed my project in form of card with github sourc code link.
            </p>
            <a href="https://github.com/alphanous/Portfolio" className='git'><button className='gb'>Github Link: <FaGithub /></button></a>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Project