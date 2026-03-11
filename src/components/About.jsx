import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handleIncreament } from '../slice/counter-slice';

const About = () => {

    const dispatch = useDispatch();
    const increamentValue = () => {
        dispatch(handleIncreament());
    }

    const counterSlice = useSelector((state) => state.counter);
    const value = counterSlice.value;
    return (
        <>
            <h1>{value}</h1>
            <button type='submit' onClick={increamentValue} className='btn btn-primary btn-sm'>Add to cart</button>
        </>
    )
}

export default About