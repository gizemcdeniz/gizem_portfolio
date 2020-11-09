import React from 'react'
import './style.css'
// import formImg from './Img/form-img.png'
import formImg from './Img/email.jpg'
// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// Animate
import styled, { keyframes } from 'styled-components';
import FadeInLeft from 'react-animations/lib/fade-in-left'
import FadeInRight from 'react-animations/lib/fade-in-right'
// For forwarding the email to my Gmail account
import emailjs from 'emailjs-com';

export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_kt9c15b', 'template_e16dwsp', e.target, 'user_jwGNhvDiskqQ4F2iAMuU5')
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
            <Container>
                <div className="text-center section-caption">
                    <h1 className="section-title pt-5 pb-3">Get in touch</h1>
                    <p className="lead w-75 m-auto pb-4 section-p">I'm available for freelance, can't wait for the next
                        exciting project and it could be yours! So let's work on somthing to be proud of together!</p>
                </div>
                <Row className="flex-column-reverse flex-lg-row my-5">
                    <Col md={6}>
                        <FadeInLeftDiv>
                            {/* <form name="myForm" id="contact-form" onSubmit={sendEmail}>
                                <input required placeholder="Your Name" type="text" name="user_name" className="form-control costuom-form mb-3 shadow-none"></input>
                                <input required placeholder="Your Email" type="email" name="user_email" className="form-control costuom-form mb-3 shadow-none"></input>
                                <textarea required style={{ resize: "none" }} placeholder="Your Message" name="message" rows="4" className="form-control md-textarea costuom-form mb-3 shadow-none"></textarea>
                                <button type="submit" value="Send" className="btn btn-outline-primary btn-form my-3 py-2 px-5 btn-block">Send</button>
                            </form> */}
                             <Col md={6}>
                <span style={{color: "black", fontSize:"2em"}} className="find-me">Social Media</span>
                <ul className="list-unstyled list-social-links">
                  <li className="d-inline-block m-3"><a href="https://github.com/gizemcdeniz/" target="_blank" rel='noreferrer noopener'><i className="fab fa-3x fa-github github"></i></a></li>
                  <li className="d-inline-block m-3"><a href="https://www.linkedin.com/in/gizem-deniz/" target="_blank" rel='noreferrer noopener'><i className="fab fa-3x fa-linkedin linkedin"></i></a></li>
                  <li className="d-inline-block m-3"><a href="https://medium.com/@gizemc.deniz" target="_blank" rel='noreferrer noopener'><i className="fab fa-3x fa-medium medium"></i></a></li>
                </ul>
                </Col>
                        </FadeInLeftDiv>
                    </Col>
                    <Col md={6}>
                    <a style={{fontSize: "2.5em", color:"black"}} className="m-auto d-flex justify-content-center" href="mailto:gizemde.deniz@gmail.com">Send mail</a>
                        <FadeInRightDiv>
                            {/* <img src={formImg} alt="" className="img-fluid m-auto d-block"></img>
                            <span style={{color: "black", fontSize:"2em"}} className="find-me">Or leave a message!</span>
                            <form name="myForm" id="contact-form" onSubmit={sendEmail}>
                                <input required placeholder="Your Name" type="text" name="user_name" className="form-control costuom-form mb-3 shadow-none"></input>
                                <input required placeholder="Your Email" type="email" name="user_email" className="form-control costuom-form mb-3 shadow-none"></input>
                                <textarea required style={{ resize: "none" }} placeholder="Your Message" name="message" rows="4" className="form-control md-textarea costuom-form mb-3 shadow-none"></textarea>
                                <button type="submit" value="Send" className="btn btn-outline-primary btn-form my-3 py-2 px-5 btn-block">Send</button>
                            </form> */}
                            <img src={formImg} alt="" className="img-fluid m-auto d-block"></img>
                        </FadeInRightDiv>
                    </Col>
                </Row>
            </Container>
        </>
    );
}