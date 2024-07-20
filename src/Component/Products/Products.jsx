
import Card from '../Card/Card';
import "./Product.css";
import React, { useEffect, useState } from 'react';


export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProducts(json);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='productsContainer'>
      <div className='productsLeftPanel'>
      </div>
      <div className='productsRightPanel'>
        {loading ? (
          <p>Loading products...</p>
        ) : (
          products.map((product) => (
            <Card
              key={product.id}
              image={product.image}
              title={product.title.slice(0, 15)}
              price={product.price}
              rating={product.rating.rate}
            />
          ))
        )}
      </div>
    </div>
  );
}