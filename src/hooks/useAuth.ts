import { useState } from "react";
import { loginUser, LoginResponse } from "../api/axios";

interface AuthState {
    user?: LoginResponse;
    error?: string;
    
}

const useAuth = () => {
    const [auth, setAuth] = useState<AuthState>({});

    const login = async (username: string, password: string) => {
        try {
            const data= await loginUser(username, password);
            setAuth({user:data});

            localStorage.setItem('accessToken',data.access);
            localStorage.setItem('refreshToken',data.refresh);
        } catch(error:any) {
            if (error.response && error.response.status === 401){
                setAuth({error: 'Wrong username or password'});
                } else {
                    setAuth ({error: error.response?.data?.detail || 'Login failed'});
                }
            
         
            }
        };
   
    return {auth,login};
};

export default useAuth;