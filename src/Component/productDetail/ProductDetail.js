import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading, Image, Text, Spinner } from '@chakra-ui/react';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(json => {
        setProduct(json);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <Box p={4}>
      <Image src={product.image} alt={product.title} boxSize="300px" />
      <Heading>{product.title}</Heading>
      <Text fontSize="2xl">${product.price}</Text>
      <Text>{product.description}</Text>
      <Text>Category: {product.category}</Text>
      <Text>Rating: {product.rating && product.rating.rate}</Text>
    </Box>
  );
}
