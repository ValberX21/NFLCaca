import axios from 'axios';
import { API_URL,RAPIDAPI_KEY,RAPIDAPI_HOST } from '@env';

const api = axios.create({
  baseURL: API_URL,
   headers: {
    'x-rapidapi-key': RAPIDAPI_KEY,
    'x-rapidapi-host': RAPIDAPI_HOST,
  },
});

export const getTeams = () => api.get('/teams?league=1&season=2023');

