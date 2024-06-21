import React, { useState, useEffect } from 'react';
import { Bars } from 'react-loader-spinner';
import { Extratext } from './Extratext';
import { IoMdDownload } from "react-icons/io";
import Nav from './Nav';
import img1 from '../images/f3.jpg'
import pdflink from '../images/Rajyavardhan_rathore4.pdf'
import Footer from './Footer';
const Home = () => {
    function handledelay(event) {
        event.preventDefault();
        const button = document.querySelector('.dra');
        const link = event.currentTarget;
        button.disabled = true;
        setTimeout(() => {
            button.disabled = false;
            window.open(link.href, '_blank', 'noopener');
        }, 2000);
    }


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
            <div className='HomePage'>

                <div className='HomeText'>
                    <h1>Hi There!</h1>
                    <h1>I'M <b>Rajyavardhan Rathore</b></h1>
                    <Extratext />
                    <a href={pdflink} className='dr'  rel='noreferrer' target='_blank' download="Rajyavardhan_Rathore Resume" onClick={handledelay}><button className='dra'><IoMdDownload/> Download Resume</button></a>
                </div>
                <div className="img-cont">
                    <img src={img1} alt="noimg" className='img1' />
                </div>
            </div>
            <div className="breif"> 
                <div className="intro">
                    <h1>About Me</h1>
                    <p>
                        Hi, my name is <b>Rajyavardhan Rathore</b> and I am from Jodhpur, Rajasthan.
                        I'm currently a final year college student at IIIT Bhagalpur pursuing <b>BTech in Computer Science and Engineering having cgpa of 7.96</b>. <br /><br />
                        My technical skills include programming in C, C++, data structures, and algorithms. I am also familiar with web development using the MERN stack.
                        Using my web development skills, I have worked on projects like online ticket booking web application and ecommerce web application.
                        but my strength lies in core subjects like oops, os, dbms software, and computer networks. <br /><br />
                        Apart from this i am also active in extracurricular activities like playing cricket, volley-ball and also table-tannis.
                    </p>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Home;
