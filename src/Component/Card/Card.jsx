import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct, deleteProduct } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';
import { Button, Heading, Input } from '@chakra-ui/react';
import "./Card.css";
import { useNavigate } from 'react-router-dom';

export default function Card({ id, image, title, price, rating }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedPrice, setEditedPrice] = useState(price);
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const handleAddToCart = () => {
    const product = {
      id,
      image,
      title,
      price,
      rating
    };
    alert("Product added to cart successfully")
    dispatch(addToCart(product));
  };

  const handleUpdate = () => {
    dispatch(updateProduct({ id, title: editedTitle, price: editedPrice, image, rating }));
    setIsEditing(false);
  };

  const handleDelete = () => {
    dispatch(deleteProduct(id));
  };

  const handleDetails = () => {
    navigate(`/product/${id}`);
  };


  return (
    <div className='cardContainer'>
      <img src={image} width="250px" height={250} />
      {isEditing ? (
        <>
          <Input value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
          <Input value={editedPrice} onChange={(e) => setEditedPrice(e.target.value)} />
          <Button onClick={handleUpdate}>Save</Button>
        </>
      ) : (
        <>
          <Heading size="md">{title}</Heading>
          <p>$ {price}</p>
          <h4>* {rating}</h4>
          <Button onClick={() => setIsEditing(true)}>✏️</Button>
        </>
      )}
      <Button variant={'outline'} onClick={handleDetails}>Details</Button>
      <Button onClick={handleAddToCart}>Add Cart</Button>
      <Button onClick={handleDelete}>🗑️</Button>
    </div>
  );
}
