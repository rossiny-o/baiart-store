import React, { useState } from "react";
import "../scss/Main.scss";
import { Header } from "./Header";
import { X, CartXFill, Plus, Trash3 } from "react-bootstrap-icons";
// import { useState } from "react";
import { data } from "../data/data-info";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  Image,
  ButtonGroup,
  Table,
} from "react-bootstrap";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import { Fade } from "react-animation-components";
import { Footer } from "./Footer" ;

export function Cart() {
  const {
    isEmpty,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  const [show, setShow] = useState(false);
  console.log(
    `the total items in the cart is ${totalItems} which is a ${typeof totalItems}`
  );
  console.log("array of items currently in cart: ");
  console.log(items);

  if (isEmpty) {
    return (
      <div>
        <Header />
        <Container className="my-3 p-3">
          <Row>
            <Col>
              <div className="">
                <Fade in delay={100}>
                  <h3 className="font-monaco fw-bolder display-5 text-primary ms-4">
                    Cart ( <small className="fs-2"> {totalItems} </small> )
                  </h3>
                  <hr />
                </Fade>
                <Fade in delay={300}>
                  <div className="cart-with-0 m-5 p-5">
                    <h1 className="display-1 text-secondary fst-italic font-monaco">
                      <CartXFill />
                    </h1>
                    <h1 className="text-secondary fst-italic font-monaco ">
                      Your Cart Is Empty!
                    </h1>
                    <Link to="/shop">
                      <Button
                        className="my-2 px-4 py-2 rounded-pill fs-6  text-nowrap"
                        variant="warning"
                      >
                        Go to Shop
                      </Button>
                    </Link>
                  </div>
                </Fade>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const CheckoutTotal = cartTotal + data.shipPrice;

  return (
    <div>
      <Header />

      <Container className="my-3 p-3">
        <Row>
          <Fade in delay={100}>
            <h3 className="font-monaco fw-bolder display-5 text-primary ms-4">
              Cart ( <small className="fs-2"> {totalItems} </small> )
            </h3>
            <hr />
          </Fade>
        </Row>
        <Fade in delay={300}>
          <Row>
            <Col>
              <Table borderless className="m-2 p-4">
                <tbody className="p-3">
                  {items.map((item, index) => {
                    return (
                      <tr key={index}>
                        {/* item image */}
                        <td>
                          <Button
                            size="lg"
                            variant="none"
                            onClick={() => removeItem(item.id)}
                          >
                            <X color="red" size={30} />
                          </Button>
                        </td>
                        <td className="ps-4">
                          <Image
                            rounded
                            src={item.image}
                            alt={item.name}
                            className="cart-img d-flex float-start "
                          />
                        </td>

                        <td className="d-flex font-monaco text-nowrap text-primary fw-bold fs-4">
                          {item.name}
                        </td>
                        <td className="d-flex">
                          <ButtonGroup className="cart-group-btn">
                            <Button
                              className="text-primary "
                              size="sm"
                              variant="none"
                              onClick={() =>
                                updateItemQuantity(item.id, item.quantity - 1)
                              }
                            >
                              <Trash3 className="fs-4 " />
                            </Button>

                            <div className="cart-qty">
                              <h4 className="p-1 fw-bold font-monaco text-primary fs-4">
                                {item.quantity}
                              </h4>
                            </div>

                            <Button
                              className="text-primary"
                              size="sm"
                              variant="none"
                              onClick={() =>
                                updateItemQuantity(item.id, item.quantity + 1)
                              }
                            >
                              <Plus className="fs-2" />
                            </Button>
                          </ButtonGroup>
                        </td>
                        <td className="d-flex float-center font-monaco fw-bold text-secondary fs-4">
                          $ {item.price}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              <hr />
              <div className="ms-auto m-5 float-end fs-3 fw-bold font-monaco text-secondary">
                <span className="fw-bolder text-primary fst-italic">
                  {" "}
                  $ {cartTotal.toFixed(2)}
                </span>
              </div>

              <Fade in delay={500}>
                <div className=" mt-5 float-start">
                  <Button
                    className="rounded-pill mx-2 px-4"
                    variant="danger"
                    size="md"
                    onClick={() => emptyCart()}
                  >
                    Empty Cart
                  </Button>
                  {}
                  <Button
                    className=" rounded-pill mx-2 px-4"
                    variant="warning"
                    size="md"
                    onClick={handleShow}
                  >
                    Checkout
                  </Button>
                </div>

                <div>
                  <Modal
                    size="lg"
                    show={show}
                    onHide={handleClose}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                  >
                    <Modal.Header closeButton>
                      <Modal.Title className="font-monaco text-primary fw-bold">
                        Check Out
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <>
                        <Container className=" d-flex justify-content-center mb-3 p-3">
                          <div className="">
                            <h4 className="fst-italic font-monaco text-primary">
                              {totalItems} item(s){" "}
                            </h4>

                            <div className="d-inline-flex">
                              <h5 className="fst-italic font-monaco text-primary px-3">
                                ${CheckoutTotal.toFixed(2)}
                              </h5>

                              <h6 className="fst-bold font-monaco">{` = $ ${cartTotal.toFixed(2)} + $ ${
                                data.shipPrice
                              } shipping`}</h6>
                            </div>
                          </div>
                        </Container>
                      </>
                    </Modal.Body>
                    <Modal.Footer className="d-flex float-end">
                      
                      <Button
                        onClick={() => {
                          alert(
                            `You have successfully placed an order! Thank you for shopping at Baiart!  Amount of items: ${totalItems} / Total: $ ${CheckoutTotal.toFixed(
                              2
                            )} !!!`
                          );
                        }}
                        className=" rounded-pill mx-2 px-4"
                        variant="warning"
                      >
                        Place Order
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </Fade>
            </Col>
          </Row>
        </Fade>
      </Container>
      <Footer />
    </div>
  );
}
