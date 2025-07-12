import axios from 'axios';
import { ApiResponse, ApiParams } from '@/types/api';

const api = axios.create({
  baseURL: 'https://suitmedia-backend.suitdev.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getIdeas = async (params: ApiParams): Promise<ApiResponse> => {
  const response = await api.get('/ideas', { params });
  return response.data;
};

export default api;