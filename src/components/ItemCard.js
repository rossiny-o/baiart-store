import React from 'react';
import {Card} from "react-bootstrap";



export default function ItemCard (props) {
    const { product } = props;

  
    return (
      <Card
      style={{ width: "15rem" }}
      className="m-2 p-3 border-0 border-bottom rounded-2 shadow"
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
          <Card.Subtitle className="text-muted fst-italic">
           <small> by {product.artist_name}</small>
          </Card.Subtitle>

          <Card.Text className="fs-5 fw-bold fst-italic text-muted">
            $ {product.price}
          </Card.Text>

          <div>
            <Card.Text className='text-muted'><small>Click for more info...</small></Card.Text>
          </div>
        </div>
      </Card.Body>
    </Card>
    );
  }