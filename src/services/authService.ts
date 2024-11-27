import axios from './axiosConfig';
import { API_URL } from '../utils/utils';

export const loginUser = async (email: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/account/login`, { email, password });
        return response;
    } catch (error) {
        throw new Error('Failed to login');
    }
};

export const registerUser = async (email: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/account/register`, { email, password });
        return response;
    } catch (error) {
        throw new Error('Failed to register');
    }
};
