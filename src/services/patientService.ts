import axios from './axiosConfig';
import { API_URL } from '../utils/utils';

export const searchPatient = async (query: string, page: number, pageSize: number) => {
    try {
        const response = await axios.get(`${API_URL}/patient/search?query=${query}&page=${page}&pageSize=${pageSize}`);
        return response;
    } catch (error) {
        //throw new Error('Error');
    }
};

export const getPatient = async (id: number) => {
    try {
        const response = await axios.get(`${API_URL}/patient/${id}`)
        return response;
    }
    catch (error) {
        //throw new Error('Error');
    }
}