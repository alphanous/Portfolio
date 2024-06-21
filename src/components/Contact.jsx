import React from 'react'
import Nav from './Nav'
import { useState,useEffect } from 'react';
import { Bars } from 'react-loader-spinner';
import source from '../images/contact.png'
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import Footer from './Footer';
const Contact = () => {
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
      <div className="contact_info">
        <div className="info_container">
          <div className="social">
            <p>As i am actively looking for an entry level position in software development area,
               So i am looking forword to see some suggestion and exchange of thoughts, so let's connect with me.
              here are my social media links. 
            </p>
            <h1 className='social_logo'>
              <a href="https://www.linkedin.com/in/rajyavardhan32/"><FaLinkedin color='blue'/></a> 
              <a href="https://www.instagram.com/rathore_rajyavardhan32?r=nametag"><FaInstagramSquare color='red'/> </a>
              <a href="https://www.instagram.com/rathore_rajyavardhan32?r=nametag"><FaFacebook color='blue'/></a>
            </h1>
          </div>
          <div className="social_links"></div>
          <div className="img_conti">
            <img className='me' src={source} alt="me" />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Contact