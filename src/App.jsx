import { useState } from 'react';
import Navbar from './Components/Header/Navbar';
import Banner from './Components/Header/Banner';
import AllProducts from './Components/AllProducts/AllProducts';
import AvailableCountainer from './Components/AvailableContainer/AvailableContainer';

function App() {
  const [isActive, setIsActive] = useState({});
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [price, setPrice] = useState(500);

  const handleIncreasePrice = (pr) => {
    setPrice(price + pr);
  };

  const handleDeletePrice = (id) => {
    const product = selectedProducts.find((p) => p.id === id);
    if (product) {
      setPrice(price - product.price);
    }
  };

  const handleDelete = (id) => {
    handleDeletePrice(id);
    const newProduct = selectedProducts.filter((p) => p.id !== id);
    setSelectedProducts(newProduct);
  };

  const handleSelectedProduct = (product) => {
    const isExist = selectedProducts.find((p) => p.id === product.id);

    if (isExist) {
      alert("Product already exists");
    } else {
      handleIncreasePrice(product.price);
      const newProducts = [...selectedProducts, product];
      setSelectedProducts(newProducts); // Updated line
    }
  };

  const handleIsActiveState = (status) => {
    setIsActive(status);
  };

  return (
    <>
      <Navbar price={price} selectedProducts={selectedProducts.length}></Navbar>
      <Banner />
      <div className="flex max-w-screen-2xl mx-auto">
        <AllProducts handleSelectedProduct={handleSelectedProduct}></AllProducts>
        <AvailableCountainer
          handleDelete={handleDelete}
          handleSelectedProduct={handleSelectedProduct}
          isActive={isActive}
          handleIsActiveState={handleIsActiveState}
        ></AvailableCountainer>
      </div>
    </>
  );
}

export default App;
