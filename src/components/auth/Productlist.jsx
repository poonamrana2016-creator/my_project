
// program to display all the product images list from database to UI 


import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { data, Link } from 'react-router-dom';

const Productlist = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function getProducts() {
            const { data } = await axios.get(`${import.meta.env.PRODUCTION_URL}/product/get-product`,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });

            setProducts(data);
        }
        getProducts();
    }, []);

    console.log(products.products);
    if (products.length == 0) {
        return (
            <h1>loading...</h1>
        )
    }

    // map method to display product image

    return (
        <>

            <div className="container-fluid  min-vh-100">
                <div className="row  px-5 py-5">
                    {
                        products.products.map((item, index) => (
                            // const imagePath = products.PImage?.replace(/\\/g, '/');

                            <div className="col-lg-3 py-2 ">
                                <div className="card p-3 ">
                                    <img src={`http://localhost:9000/${item?.PImage.replace(/\\/g, '/')}`} alt='dummy ' />
                                    <h3 className='text-center'>dummy</h3>

                                    <div className="mb-1">
                                        <Link to={`/edit-product/${item._id}`}>
                                            <button className='btn bg-primary w-100' type='submit ' > Edit </button>
                                        </Link>
                                    </div>
                                    <div className="mb-2">
                                        <Link to={`/delete-product/${item._id}`} >
                                            <button className='btn bg-danger w-100 ' type='submit ' > Delete </button>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>

        </>
    )
}

export default Productlist