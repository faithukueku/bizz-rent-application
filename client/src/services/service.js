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
    const response = await instance.post('/api/auth/signUp', { name, email, password ,phoneNumber});
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getProperties = async () => {
  try {
    const response = await instance.get('/api/properties');
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getPropertiesById = async (id) => {
  try {
    const response = await instance.get(`/api/properties/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};