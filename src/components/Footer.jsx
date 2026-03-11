

const Footer = () => {
    return (
        <>
            {/* footer starts */}

            <footer className='bg-dark text-white py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4  col-sm-8 text-center">

                            <img src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png" height={90} width={90} alt="" />
                            <br />
                            <span>React is a popular JavaScript library for building dynamic and interactive user interfaces. Below is a simple example to help you understand the basics of React.</span>
                        </div>

                        <div className="col-lg-2 col-md-2 col-sm-2 col-6 text-left">
                            <h4>Links</h4>
                            <ul >
                                <li>Home</li>
                                <li>Docs</li>
                                <li>Examples</li>
                                <li>Icons</li>
                                <li>Blog</li>
                                <li>Swag Stores</li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-2 col-sm-2 col-6 text-left">
                            <h4>Guides</h4>
                            <ul >
                                <li >Getting Started</li>
                                <li >Starter Template</li>
                                <li >Webpack</li>
                                <li >Parcel</li>
                                <li >Vite</li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-2 col-sm-6 col-6 text-left">
                            <h4>Projects</h4>
                            <ul>
                                <li>Bootstrap 5</li>
                                <li>Bootstrap 4</li>
                                <li>Icons</li>
                                <li>RFS</li>
                                <li>Examples Repo</li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-2 col-sm-6 col-6 text-left">
                            <h4> Community </h4>
                            <ul>
                                <li> Issues </li>
                                <li> Discussions </li>
                                <li> Corporate Sponsors </li>
                                <li> Open Collective </li>
                                <li> Stack Overflow </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </footer>

            {/* footer ends */}

        </>
    )
}

export default Footer;