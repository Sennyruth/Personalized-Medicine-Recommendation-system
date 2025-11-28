import { useState } from 'react';
import { apiUrl } from '../../Utils/Config';
import { useNavigate } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SignIn.css';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch(`${apiUrl}/api/users/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include', 
            body: JSON.stringify({ email, password }),
          });
          const data = await response.json();
          console.log("Login response:", data);
    
          if (data.success) {
            toast.success("Login Successful!",
              {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                style: { backgroundColor: "blue", color: "white" }, 
              }
            );
            setTimeout(() => navigate('/appointments'), 1500);
          } else {
            toast.error(data.message || "Invalid credentials");
          }
        } catch (error) {
          console.error("Error during sign in:", error);
          toast.error("Error during sign in. Please try again later.");
        }
      };

    return (
        <div className='sign-in-container'>
            <ToastContainer/>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='email'>Email:</label>
                    <input
                        type='email'
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password:</label>
                    <input
                        type='password'
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type='submit'>Sign In</button>
            </form>
        </div>
    );
};

export default SignIn;