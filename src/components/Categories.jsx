import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeProvider';
import { getAllCategory } from '../slice/category-slice';
import { useDispatch, useSelector } from 'react-redux';

// npm i axiom to install axiom
//  "RAFCE" to inherit the below code by default by this current component.
const Categories = () => {
    const [category, setCategory] = useState([]);
    const { theme } = useContext(ThemeContext);
    const dispatch = useDispatch();
    const categoryStore = useSelector((state) => state.category);
    console.log(categoryStore);
    // making api call
    useEffect(() => {
        dispatch(getAllCategory());
    }, []);
    useEffect(() => {
        setCategory(categoryStore.items);
    }, [categoryStore.items.length]);


    if (category.length === 0) {
        return (
            <div className="container py-5">
                <div className="row py-5">
                    <div class="d-flex justify-content-center">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

    return (
        <>
            <div className={`container py-5 ${theme === "dark" ? "bg-dark" : ""}`}>
                <div className="row py-4">
                    {
                        category.slice(1, 5).map((item, index) => (
                            <div className="col-lg-4 mb-5" key={index}>
                                <div className="card">
                                    <img src={item.image} alt='image' />
                                    <h3 className='p-2 text-center'>{item.name}</h3>
                                    <Link to={`/products/${item.id}`}>
                                        <button className='btn btn-outline-success w-100'>Explore More</button>
                                    </Link>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </>
    )
}

export default Categories
//  npm i axios install.