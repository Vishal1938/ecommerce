import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Input, FormLabel, Box, useToast, VStack, Heading, FormControl } from '@chakra-ui/react';
import './AddProduct.css'; // Import custom CSS

export default function AddProduct() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://fakestoreapi.com/products', {
      method: "POST",
      body: JSON.stringify({
        title,
        price,
        description,
        image,
        category
      })
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        toast({
          title: "Product added.",
          description: `Product with id ${json.id} has been added.`,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        // Optionally, you can dispatch an action to update the product list
        dispatch({ type: 'ADD_PRODUCT', payload: json });
      })
      .catch(error => {
        console.error('Error adding product:', error);
        toast({
          title: "Error adding product.",
          description: "There was an error adding the product.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  return (
    <Box p={4} margin='30px' maxWidth="600px" height='500px' mx="auto" className="formContainer">
      <Heading as="h2" size="xl" textAlign="center" mb={6}>Add New Product</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="title">
            <FormLabel>Title</FormLabel>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} size="lg" className="customInput" />
          </FormControl>

          <FormControl id="price">
            <FormLabel>Price</FormLabel>
            <Input type="number" value={price} onChange={(e) => setPrice(e.target.value)} size="lg" className="customInput" />
          </FormControl>

          <FormControl id="description">
            <FormLabel>Description</FormLabel>
            <Input value={description} onChange={(e) => setDescription(e.target.value)} size="lg" className="customInput" />
          </FormControl>

          <FormControl id="image">
            <FormLabel>Image URL</FormLabel>
            <Input value={image} onChange={(e) => setImage(e.target.value)} size="lg" className="customInput" />
          </FormControl>

          <FormControl id="category">
            <FormLabel>Category</FormLabel>
            <Input value={category} onChange={(e) => setCategory(e.target.value)} size="lg" className="customInput" />
          </FormControl>

          <Button mt={4} colorScheme="teal" type="submit" width="full" onClick={handleSubmit}>Add Product</Button>
        </VStack>
      </form>
    </Box>
  );
}
