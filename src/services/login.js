import axios from 'axios';
const API_URL = 'https://localhost:7266/api';

export async function login(credentials) {
  try {
    const response = await axios.post(`${API_URL}/Auth/login`, credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};
