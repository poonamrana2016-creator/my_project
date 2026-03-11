import { Link } from "react-router-dom";
import { ThemeContext } from './ThemeProvider';
import { useContext } from "react";

const Navbar = ({ menu, num, setNum }) => {
    const { theme, setTheme } = useContext(ThemeContext);
    const handleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark sticky-top" data-bs-theme="dark">
                <div class="container">
                    <a class="navbar-brand" href="#">React Devlops</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                            {
                                menu.map((item, index) => (
                                    <li class="nav-item" key={index} >
                                        <Link class="nav-link active" area-current="page" to={item.url}> {item.value} </Link>
                                    </li>
                                ))
                            }

                        </ul>
                        <div class="d-flex">
                            
                            <Link to={'/sign-in'} class="btn btn-outline-success btn-sm">Sign In</Link>
                            <Link to={'/sign-up'} class="btn btn-outline-danger btn-sm ms-4">Sign Up</Link>
                            <button class="btn btn-outline-primary ms-2" > {num} </button>
                            <button className="btn btn-outline-primary" onClick={handleTheme}>{theme}</button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* navbar ends */}

        </>
    )
}

export default Navbar;