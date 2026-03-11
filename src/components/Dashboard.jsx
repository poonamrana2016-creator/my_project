import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeProvider";
import useCounter from "../cutom-hooks/counter-hook";

const Dashboard = () => {
    const {count, increament, decreament, reset } = useCounter(2);

    // Hooks used to manage the state of a variable
    // useState is a type of HOOK

    
        const {theme} = useContext(ThemeContext);
 

    return (
        <>

            {/* hero section starts */}

            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://static-cse.canva.com/blob/243856/create-banners.jpg" class="d-block w-100" height={500} alt="banner-1" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://tse3.mm.bing.net/th/id/OIP.lZa1_N9XQdugOZusYNZhrwAAAA?w=474&h=158&rs=1&pid=ImgDetMain&o=7&rm=3" height={500} class="d-block w-100" alt="banner-2" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://tse4.mm.bing.net/th/id/OIP.00LEs8mPDfFVbp2Ohfa-3gHaCi?rs=1&pid=ImgDetMain&o=7&rm=3" class="d-block w-100" height={500} alt="banner-3" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            {/* Hero Section Ends */}
            {/* Content Section Starts */}

            <section className="bg-light py-5">
                <div className={`container ${theme === "dark" ? "bg-dark" : "" }`}>
                    <div className='row'>
                        <h1 className='text-center'>REACT FEATURES</h1>

                        <div className='col-lg-4 col-md-6'>
                            <div className='card'>
                                <img className='rounded' src="https://miro.medium.com/v2/resize:fit:1200/1*pJyAxhkRFiitQzvyLWexLg.jpeg" alt="ReactHook_Image" />
                                <h3 className='text-center mt-2' >React HOOKS</h3>
                                <p className='p-3'>Hooks allow functions to have access to state and other React features without using classes. They provide a more direct API to React concepts like props, state, context, refs, and lifecycle.</p>
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-6'>
                            <div className='card'>
                                <img className='rounded' src="https://i.ytimg.com/vi/fdU_6aL47EY/maxresdefault.jpg" alt="props-image" />
                                <h3 className='text-center mt-2' >React Props</h3>
                                <p className='p-3'>In React, props are a mechanism for passing data from a parent component to a child component. They allow you to customize and configure child components by providing them with functions.</p>
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-6'>
                            <div className='card'>
                                <img className='rounded' src="https://th.bing.com/th/id/OIP.V3DnqamIhSyZ_ErG93qJaQHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" alt="redux-image" />
                                <h3 className='text-center mt-2' >React Redux Toolkit</h3>
                                <p className='p-3'>Includes utilities to simplify common use cases like store setup, creating reducers, immutable update logic, and more. Provides good defaults for store setup out of the box, and includes the </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="bg-dark py-5 text-white">
                <div className="row justify-content-center text-center">
                    <div className="col-2">
                        <button onClick={increament} className="btn btn-outline-success">Increament +</button>
                        <h1>{count}</h1>
                        <button onClick={decreament} className="btn btn-outline-danger">Decreament -</button>
                    </div>
                </div>
            </section>

            {/* Content section Ends */}

        </>
    )
}

export default Dashboard;