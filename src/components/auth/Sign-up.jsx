import axios from "axios";
import { useState } from "react"

const SignUp = () => {

    const getApiConfig = () => ({
        headers: {
            "Content-Type": "application/json"
        }
    });

    const [userName, setUserName] = useState("");
    const [usernameErr, setusernameErr] = useState("");
    const [email, setEmail] = useState("");
    const [emailErr, setemailErr] = useState("");
    const [password, setPassword] = useState("");
    const [passwordErr, setpasswordErr] = useState("");
    const [isValid, setIsValid] = useState("");

    const handleUserName = (e) => {
        setUserName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (userName === "") {
            setusernameErr("please Enter Your Name.");
            setIsValid(false);
        } else {
            setIsValid(true);
        }
        if (email === "") {
            setemailErr("Please Enter Email.");
            setIsValid(false);
        }
        else if (!email.includes('@')) {
            setemailErr(false);
        } else {
            setemailErr(true);
        }
        if (password === "") {
            setpasswordErr("Please Enter your password.");
            setIsValid(false);
        }
        else if (password.length < 6 && password.length < 10) {
            setpasswordErr("Password must be between 6 to 10 characters");
            setIsValid(false);
        } else {
            setIsValid(true);
        }

        if (isValid) {
            const value = {
                name: userName,
                email: email,
                password: password
            }

            //  localStorage.setItem("users", JSON.stringify(user));
             
             // to send user-input-data in database--
             const url = "http://localhost:9000/auth/sign-up";
             const response = await axios.post(url, value, getApiConfig());
             console.log(response);
             setUserName("");
             setEmail("");
             setPassword("");

        }
         else {
             alert('empty fields can not be submitted.');
         } 


    }

    // use Effect

    return (
        <>
            <div className="container">
                <div className="row justify-content-center py-5">
                    <div className="col-4">
                        <div className="card p-3">
                            <form action='' onSubmit={handleSubmit}>
                                <div class="mb-3">
                                    <label for="userName" class="form-label">User Name</label>
                                    <input type="userName" class="form-control" id="userName" value={userName} onChange={handleUserName} placeholder="Enter User Name" aria-describedby="usernameHelp" />
                                    <span className="text-danger">{usernameErr && usernameErr}</span>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" value={email} onChange={handleEmail} aria-describedby="emailHelp" placeholder="enter email" />
                                    <span className="text-danger">{emailErr && emailErr}</span>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" class="form-control" value={password} onChange={handlePassword} id="exampleInputPassword1" placeholder="create a password" />
                                    <span className="text-danger">{passwordErr && passwordErr}</span>
                                </div>
                                <button type="submit" class="btn btn-primary w-100">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SignUp