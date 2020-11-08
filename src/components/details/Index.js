import React from 'react'
import './style.css'
import formImg from './Img/gizem.jpg'
// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Typed from 'react-typed';
// Animate
import styled, { keyframes } from 'styled-components';
import FadeInLeft from 'react-animations/lib/fade-in-left'
import FadeInRight from 'react-animations/lib/fade-in-right'
// For forwarding the email to my Gmail account
import emailjs from 'emailjs-com';

export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('default_service', 'template_gTdonydB', e.target, 'user_0GwZUMzrr2oQ1HgYaHHC8')
            .then((result) => {
                alert("Thank you, Your messeage have been sent");
                document.forms["myForm"].reset();
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    const FadeInLeftAnimation = keyframes`${FadeInLeft}`;
    const FadeInLeftDiv = styled.div`
        animation:  2s ${FadeInLeftAnimation};
    `;

    const FadeInRightAnimation = keyframes`${FadeInRight}`;
    const FadeInRightDiv = styled.div`
        animation:  2s ${FadeInRightAnimation};
    `;

    return (

        <>
            <Container className="detailsContainer">
                <div className="text-center section-caption">
                    <h1 className="section-title pt-5 pb-3">Here's all about you need to know about me!</h1>
                </div>
                <Row className="flex-column-reverse flex-lg-row my-5">
                    <Col md={6}>
                        <FadeInLeftDiv>
                        <div className="hey-content" >
                  <h1 className="mb-0">WHERE I AM FROM?</h1>
                </div>
                {/* <p className="lead about-me-caption">I have changed my career goals from tourism to become a front-end developer. 
                I am really excited to bring the applications that I will create with my fingers to users from other parts of the world. One of the most important turning points of my life was when I got accepted in the Front-End Web Development Bootcamp by Re:Coded I have shifted my career goals from teaching English to become a developer. One of the most important turning points of my life was when I got accepted in the Front-End Web Development Bootcamp by <a href="https://www.re-coded.com/" target="_blank" rel='noreferrer noopener'>Re:Coded</a> and <a href="https://flatironschool.com/" target="_blank" rel='noreferrer noopener'>Flatiron school</a>. I honed my skills in front-end web development as well as in soft skills during the bootcamp. Now, I'm focusing on practicing, improving and going deeper into the techniques that he learned.</p> */}
                <p>I was born in Turkey however my family immigrate from Bulgarian so I have dual citizenship, it's allows me to work without work permission.</p>
                <div className="hey-content" >
                  <h1 className="mb-0">EDUCATION</h1>
                </div>
                {/* <p className="lead about-me-caption">I have changed my career goals from tourism to become a front-end developer. 
                I am really excited to bring the applications that I will create with my fingers to users from other parts of the world. One of the most important turning points of my life was when I got accepted in the Front-End Web Development Bootcamp by Re:Coded I have shifted my career goals from teaching English to become a developer. One of the most important turning points of my life was when I got accepted in the Front-End Web Development Bootcamp by <a href="https://www.re-coded.com/" target="_blank" rel='noreferrer noopener'>Re:Coded</a> and <a href="https://flatironschool.com/" target="_blank" rel='noreferrer noopener'>Flatiron school</a>. I honed my skills in front-end web development as well as in soft skills during the bootcamp. Now, I'm focusing on practicing, improving and going deeper into the techniques that he learned.</p> */}
                <p>I studied in high school, university on tourism. My master's degree is for tourism also. However, by turning the crisis into an opportunity during the pandemic period, I have started to learn coding on Youtube, then I met with Re:Coded. It was a biggest chance in my life. While I didn't even understand what the developers were writing on the black screen, now I started coding like them. </p>
                <div className="hey-content" >
                  <h1 className="mb-0">SKILLS</h1>
                </div>
                <Row className="iconsDetails">
                <Col >
                <i class="fab fa-4x fa-js-square"></i>
                </Col>
                <Col>
                <i class="fab fa-4x fa-css3-alt"></i>
                </Col>
                <Col>
                <i class="fab fa-4x  fa-react"></i>
                </Col>
                </Row>
                <div className="hey-content" >
                  <h1 className="mb-0">GOALS</h1>
                </div>
                {/* <p className="lead about-me-caption">I have changed my career goals from tourism to become a front-end developer. 
                I am really excited to bring the applications that I will create with my fingers to users from other parts of the world. One of the most important turning points of my life was when I got accepted in the Front-End Web Development Bootcamp by Re:Coded I have shifted my career goals from teaching English to become a developer. One of the most important turning points of my life was when I got accepted in the Front-End Web Development Bootcamp by <a href="https://www.re-coded.com/" target="_blank" rel='noreferrer noopener'>Re:Coded</a> and <a href="https://flatironschool.com/" target="_blank" rel='noreferrer noopener'>Flatiron school</a>. I honed my skills in front-end web development as well as in soft skills during the bootcamp. Now, I'm focusing on practicing, improving and going deeper into the techniques that he learned.</p> */}
                <p>I am eager to bring the applications I will create with my fingers to the users from the other side of the world!</p>
                        </FadeInLeftDiv>
                    </Col>
                    <Col md={6}>
                        <FadeInRightDiv>
                            <img id="gizemImage"src={formImg} alt="" className="img-fluid m-auto d-block"></img>
                        </FadeInRightDiv>
                    </Col>
                </Row>
            </Container>
        </>
    );
}