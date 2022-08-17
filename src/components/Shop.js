import React from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { data } from "../data/data-info";
import { Header } from "./Header";
import ItemCard from "./ItemCard";
import { Fade} from "react-animation-components";
import { Footer } from "./Footer" ;


export default function Shop() {
  const { products } = data;

  return (
    <div>
      <Header />

      <Container className="p-4">
        <Row>
          <Col>
          <Fade in>
            <h3 className="font-monaco fw-bolder display-5 text-primary ms-4">
              Shop
            </h3>
            <hr />

          </Fade>
            <Container>
            
                <Row>
                <Fade in delay={200}>
                  <Stack
                    direction="horizontal"
                    className="d-flex flex-wrap justify-content-evenly"
                  >
                    
                    {products.map((product) => {
                      return (
                        
                          <Link
                            className="text-decoration-none"
                            to={`/shop/${product.name_id}`}
                            key={product.id}
                          >
                            <ItemCard product={product} key={product.id} />
                          </Link>
                      
                      );
                    })}
                   
                  </Stack>
                  </Fade>
                </Row>
             
           
            </Container>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}