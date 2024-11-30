import axios from './axiosConfig';
import { API_URL } from '../utils/utils';
import { Encounter } from '../model/encounter';

export const addEncounter = async (encounter: Encounter) => {
    try {
        const response = await axios.post(`${API_URL}/encounter/add`, encounter);
        return response;
    } catch (error) {
        //throw new Error('Error');
    }
};