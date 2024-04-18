import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-todo-yc2c.onrender.com:5000',
});

export default instance;