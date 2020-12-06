import React from "react";
import { useTranslation } from "react-i18next";
import "./style.css";
// import formImg from './Img/form-img.png'
import formImg from "./Img/email.jpg";
// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// Animate
import styled, { keyframes } from "styled-components";
import FadeInLeft from "react-animations/lib/fade-in-left";
import FadeInRight from "react-animations/lib/fade-in-right";

const Contact = () => {
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
      <Container>
        <div className="text-center section-caption">
          <h1 className="section-title pt-5 pb-3">{t("about.title2")}</h1>
          <p className="lead w-75 m-auto pb-4 section-p">
            {t("contact.title1")}
          </p>
        </div>
        <Row className="flex-column-reverse flex-lg-row my-5">
          <Col md={6}>
            <FadeInLeftDiv>
              <Col md={6}>
                <span
                  style={{ color: "black", fontSize: "2em" }}
                  className="find-me"
                >
                  {t("contact.title2")}
                </span>
                <ul className="list-unstyled list-social-links">
                  <li className="d-inline-block m-3">
                    <a
                      href="https://github.com/gizemcdeniz/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <i className="fab fa-3x fa-github github"></i>
                    </a>
                  </li>
                  <li className="d-inline-block m-3">
                    <a
                      href="https://www.linkedin.com/in/gizem-deniz/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <i className="fab fa-3x fa-linkedin linkedin"></i>
                    </a>
                  </li>
                  <li className="d-inline-block m-3">
                    <a
                      href="https://medium.com/@gizemc.deniz"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <i className="fab fa-3x fa-medium medium"></i>
                    </a>
                  </li>
                </ul>
              </Col>
            </FadeInLeftDiv>
          </Col>
          <Col md={6}>
            <a
              style={{
                fontSize: "1.5em",
                color: "black",
                borderRadius: "1em",
                margin: "2em",
              }}
              id="mailto"
              className="m-auto d-flex justify-content-center"
              href="mailto:gizemde.deniz@gmail.com"
            >
              {t("contact.title3")}
            </a>
            <FadeInRightDiv>
              <img
                style={{ padding: "2em" }}
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
export default Contact;
