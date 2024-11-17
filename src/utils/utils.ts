import axios from "axios";

export function setJwt(jwt: string | null) {
    axios.defaults.headers!.common['Authorization'] = `Bearer ${jwt}`;
}

export const API_URL = "https://localhost:7094/api";