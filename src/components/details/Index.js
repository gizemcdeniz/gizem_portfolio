import React from "react";
import { useTranslation } from "react-i18next";
import "./style.css";
import formImg from "./Img/gizemd.jpg";
// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Typed from 'react-typed';
// Animate
import styled, { keyframes } from "styled-components";
import FadeInLeft from "react-animations/lib/fade-in-left";
import FadeInRight from "react-animations/lib/fade-in-right";

const Details = () => {
  const FadeInLeftAnimation = keyframes`${FadeInLeft}`;
  const FadeInLeftDiv = styled.div`
    animation: 2s ${FadeInLeftAnimation};
  `;

  const FadeInRightAnimation = keyframes`${FadeInRight}`;
  const FadeInRightDiv = styled.div`
    animation: 2s ${FadeInRightAnimation};
  `;
  const { t } = useTranslation();
  return (
    <>
      <Container className="detailsContainer">
        <div className="text-center section-caption">
          <h1 className="section-title pt-5 pb-3">{t("details.head")}</h1>
        </div>
        <Row className="flex-column-reverse flex-lg-row my-5">
          <Col md={6}>
            <FadeInLeftDiv>
              <div className="hey-content">
                <h1 className="mb-0">{t("about.title0")}</h1>
              </div>
              {/* <p className="lead about-me-caption">I have changed my career goals from tourism to become a front-end developer. 
                I am really excited to bring the applications that I will create with my fingers to users from other parts of the world. One of the most important turning points of my life was when I got accepted in the Front-End Web Development Bootcamp by Re:Coded I have shifted my career goals from teaching English to become a developer. One of the most important turning points of my life was when I got accepted in the Front-End Web Development Bootcamp by <a href="https://www.re-coded.com/" target="_blank" rel='noreferrer noopener'>Re:Coded</a> and <a href="https://flatironschool.com/" target="_blank" rel='noreferrer noopener'>Flatiron school</a>. I honed my skills in front-end web development as well as in soft skills during the bootcamp. Now, I'm focusing on practicing, improving and going deeper into the techniques that he learned.</p> */}
              <p> {t("details.title0")} </p>
              <ul>
                <li>{t("details.li0")} </li>
                <li>{t("details.li1")}</li>
                <li>{t("details.li2")}</li>
                <li>{t("details.li3")}</li>
                <li>{t("details.li4")}</li>
              </ul>
              <div className="hey-content">
                <h1 className="mb-0">{t("details.title1")}</h1>
              </div>
              <p>
                {" "}
                <li>{t("details.education0")} </li>
                <li>{t("details.education1")}</li>
                <li>{t("details.education2")}</li>
                <li>{t("details.education3")}</li>
              </p>
              <div className="hey-content">
                <h1 className="mb-0">{t("details.title2")}</h1>
              </div>
              <Row className="iconsDetails">
                <Col>
                  <i class="fab fa-4x fa-js-square"></i>
                </Col>
                <Col>
                  <i class="fab fa-4x fa-css3-alt"></i>
                </Col>
                <Col>
                  <i class="fab fa-4x  fa-react"></i>
                </Col>
              </Row>
              <div className="hey-content">
                <h1 className="mb-0">{t("details.title3")}</h1>
              </div>
              {/* <p className="lead about-me-caption">I have changed my career goals from tourism to become a front-end developer. 
                I am really excited to bring the applications that I will create with my fingers to users from other parts of the world. One of the most important turning points of my life was when I got accepted in the Front-End Web Development Bootcamp by Re:Coded I have shifted my career goals from teaching English to become a developer. One of the most important turning points of my life was when I got accepted in the Front-End Web Development Bootcamp by <a href="https://www.re-coded.com/" target="_blank" rel='noreferrer noopener'>Re:Coded</a> and <a href="https://flatironschool.com/" target="_blank" rel='noreferrer noopener'>Flatiron school</a>. I honed my skills in front-end web development as well as in soft skills during the bootcamp. Now, I'm focusing on practicing, improving and going deeper into the techniques that he learned.</p> */}
              <p>{t("details.goals0")}</p>
            </FadeInLeftDiv>
          </Col>
          <Col md={6}>
            <FadeInRightDiv>
              <img
                id="gizemImage"
                src={formImg}
                alt=""
                className="img-fluid m-auto d-block"
              ></img>
            </FadeInRightDiv>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Details;
