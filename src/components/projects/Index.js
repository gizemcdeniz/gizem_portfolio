import React, { Component } from 'react'
import './style.css'
import Pro1 from './img/image1.png'
import Pro2 from './img/image2.png'
import Pro3 from './img/image3.png'
import Pro4 from './img/image4.png'
import Pro5 from './img/image5.png'
import Pro6 from './img/image6.png'
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
                            <FadeInUpDiv2s>
                                <div className="hover hover-5 text-white rounded">
                                    <img className="img-fluid" src={Pro5} alt="project"></img>
                                    <div className="hover-overlay"></div>
                                    <div className="hover-5-content">
                                        <h4 className="hover-5-title text-uppercase text-center text-white">Capstone Project</h4>
                                        <p className="lead porject-cption text-center text-white px-2">Capstone Project creating by React.Using Ant Desing, Cloud Firestore, i18Next, Wordpres API</p>
                                        <a className="project-link text-center"  href="https://feed-the-needy.netlify.app/" target="_blank" rel='noreferrer noopener'><i className="fas fa-external-link-alt fa-2x text-white"></i></a>
                                    </div>
                                </div>
                            </FadeInUpDiv2s>
                        </Col>
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
                                    <img className="img-fluid" src={Pro3} alt="project"></img>
                                    <div className="hover-overlay"></div>
                                    <div className="hover-5-content">
                                        <h4 className="hover-5-title text-uppercase text-center text-white">My Portfolio</h4>
                                        <p className="lead porject-cption text-center text-white px-2">Personal portfolio website template. The application is based on React and bootstrap 4+</p>
                                        <a className="project-link text-center"  href="https://gizemportfolio.netlify.app/" target="_blank" rel='noreferrer noopener'><i className="fas fa-external-link-alt fa-2x text-white"></i></a>
                                    </div>
                                </div>
                            </FadeInUpDiv2s>
                        </Col>
                         {/* Project 3 */}
                        <Col lg={6} className="mb-3">
                            <FadeInUpDiv2s>
                                <div className="hover hover-5 text-white rounded">
                                    <img className="project" src={Pro2} alt="project"></img>
                                    <div className="hover-overlay"></div>
                                    <div className="hover-5-content">
                                        <h4 className="hover-5-title text-uppercase text-center text-white">Mad-Libs</h4>
                                        <p className="lead porject-cption text-center text-white px-2">Small website creating by JavaScript and CSS</p>
                                        <a className="project-link text-center" href="https://madlibsrecoded.netlify.app" target="_blank" rel='noreferrer noopener'><i className="fas fa-external-link-alt fa-2x text-white"></i></a>
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
                                        <h4 className="hover-5-title text-uppercase text-center text-white">ToDo App</h4>
                                        <p className="lead porject-cption text-center text-white px-2">Small to-do app creating by React.</p>
                                        <a className="project-link text-center"  href="https://github.com/gizemcdeniz/todoapp" target="_blank" rel='noreferrer noopener'><i className="fas fa-external-link-alt fa-2x text-white"></i></a>
                                    </div>
                                </div>
                            </FadeInUpDiv2s>
                        </Col>
                        <Col lg={6} className="mb-3">
                            <FadeInUpDiv2s>
                                <div className="hover hover-5 text-white rounded">
                                    <img className="img-fluid" src={Pro6} alt="project"></img>
                                    <div className="hover-overlay"></div>
                                    <div className="hover-5-content">
                                        <h4 className="hover-5-title text-uppercase text-center text-white">Traveller Checklist</h4>
                                        <p className="lead porject-cption text-center text-white px-2">Using Bootstrap, Cloud Firestore</p>
                                        <a className="project-link text-center"  href="https://github.com/gizemcdeniz/traveller-check-list" target="_blank" rel='noreferrer noopener'><i className="fas fa-external-link-alt fa-2x text-white"></i></a>
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
