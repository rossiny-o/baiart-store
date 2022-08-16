import React, { useState } from "react";
import { Col, Row, Container, Carousel } from "react-bootstrap";
import { Header } from "./Header";
import { data } from "../data/data-info";
import "../scss/Main.scss";
import { Youtube, Instagram } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import {
  Fade,
  FadeTransform,
  
} from "react-animation-components";
// import {svgImg } from '//images/009-Painter.svg';


export default function Home() {
  const svgImg = "images/009-Painter.svg";



  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const { products } = data;

  const carouselImg = products.filter((img) => {
    return img.id <= 3 || img.id >= 10;
  });

  console.log(carouselImg);
  return (
    <div>
      <Header />
      <Fade in delay={100}>
        <Container>
          <Row>
            <img className="svg-style" src={svgImg} alt="svgimage" />
          </Row>
        </Container>
      </Fade>

      <Container
        fluid
        className="d-flex align-items-center justify-content-center pb-5 mb-5"
      >
        
          <Row>
            <Fade in delay={200}>
            <h3 className="font-monaco fw-bold display-4 font-monaco text-primary d-flex justify-content-center">
              Welcome to
              <i className="ms-2 text-warning fw-bolder display-4 font-monaco">
                {" "}
                Baiart
              </i>
            </h3>
            </Fade>

            <Fade in delay={250}>
            <h3 className="d-flex justify-content-center text-secondary fst-italic">
              where you can sell thy art
            </h3>
            </Fade>
          </Row>
        
      </Container>

      <Container>
        <Row className=" m-4 d-flex justify-content-center">
          <Col md={7} className="">
           <Fade in delay={400}>
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              variant="dark"
              touch
              fade
            >
              {carouselImg.map((product) => {
                return (
                  <Carousel.Item
                    className="d-flex justify-content-center"
                    interval={3000}
                  >
                    <img
                      className="d-block w-65 p-2 mb-5 bg-warning"
                      src={product.image}
                      alt="carousel-img"
                      width={300}
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
            </Fade>
            
          </Col>

          <Col md={5} className="d-grid my-4">
            <FadeTransform
              in
              transformProps={{
                exitTransform: "scale(0.5) translateY(50%)",
              }}
              delay={500}
            >
              <h4 className="font-monaco fw-bolder text-primary mb-2 ">
                Our artist (s){" "}
              </h4>

              <div className="ms-3 d-flex justify-content-start px-2 ">
                <a
                  className="text-warning"
                  href="https://www.youtube.com/channel/UCzUihKvJgVlxMaBIYI3laWA"
                  target="_blank"
                  rel="noopener noreferrer "
                >
                  <Youtube size={30} />
                </a>

                <a
                  className="text-warning"
                  href="https://instagram.com/thatonecapartist?igshid=YmMyMTA2M2Y="
                  target="_blank"
                  rel="noopener noreferrer "
                >
                  <Instagram className="p-1" size={30} />
                </a>
              </div>
              <div className="ms-3  px-2">
                <h6 className="fs-6 fst-italic text-secondary">
                  {data.artistName}{" "}
                </h6>
              </div>
            </FadeTransform>

            <div className="d-grid my-4">
              <FadeTransform
                in
                transformProps={{
                  exitTransform: "scale(0.5) translateY(50%)",
                }}
                delay={600}
              >
                <div>
                  <h4 className="font-monaco fw-bolder text-primary mb-2">
                    Love what you see?
                  </h4>
                  <h6 className="ms-3 px-2 fs-6 fst-italic text-secondary">
                    Visit our{" "}
                    <Link to="/shop" className=" text-warning  mx-1">
                      <span>shop</span>
                    </Link>{" "}
                    for more art pieces!
                  </h6>
                </div>
              </FadeTransform>

              <FadeTransform
                in
                transformProps={{
                  exitTransform: "scale(0.5) translateY(50%)",
                }}
                delay={700}
              >
                <div className="d-grid my-4">
                  <h4 className="font-monaco fw-bolder text-primary mb-2">
                    About us
                  </h4>
                  <h6 className="ms-3 px-2 fs-6 fst-italic text-secondary">
                    Dummy Text: Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor.Convallis aenean et
                    tortor at risus viverra adipiscing.
                  </h6>
                </div>
              </FadeTransform>
            </div>
          </Col>
        </Row>
      </Container>
      {/* Add big Carousel of the images of all products
        add 
        */}
    </div>
  );
}