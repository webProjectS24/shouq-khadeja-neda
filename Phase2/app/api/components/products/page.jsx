import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';

export default function ProductsPage() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from your API
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data); 
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product, quantity) => {
    setCart([...cart, { ...product, quantity }]);
  };

  const handleCheckout = async () => {
    try {
      const transactionPromises = cart.map(async (item) => {
        const { id, name, price, quantity } = item;
        const totalPrice = price * quantity;
        await prisma.transaction.create({
          data: {
            productId: id,
            productName: name,
            price,
            quantity,
            totalPrice,
          },
        });
      });

      await Promise.all(transactionPromises);

      setCart([]);
    } catch (error) {
      console.error('Error processing checkout:', error);
    }
  };

  return (
    <div>
      <Head>
        <title>Products</title>
        <meta name="description" content="Browse and purchase products" />
      </Head>

      <h1>Products</h1>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div>{product.name}</div>
            <div>${product.price}</div>
            <input
              type="number"
              min="1"
              defaultValue="1"
              onChange={(e) => {
                const quantity = parseInt(e.target.value, 10);
                if (!isNaN(quantity)) {
                  handleAddToCart(product, quantity);
                }
              }}
            />
            <button onClick={() => handleAddToCart(product, 1)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      <div>
        <h2>Cart</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
}