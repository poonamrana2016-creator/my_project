import { useState } from 'react';
import './App.css'
import Dashboard from './components/Dashboard';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/auth/Sign-up';
import SignIn from './components/auth/Sign-in';
import Categories from './components/Categories';
import Product from './components/auth/Product';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import About from './components/About';
import Allusers from './components/Allusers';
import { Addproduct } from './components/auth/Addproduct';
import Productlist from './components/auth/Productlist';
import Editproduct from './components/auth/Editproduct';


// This page 'Function App' is the ROOT Page or Parent Page of the Website.
function App() {

  // THis Area between Function App and Return is used of JavaScript Logics Only.
  const [num, setNum] = useState(0);
  const   myMenu = [
    { id: 1, value: "Home", url: "/" },
    { id: 2, value: "Categories", url: "/categories" },
    { id: 3, value: "Get All Users", url: "/get-all-users" },
    { id: 4, value: "Products", url: "/products" },
    { id: 5, value: "Blogs", url: "/blogs" },
    { id: 6, value: "Contact us", url: "/contact-us" },
    {id: 7, value: "About us", url: "/about-us"},
    {id:8, value: "Add Products", url: "/add-products"},
    {id:9, value: 'Get Product List', url: '/product-list'}
  ];

  return (
    <>
      {/* Navbar starts  */}

      <Navbar menu={myMenu} num={num} />
      

      {/*  Navbar Ends */}

      {/* router section */}
      <Routes>
        <Route path='/' element={<Dashboard num={num} setNum={setNum} />} />
        <Route path='/Sign-up' element={<SignUp />} />
        <Route path='/Sign-in' element={<SignIn/>} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/get-all-users' element={<Allusers />} />
        <Route path='/categories/id:/products' element={<Product />} />
        <Route path= '/Contact-us' element={<ContactUs />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/add-products' element={<Addproduct />} />
        <Route path='/product-list' element={<Productlist />} />
        <Route path='/edit-product/:id' element= {<Editproduct />} />
      </Routes>
      {/* router section End */}

     
      {/* footer start */}

      <Footer />

      {/* footer Ends */}
    </>
  )
}

export default App


