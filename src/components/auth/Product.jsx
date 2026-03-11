import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { deletedProduct, getAllProduct } from '../../slice/product-slice';
import { useDispatch, useSelector } from 'react-redux';

const Product = () => {
    const [products, setProducts] = useState([]);
    const { id } = useParams();
    const dispatch = useDispatch();
    const productsStore = useSelector((state) => state.Product);

    useEffect(() => {
        dispatch(getAllProduct(id));
    }, []);
    useEffect(() => {
        setProducts(productsStore.items);
    }, [productsStore.items, length]);

    const deleteProduct = async (pId) => {
        try {
            await dispatch(deletedProduct(pId));
            if (productsStore.status === 200) {
                window.location.reload();
            }
        } catch (error) {
            alert("Something went wrong");
        }
    }


    if (products.length === 0) {
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
            <div className='container py-5'>
                <div className="row py-1">

                    <div className="col-12">
                        <div className="row mb-2">
                            <div className="col-lg-6">
                                <h1>All Products List</h1>
                            </div>
                            <div className="col-lg-6 text-end mt-2">
                                <Link to={`/services/${id}`} >
                                    <button className='btn btn-outline-primary'>Add More Products</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {
                        products.map((item, index) => (
                            <div className="col-lg-4 mb-4" key={index}>
                                <div className="card">
                                    <img src={item.images[0]} alt='image' />
                                    <h2>{item.title.slice(0, 32)}...</h2>
                                    <p>{item.description.slice(0, 45)}...</p>
                                    <h5>Price: ${item.price}</h5>
                                    <button className='btn btn-outline-danger' onClick={() => deleteProduct(item.id)}> Deleted Product </button>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Product