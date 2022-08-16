import React from "react";
import "../scss/Main.scss";
import { Navbar, Container, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Shop, Cart } from "react-bootstrap-icons";
import { useCart } from "react-use-cart";

export function Header() {
  const { totalItems } = useCart();

  return (
    <Navbar
      sticky="top"
      variant="light"
      className="py-2"
      bg="primary"
      expand="lg"
    >
      <Container>
        <Link to="/" className="text-decoration-none">
        <Navbar.Brand
          
          className="mx-5 fs-4 fw-bolder text-nowrap text-warning"
        >
          Baiart
        </Navbar.Brand>
        </Link>
       

        {/* <label className="d-flex mx-auto">
            <input
              type="search"
              className="searchbar px-3"
              placeholder="Search..."
            />
            <Button className="btn btn-lg px-4" variant="white">
              <Search />
            </Button>
          </label> */}

        <div className="d-flex float-end text-white ">

          <Link
            to="/shop"
            className=" text-warning text-decoration-none mx-2"
          >
            <Shop className="mx-1 fs-2 text-warning" />{" "}
            <span className="text-warning">Shop</span>
          </Link>

          <Link to="/cart" className=" text-warning text-decoration-none mx-2">
            <Cart className="mx-1 fs-2 text-warning" />
            <span className="text-warning">
              Cart{" "}
              <small>
                <Badge
                  className="text-primary text-decoration-none bg-warning d-inline-flex align-items-start"
                  pill
                >
                  {totalItems}
                </Badge>
              </small>
            </span>
          </Link>
        </div>
      </Container>
    </Navbar>
  );
}