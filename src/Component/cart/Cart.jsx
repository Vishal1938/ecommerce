import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Heading, Button, VStack, Text } from '@chakra-ui/react';
import { getCartItems } from '../redux/actions/cartActions';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    fetch('https://fakestoreapi.com/carts')
      .then(res => res.json())
      .then(json => {
        // For simplicity, we're using the first cart's products
        const cartProducts = json[0]?.products.map(product => ({
          id: product.productId,
          quantity: product.quantity
        })) || [];
        dispatch(getCartItems(cartProducts));
        alert('Product Added to the cart successfully!');
      })
      .catch(error => console.error('Error fetching cart items:', error));
  }, [dispatch]);

  return (
    <Box p={4}>
      <Heading as="h2" size="xl" textAlign="center" mb={6}>Cart</Heading>
      <VStack spacing={4}>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <Box key={item.id} p={4} borderWidth={1} borderRadius="md" width="100%">
              <Text>Product ID: {item.id}</Text>
              <Text>Quantity: {item.quantity}</Text>
              <Button colorScheme="red" onClick={() => dispatch(removeFromCart(item.id))}>Remove</Button>
            </Box>
          ))
        ) : (
          <Text>No items in cart</Text>
        )}
      </VStack>
    </Box>
  );
};

export default Cart;
