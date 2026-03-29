import React, { useState } from 'react'
import axios from 'axios';

export const Addproduct = () => {

  const initialState = {
    PName: "",
    PCategory: "",
    PImage: "",
    PDescription: "",
    PPrice: "",
  }

  const [product, setProduct] = useState(initialState);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "PImage") {
      setProduct({ ...product, PImage: files[0] });

    }
    else {
      setProduct({ ...product, [name]: value });
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("PName", product.PName);
    data.append("PCategory", product.PCategory);
    data.append("PImage", product.PImage);
    data.append("PDescription", product.PDescription);
    data.append("PPrice", product.PPrice);
      // append is used to push or Add data at the last index of an array

    // add Validation
    

    // API Calling below to add data in database
    await axios.post(`${import.meta.env.VITE_API_URL}/product/add-product`,
      data, {
        headers: {
          "Content-Type" : "multipart/form-data",
        },
      }
    );

  }

  return (
    <>

      <div className="container-fluid">
        <div className="row justify-content-center">
          <h1 className='text-warning text-center mt-5'>Add Products</h1>
          <div className="col-lg-5 mb-5 mt-3">
            <div className="card p-4">
              <form action='' onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Product Name</label>
                  <input onChange={handleChange} type="text" name='PName' className="form-control" placeholder="Name of product." />
                </div>
                <div className="mb-3">
                  <label className="form-label">Product Category</label>
                  <select name='PCategory' onChange={handleChange} className="form-select" aria-label="Default select example">
                    <option selected>Select product Category</option>
                    <option value={""}>--Select Category--</option>
                    <option value={"Clothes"}>Clothes</option>
                    <option value={"Flowers"}>Flowers</option>
                    <option value={"Electronics"}>Electronics</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className='form-label'>Select Product Image</label>
                  <input onChange={handleChange} name='PImage' type='file' className='form-control' />
                </div>
                <div className="mb-3">
                  <label className='form-label'>Add Description</label>
                  <textarea onChange={handleChange} name='PDescription' className='form-control' rows={'1'} placeholder='Add description' />
                </div>
                <div className='mb-3'>
                  <label className='form-label'>Product Price</label>
                  <input  onChange={handleChange} name='PPrice' type='text' className='form-control' placeholder='ex: $10' />
                </div>

                <div className='mb-2 text-center'>
                  <button type='submit' className='btn btn-warning w-100 text-center'>Upload Product</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
