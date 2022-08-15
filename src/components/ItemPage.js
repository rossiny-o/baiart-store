import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Carousel,
  Popover,
  OverlayTrigger,
} from "react-bootstrap";
import { ArrowLeft, Check } from "react-bootstrap-icons";
import { Header } from "./Header";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { Fade } from "react-animation-components";

export function quantityAmounts(min, max) {
  let qty = [];
  for (let i = min; i <= max; i++) {
    qty.push(i);
  }
  return qty;
}

export function ItemPage(props) {
  // this code below start the page scroll from the top
  useEffect(() => window.scroll(0, 0), []);

  // props
  const { product } = props;

  // exp

  const select = document.getElementById("qtySelect");
  console.log(select);

  // for quantity list
  const qty = quantityAmounts(1, 20);
  console.log("list of numbers: " + qty);

  const [quantity, setQuantity] = useState(1);
  const test = (event) => {
    setQuantity(event.target.value);
    return quantity;
  };
  console.log(
    ` this the type of the quantity: (${typeof quantity}) with its value: (${quantity}) .`
  );
  const itemQty = parseInt(quantity);
  console.log(
    `this the type of itemQty : (${typeof itemQty}) with its value: (${itemQty}). `
  );

  // for carousel
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  // for adding item
  const { addItem } = useCart();
  // for add to cart button
  const cartButton = () => {
    addItem(product, itemQty);
  };

  return (
    <div>

      <Header />

      <Container className="mt-5">
        <Row>
          <Link to="/shop" className="text-primary text-decoration-none d-flex">
            <ArrowLeft className="mx-2" />
            <h6>Back</h6>
          </Link>
        </Row>
        <Row>
          <Col md={7} className="m-4 px-2 d-flex align-items-center">
            <Carousel
              className=""
              activeIndex={index}
              onSelect={handleSelect}
              variant="dark"
              fade
            >
              <Carousel.Item className="d-flex justify-content-center">
                <img
                  className="bg-warning p-2"
                  src={product.image}
                  width={400}
                  alt="Art1"
                />
              </Carousel.Item>

              <Carousel.Item className="d-flex justify-content-center">
                <img
                  className="bg-warning p-2"
                  src={product.image2}
                  alt="Art2"
                  width={400}
                />
              </Carousel.Item>
            </Carousel>
          </Col>

          <Col className="m-4 px-2">
            <Fade in>
              <h3 className="text-primary font-monaco fw-bolder display-4 mt-3 ">
                {product.name}
              </h3>

              <h6 className="text-muted text-nowrap fst-italic ">
                by {product.artist_name}
              </h6>
              <h3 className=" d-flex font-monaco fw-bold text-primary ">
                $ {product.price}
              </h3>
              <h6 className="text-start text-secondary fs-6">
                Dummy Text - {product.description}
              </h6>

              <div className="py-1">
                <label className="d-flex font-monaco text-primary  float-start mx-3 mt-2">
                  <h5 className="pe-3 fw-bold">Qty: </h5>
                  <select
                    className="border-none fs-5"
                    value={itemQty}
                    id="qtySelect"
                    onChange={test}
                  >
                    {qty.map((num, index) => {
                      return (
                        <option id="options" key={index} value={num}>
                          {num}
                        </option>
                      );
                    })}
                  </select>
                </label>
              </div>

              <div className="my-2 d-flex justify-content-end">
                <OverlayTrigger
                  trigger="click"
                  placement="left"
                  delay={2000}
                  overlay={
                    <Popover id="popover-basic">
                      <Popover.Body className="border-none text-success fw-bold">
                        <Check /> Added To Cart!
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <Button
                    className="ms-1 px-4 py-2 rounded-pill fs-6 text-nowrap"
                    size="md"
                    variant="warning"
                    id={product.id}
                    onClick={cartButton}
                  >
                    Add To Cart
                  </Button>
                </OverlayTrigger>

                {/* add to cart takes the product item and the value of its quantity field multiplied by the price and adds it to cart page  */}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
