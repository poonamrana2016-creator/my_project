import React, { useState } from 'react'
import axios from 'axios'; 
import { useParams } from 'react-router-dom';
import { Alert } from 'bootstrap';

const Services = () => {
        const { id } = useParams();
    
        const initialState = {
            title : '' ,
            price : '' ,
            description : '' ,      
            categoryId : id ,

        }

        const [formData, setFormData] = useState(initialState);
        
        console.log(formData);
        
        const handleFormData = (e) => {
           
            const {value, name} = e.target;
            setFormData({
                ...formData,
                [name]: value
            });
    }

    const handleSubmit = async (e) => {
    e.preventDefault();
        const payload = {
            title : formData.title,
            price : Number(formData.price),
            description : formData.description,
            categoryId : Number(formData.categoryId),
            images : ['https://placehold.co/600x400']
        }

        try {
            await axios.post("https://api.escuelajs.co/api/v1/products/", 
                payload,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            alert("Successfully Update");
        } catch (error) {
            console.log(error);
            alert('Error Found!');
        }
    }


    return (
        <>
            <div className="conatainer">
                <div className="row justify-content-center py-5">
                    <h2 className='text-center'>Add Products</h2>
                    <div className="col-6">
                        <div className="card p-3">
                            <form onSubmit={handleSubmit}>
                                <div className='mb-3'>
                                    <label htmlFor="title" class="form-label">Title</label>
                                    <input type="title" name='title' class="form-control" onChange={handleFormData} value={formData.title} id="title" placeholder="Enter Title" aria-describedby="titleHelp" />
                                </div>
                                <div className='mb-3'>

                                    <label htmlFor="price" class="form-label">Price</label>
                                    <input type="text" name='price' class="form-control" value={formData.price} onChange={handleFormData} id="price" placeholder="Enter Price" aria-describedby="priceHelp" />
                                </div>
                                
                                <div className='mb-3'>
                                    <label htmlForfor="desc" class="form-label">Description</label>
                                    <textarea type="description" name='description' class="form-control" value={formData.description} onChange={handleFormData} id="desc" placeholder="Add Description" aria-describedby="descriptionHelp" />
                                </div>

                                <button className='btn btn-outline-primary w-100'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services