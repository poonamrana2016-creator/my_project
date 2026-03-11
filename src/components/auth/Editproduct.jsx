import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Editproduct = () => {

    const { id } = useParams();

    const [product, setProduct] = useState({
        PName: '',
        PCategory: '',
        PImage: '',
        PDescription: '',
        PPrice: '',
    });

    const [preview, setPreview] = useState("");
    useEffect(() => {
        async function getSingleProduct() {
            try {
                const { data } = await axios.get(`http://localhost:9000/product/get-product/${id}`);
                setProduct({
                    PName: data.product.PName,
                    PCategory: data.product.PCategory,
                    PImage: data.product.PImage,
                    PDescription: data.product.PDescription,
                    PPrice: data.product.PPrice,
                });

                // display old image 
                setPreview(
                    `http://localhost:9000/${data.product?.PImage.replace(/\\/g, '/')}`
                );
            } catch (error) {
                console.log(error);

            }
        }
        getSingleProduct();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if(file){
            setProduct({
                ...product,
                PImage: file,
            });

            setPreview(URL.createObjectURL(file));
        }
    }

    const handleSave = async (e) => {
        e.preventDefault();
        const update = new FormData();
        update.append('PName', product.PName);
        update.append('PCategory', product.PCategory);
        update.append('PDescription', product.PDescription);
        update.append('PPrice', product.PPrice);
        update.append("PImage", product.PImage);

        await axios.put(`http://localhost:9000/product/edit-product/${id}`,
            update, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
        );
    }

    const handleDelete= async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`http://localhost:9000/product/delete-product/${id} `);
            alert('product deleted successfully');
        } catch (error) {
            console.log(error);
            
        }
    }

    console.log(product)
    return (
        <>

            <div className="container-fluid min-vh-100">
                <div className="row justify-content-center px-5 py-5">
                    <div className="col-lg-6 col-md-6 col-sm-4 py-3">
                        <h2 className='text-warning text-center py-2'>Edit Product Details</h2>
                        <div className="card">
                            <form onSubmit={handleSave}>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-4 p-4">
                                        <div className="card">
                                            {
                                                preview && (
                                                    <img src={preview} alt='dummy ' />

                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className="col-lg-6 p-4">
                                        <div className='mb-3'>
                                            <label className='form-label'>Product Name</label>
                                            <input className='form-control' name='PName' onChange={handleInputChange} value={product.PName} placeholder='rename' />
                                        </div>
                                        <div className='mb-3'>
                                            <label className='form-label'>Product Category</label>
                                            <select className='form-select' name='PCategory' onChange={handleInputChange} placeholder='rename' >
                                                <option selected value={product.PCategory}>{product.PCategory}</option>
                                                <option value={"Clothes"}>Clothes</option>
                                                <option value={"Flowers"}>Flowers</option>
                                                <option value={"Electronics"}>Electronics</option>
                                            </select>
                                        </div>
                                        <div className='mb-3'>
                                            <label className='form-label'>Upload Image</label>
                                            <input className='form-control' name='PImage' onChange={handleImageChange} type='file' />
                                        </div>
                                        <div className='mb-3'>
                                            <label className='form-label'>Description</label>
                                            <input className='form-control' name='PDescription' onChange={handleInputChange} value={product.PDescription} type='text' placeholder='edit description' />
                                        </div>
                                        <div className='mb-3'>
                                            <label className='form-label'>Price</label>
                                            <input className='form-control' name='PPrice' onChange={handleInputChange} value={product.PPrice} type='text' placeholder='edit price' />
                                        </div>
                                        <div className='mb-2'>
                                            <button type='submit' className='w-100 text-light bg-warning'>Save Changes</button>
                                        </div>
                                        <div className=''>
                                            <button type='submit' onClick={handleDelete} className='w-100 text-light bg-danger'>Delete Product</button>
                                        </div>
                                    </div>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Editproduct