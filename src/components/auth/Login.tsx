import React, { useState } from 'react';


const Login = ({setAuthState}:any) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (event: any) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log({ firstName, lastName, email, password, confirmPassword });
    };

    return (
        <div className="container mt-5">
            <div className="row d-flex align-item-center">
                <div className="col-12 col-md-6">
                    <h1>Sign In</h1>
                </div>
                <div className="col-12 col-md-6">
                    <p className='text-end'>Don’t have an account yet? <span className='text-primary' onClick={()=>{setAuthState('Register')}}>  Create new for free!</span></p>
                </div>



            </div>
            <div className="row">
                <div className="col-12 col-md-6">
                    <form>

                        <div className="form-group">

                            <input type="email" className="form-control" id="email" placeholder="Enter email" />
                        </div>

                        <div className="form-group">

                            <input type="password" className="form-control" id="password" placeholder="Password" />
                        </div>


                        <div className="form-group mt-3 ">
                            <button type="submit" className="btn btn-primary btn-block col-12 rounded-pill">Create Account</button>
                        </div>
                    </form>
                    <div className='mt-4'>


                        <button type="submit" className="btn btn-light btn-block col-12 ">Sign up with Facebook</button>

                        <button type="submit" className="btn btn-light btn-block col-12 mt-2 ">Sign up with Google</button>
                    </div>
                    <p style={{textAlign:"center"}}>Forgot Password? </p>
                </div>
                <div className="col-12 col-md-6">
                    <img src="src\assets\Register.png" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Login;