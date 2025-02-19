import React, { useState } from "react";
import axios from "axios";

const SignupPage: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setMessage(null);

        if (password !== confirmPassword) {
            setError('Passwords do not match!')
            return;
        }
    
   
        const payload = {
            username,
            email,
            password
        };

        try {
            await axios.post('http://127.0.0.1:8000/signup/',payload, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setMessage("Registration successful! Please check your email to activate your account.");
        } catch (err:any){
            console.error(err);
            setError(err.response?.data?.detail || "An error occurred during registration.");
        }
} ;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full bg-white p-8 rounded shadow">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign up</h2>
                { message && (
                    <div className="bg-green-100 text-green-700 p-2 rounded mb-4">
                        {message}
                    </div>
                )}
            {error && (
                <div className="bg-red-100 text-red-700 p-2 rounded mb-4">
                    {error}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                        <input
                        type="text"
                        placeholder="username"
                        className="w-full p-2 border rounded"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        />
            
                <div className="mb-4">
                    <input
                    type="email"
                    placeholder="email"
                    className="w-full p-2 border rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </div>
                <div className="mb-4 grid grid-cols-2 gap-2">
                    <input
                    type="password"
                    placeholder="password"
                    className="w-full p-2 border rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </div>
             
                    <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full p-2 border rounded"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    />
                  </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
                    >
                    Register
                </button>

            </form>

        </div>

    </div>
);};
export default SignupPage;