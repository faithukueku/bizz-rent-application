import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});


// Login request
export const login = async (email, password) => {
  try {
    const response = await instance.post('/api/auth/login', { email, password });
    console.log(response)
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Signup request
export const signup = async (name, email, password,phoneNumber) => {
  try {
    const response = await instance.post('/api/auth/signup', { name, email, password ,phoneNumber});
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};