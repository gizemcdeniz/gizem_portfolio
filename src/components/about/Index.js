import React from 'react';
import "./style.css"
// import AboutPic from "./Img/about.svg"
import AboutPic from "./Img/wecan.png"
// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// typed.js
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';
// Animate
import styled, { keyframes } from 'styled-components';
import FadeInLeft from 'react-animations/lib/fade-in-left'
import FadeInRight from 'react-animations/lib/fade-in-right'

export default class About extends React.Component {

  render() {

    const FadeInLeftAnimation = keyframes`${FadeInLeft}`;
    const FadeInLeftDiv = styled.div`
      animation:  2s ${FadeInLeftAnimation};
    `;

    const FadeInRightAnimation = keyframes`${FadeInRight}`;
    const FadeInRightDiv = styled.div`
    animation:  0s ${FadeInRightAnimation};
    `;

    return (
      <>
        <Container className="aboutMeContainer">
          <Row className="flex-column-reverse flex-lg-row">
            <Col lg={6} md={12}>
              <FadeInLeftDiv>
                <div className="hey-content" >
                  <h1 className="mb-0"><strong>Hey, I'm Gizem Deniz</strong></h1>
                  <p className="mt-0"><strong>Front End Developer</strong></p>
                </div>
                <p className="lead about-me-caption">Experienced with <Typed className="strongy"
                  strings={['HTML and CSS', 'JavaScript', 'React ']}
                  typeSpeed={40} backSpeed={30} loop /><br></br></p>
                {/* <p className="lead about-me-caption">Experienced with <Typed className="strongy"
                  strings={['Learning', 'Practicing', 'Self-developing ']}
                  typeSpeed={40} backSpeed={50} loop /><br></br>to be a Front-End Web Developer</p> */}

                <span style={{color: "black"}} className="find-me">Get in touch!</span>
                <ul className="list-unstyled list-social-links">
                  <li className="d-inline-block m-3"><a href="https://github.com/gizemcdeniz/" target="_blank" rel='noreferrer noopener'><i className="fab fa-2x fa-github github"></i></a></li>
                  <li className="d-inline-block m-3"><a href="https://www.linkedin.com/in/gizem-deniz//" target="_blank" rel='noreferrer noopener'><i className="fab fa-2x fa-linkedin linkedin"></i></a></li>
                </ul>
              </FadeInLeftDiv>
            </Col>
            <Col lg={6} md={12}>
              <FadeInRightDiv>
                <img src={AboutPic} alt="" className="wecandoit-img"></img>
              </FadeInRightDiv>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

