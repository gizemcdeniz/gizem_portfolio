import React, { Component } from 'react'
import './style.css'
import Pro1 from './img/image1.png'
import Pro2 from './img/image2.png'
import Pro3 from './img/image2.png'
import Pro4 from './img/image2.png'
// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// Animate
import styled, { keyframes } from 'styled-components';
import FadeInUp from 'react-animations/lib/fade-in-up'

export default class Projects extends Component {
    render() {
        const FadeInUpAnimation = keyframes`${FadeInUp}`;

        const FadeInUpDiv1s = styled.div`
        animation:  1s ${FadeInUpAnimation};
        `;

        const FadeInUpDiv2s = styled.div`
          animation:  2s ${FadeInUpAnimation};
        `;

        return (
            <>
                <Container>
                    <div className="text-center section-caption">
                        <h1 className="section-title pt-5 pb-3">My Projects</h1>
                    </div>
                    <Row>
                        {/* Project 1 */}
                        <Col lg={6} className="mb-3">
                            <FadeInUpDiv1s>
                                <div className="hover hover-5 text-white rounded">
                                    <img  className="project" src={Pro1} alt="project"></img>
                                    <div className="hover-overlay"></div>
                                    <div className="hover-5-content">
                                        <h4 className="hover-5-title text-uppercase text-center text-white text-bold">Movie Project</h4>
                                        <p className="lead porject-cption text-center text-white px-2">Used Javascript, Bootstarp, CSS, Movie API</p>
                                        <a className="project-link text-center" href="https://movieprojectr.netlify.app/" target="_blank" rel='noreferrer noopener'><i className="fas fa-external-link-alt fa-2x text-white"></i></a>
                                    </div>
                                </div>
                            </FadeInUpDiv1s>
                        </Col>
                        {/* Project 2 */}
                        <Col lg={6} className="mb-3">
                            <FadeInUpDiv2s>
                                <div className="hover hover-5 text-white rounded">
                                    <img className="project" src={Pro2} alt="project"></img>
                                    <div className="hover-overlay"></div>
                                    <div className="hover-5-content">
                                        <h4 className="hover-5-title text-uppercase text-center text-white">Mad-Libs</h4>
                                        <p className="lead porject-cption text-center text-white px-2">Small website that allows you to find a Mentor/Mentee with the time that suits you and connect with them really easy.</p>
                                        <a className="project-link text-center" href="https://madlibsrecoded.netlify.app" target="_blank" rel='noreferrer noopener'><i className="fas fa-external-link-alt fa-2x text-white"></i></a>
                                    </div>
                                </div>
                            </FadeInUpDiv2s>
                        </Col>
                        {/* Project 3 */}
                        <Col lg={6} className="mb-3">
                            <FadeInUpDiv2s>
                                <div className="hover hover-5 text-white rounded">
                                    <img className="img-fluid" src={Pro3} alt="project"></img>
                                    <div className="hover-overlay"></div>
                                    <div className="hover-5-content">
                                        <h4 className="hover-5-title text-uppercase text-center text-white">My Portfolio</h4>
                                        <p className="lead porject-cption text-center text-white px-2">Personal portfolio website template. The application is based on React and bootstrap 4+</p>
                                        <a className="project-link text-center"  href="https://madlibsrecoded.netlify.app" target="_blank" rel='noreferrer noopener'><i className="fas fa-external-link-alt fa-2x text-white"></i></a>
                                    </div>
                                </div>
                            </FadeInUpDiv2s>
                        </Col>
                        {/* Project 4 */}
                        <Col lg={6} className="mb-3">
                            <FadeInUpDiv2s>
                                <div className="hover hover-5 text-white rounded">
                                    <img className="img-fluid" src={Pro4} alt="project"></img>
                                    <div className="hover-overlay"></div>
                                    <div className="hover-5-content">
                                        <h4 className="hover-5-title text-uppercase text-center text-white">ToDo App with ReactJS</h4>
                                        <p className="lead porject-cption text-center text-white px-2">This is an open source ToDo app using ReactJS with Bootstarp for styling and Context Api for state management. Beginners friendly.</p>
                                        <a className="project-link text-center"  href="https://madlibsrecoded.netlify.app" target="_blank" rel='noreferrer noopener'><i className="fas fa-external-link-alt fa-2x text-white"></i></a>
                                    </div>
                                </div>
                            </FadeInUpDiv2s>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
