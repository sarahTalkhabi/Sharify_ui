import axios from 'axios';
import LoginPage from '../components/LoginPage';

const API_URL = 'http://127.0.0.1:8000/login/'

export  interface LoginResponse {
  access: string;
  refresh: string;
}

export  const loginUser = async (username: string, password: string): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>(`${API_URL}`,{username,password});
  return response.data;
}

