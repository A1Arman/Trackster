import axios from 'axios';
import TokenService from '../services/token-service';

export default axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        'Content-Type':'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`
    }
})