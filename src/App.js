import React from 'react';
import './App.css';
import Nav from './Component/Nav/Nav';
import { Routes, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Products from './Component/Products/Products';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './Component/redux/store';
import AddProduct  from './Component/AddProduct/AddProduct';
import ProductDetail from './Component/productDetail/ProductDetail';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Nav />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product" element={<Products />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/cart" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} /> 
          </Routes>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
