import React from 'react';
import {Card} from "react-bootstrap";



export default function ItemCard (props) {
    const { product } = props;

  
    return (
      <Card
      style={{ width: "15rem" }}
      className="card-style m-3 p-4 border-0 border-bottom rounded-2 shadow"
    >
      <img
        className=" mx-auto img-thumbnail bg-warning p-2 border-0 border-bottom rounded rounded-3  shadow"
        variant="top"
        src={product.image}
        alt={product.name}
        width={180}
      />
      <Card.Body>
        {/* <div className=" heart-icon float-end"><SuitHeartFill className="text-danger" size={30} /></div> */}

        <div className="font-monaco text-center text-nowrap`">
          <Card.Title className="pt-2 fs-4 text-primary fw-bolder">
            {product.name}
          </Card.Title>
          <Card.Subtitle className="fs-6 text-muted fst-italic">
            by {product.artist_name}
          </Card.Subtitle>

          <Card.Text className="fs-5 fw-bold fst-italic text-muted">
            $ {product.price}
          </Card.Text>

          <div>

          </div>
        </div>
      </Card.Body>
    </Card>
    );
  }