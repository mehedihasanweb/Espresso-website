// import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
    const { user,logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
        .then(() =>{
            
        })
        .catch(error => console.log(error))
    }

    return (
        <div className='header flex justify-evenly'>
            <Link to='/'><h2>Espresso Emporium</h2></Link>
            {user ? <button onClick={handleLogOut}>Logout</button> : <Link to='/login'> <button>Login</button> </Link>}
        </div>
    );
};

export default Header;