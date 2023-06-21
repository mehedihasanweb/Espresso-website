import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../assets/images/login.svg'
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import { AuthContext } from '../Provider/AuthProvider';
import SocialLogin from '../shared/SocialLogin';

const Registration = () => {
    const { googleLogin } = useContext(AuthContext)
    const { createUser } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    const handleRegistration = (event) => {
        event.preventDefault()

        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        const user = { name, email, password }

        createUser(email, password)
            .then(result => {
                const newUser = result.user
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    }

    const handleRegGoogleLogin = () => {
        googleLogin()
        navigate(from, { replace: true })
    }

    return (
        <div>
            <Header />
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="mr-12 text-center lg:text-left w-1/2">
                        <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleRegistration}>
                                <h1 className='text-center text-4xl font-bold'>Please Registration</h1>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Registration" />
                                </div>
                            </form>
                            <p className='text-center'>Already Have an Account? <Link to='/login' className='text-orange-600 font-bold'> Login</Link></p>
                            <span onClick={handleRegGoogleLogin}><SocialLogin /></span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Registration;