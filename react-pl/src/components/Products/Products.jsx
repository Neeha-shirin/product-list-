import React, { useState } from 'react';
import { skinData } from './product.data';
import { Card, Button } from 'react-bootstrap';

const Products = () => {
  const [items, setItems] = useState(skinData);

  const decQty = (id)  => {   
    const newItem = items.map((item)=>
      item.id==id && item.qty>1?{...item, qty:item.qty-1}:item
    );
    setItems(newItem);
  };

  const incQty = (id)  => {    
    const newItem = items.map((item)=>
      item.id==id?{...item, qty:item.qty+1}:item
    );
    setItems(newItem);
  };

  return (
    <div>
      <h1 className="bg-info text-danger" style={{ marginTop: '-80px' }}>
        Products
      </h1>
      
      {items.map((item) => (
        <div className='d-inline-flex' key={item.id}>
        <Card key={item.id} style={{ width: '18rem', margin: '10px' }}>
          <Card.Img variant="top" src={item.image} />

          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <h5>Price: ₹{item.price}</h5>
            <div>
              <p>
                Qty:
                <Button onClick={()=>decQty(item.id)} variant="primary" className="mx-2">-</Button>
                {item.qty}
                <Button onClick={()=>incQty(item.id)} variant="primary" className="mx-2">+</Button>
              </p>
            </div>
            <Button variant="primary">Add to cart</Button>
          </Card.Body>
        </Card>
        </div>  
      ))}
    </div>
  );
};

export default Products;
