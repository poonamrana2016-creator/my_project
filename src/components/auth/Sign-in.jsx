import { useState } from "react"

const SignIn = () => {

    const [email, setEmail] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [password, setPassword] = useState("");
    const [passwordErr, setPasswordErr] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
   
    
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSignIn = (e) => {
        e.preventDefault();
        if (email === ""){
            setEmailErr("please enter a valid email.");
        }
        if (password === ""){
            setPasswordErr("Please enter a correct password.");
        }
    }


    return (
        <>
            <div className="container h-600px">
                <div className="row justify-content-center py-5">
                    <div className="col-4">
                        <h3 className="text-center mb-3">User Sign In</h3>
                        <div className="card p-3">
                            <form onSubmit={handleSignIn}>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" value={email} onChange={handleEmail} aria-describedby="emailHelp" />
                                    <span className="text-danger">{emailErr && emailErr}</span>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" class="form-control" value={password} onChange={handlePassword} id="exampleInputPassword1" />
                                    <span className="text-danger">{passwordErr && passwordErr}</span>
                                </div>
                                <button type="submit" class="btn btn-primary w-100">Sign In</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SignIn

