import React from 'react'
import '../Login/Login.css'
import { useNavigate } from 'react-router-dom'
function Login({ updateUser }) {

    const navigate = useNavigate();

    const loginHandeler = () => {
        
        
        updateUser()
        navigate('/movies/home')

    }
    return (
        <div>
            <div className='loginContainer'>

                <div className='login_Content'>
                    <div className='loginHeadingContainer'>
                        <h4>
                            Sign in to your account
                        </h4>



                    </div>
                    <div className='loginFormContainer'>
                        <div className='form_control'>
                            <input type={"text"} placeholder="Email / Phone number" />
                        </div>
                        <div className='form_control'>
                            <input type={"password"} placeholder="Password" />
                        </div>
                        <div className='form_control'>
                            <button onClick={loginHandeler}> Login</button>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Login
