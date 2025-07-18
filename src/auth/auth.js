import {jwtDecode} from 'jwt-decode';

const TOKEN_KEY = 'token';

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const isLoggedIn = () => {
    const token = getToken();
    if(!token) return false;
    try{
        const decoded = jwtDecode(token);
        const now = Date.now() / 1000; // Current time in seconds
        return decoded.exp && decoded.exp > now; // Check if token is expired
    } catch (error) {
        console.error("Error decoding token:", error);
        return false;
    }
}
export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    window.location.href = '/login'; // Redirect to login page
}

export const getUserInfo = () =>{
    const token = getToken();
    if(!token) return null;
    try{
        return jwtDecode(token);
    } catch (error) {
        console.error("Error decoding token:", error);
        return null;
    }
}
