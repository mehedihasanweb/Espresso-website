import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            const user = result.user
            // console.log(user);
            navigate('/')
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <div>
            <div className='divider'>OR</div>
            <div className='text-center'>
                <button onClick={handleGoogleLogin} className='btn btn-circle btn-outline'>
                    G
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;