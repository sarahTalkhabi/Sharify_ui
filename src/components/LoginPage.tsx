import React, { useState } from "react"; 
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { access } from "fs";

const LoginPage: React.FC = () => {
    const {auth, login} = useAuth();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
       
        try
        {
            const response = await axios.post('http://127.0.0.1:8000/login/',{
                username,
                password,
            });
            console.log('Login successful:', response.data);
            const { access, refresh } = response.data;
            localStorage.setItem('accessToken', access);
            localStorage.setItem('refreshToken', refresh)
        } catch (err: any) {
            setError(err.response?.data?.console.error || 'An unexpected error occurred.');
            
        }
    };
 
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-4xl font-bold text-center text-blue-500 mb-6">
                    Sharify
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Username or Email"
                            className="w-full px-4 py-2 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            />
                    </div>
                    <div className="mb-4" > 
                        <input 
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        />
                    </div>
                    <button
                    type="submit"
                    className="w-full px-4 py-2 text-lg text-white bg-blue-500 rounded-md hover:bg-blue-600"
                    > Log In</button>
                </form>
                <div className="flex justify-between mt-4 text-sm text-blue-500" >
                    <a href="#Forget-password" className="hover:underline">
                        Forget your password?
                    </a>
                    <a href= "#sign-up" className="hover:underline">Sign Up</a>
                </div>
            </div>
        </div>
    );
};
export default LoginPage;