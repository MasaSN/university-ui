import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL || 'https://localhost:7266/api';
const token = localStorage.getItem('token'); // Assuming token is stored in localStorage


export async function getStudents(){
    try{
        const res = await axios.get(`${API_URL}/StudentControler`,{
  headers: {
    Authorization: `Bearer ${token}`, // MUST be exact
  }
});
        return res.data;
    }catch(error){
        if (error.response && error.response.status === 404) {
            throw new Error('Failed to fetch students');
        }else if (error.response && error.response.status === 401) {
            throw new Error('Unauthorized access');
        }else if (error.response && error.response.status === 500) {
            throw new Error('Server error while fetching students');
        }
    }
        
    }

export async function getStudentById(studentId){
    try{
        const res = await axios.get(`${API_URL}/StudentControler/${studentId}`,{
    headers: {
        Authorization: `Bearer ${token}`, // MUST be exact
    }
});
        return res.data;
    }catch(error){
        if (error.response && error.response.status === 404) {
            throw new Error('Failed to fetch students');
        }else if (error.response && error.response.status === 401) {
            throw new Error('Unauthorized access');
        }else if (error.response && error.response.status === 500) {
            throw new Error('Server error while fetching students');
        }
    }
        
    }


export async function createStudent(studentData){
    try{
        const res = await axios.post(`${API_URL}/StudentControler`, studentData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
            return res.data;
        }
    catch(error){
        if (error.response && error.response.status === 400) {
            throw new Error('Bad request, please check the data');
        } else if (error.response && error.response.status === 401) {
            throw new Error('Unauthorized access');
        } else if (error.response && error.response.status === 500) {
            throw new Error('Server error while creating student');
        } else {
            throw new Error('An unexpected error occurred');
        }
    }
}

export async function updateStudent(studentId, studentData){
    try{
        const res = await axios.put(`${API_URL}/StudentControler/${studentId}`, studentData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
            return res.data;
        }
    catch(error){
        if (error.response && error.response.status === 400) {
            throw new Error('Bad request, please check the data');
        } else if (error.response && error.response.status === 401) {
            throw new Error('Unauthorized access');
        } else if (error.response && error.response.status === 500) {
            throw new Error('Server error while creating student');
        } else {
            throw new Error('An unexpected error occurred');
        }
    }
}

export async function deleteStudent(studentId){
    try{
        console.log("Deleting student with ID:", studentId);
        const res = await axios.delete(`${API_URL}/StudentControler`, {
            params: { id: studentId }, // ✅ Send id as query param
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return res.data;
    }catch(error){
        if (error.response && error.response.status === 404) {
            throw new Error('Student not found');
        } else if (error.response && error.response.status === 401) {
            throw new Error('Unauthorized access');
        } else if (error.response && error.response.status === 500) {
            throw new Error('Server error while deleting student');
        } else {
            throw new Error('An unexpected error occurred');
        }
    }
}