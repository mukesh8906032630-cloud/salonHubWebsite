import { apiClient } from './apiClient';

export interface Plan {
  id: string;
  name: string;
  price: number;
  tagline: string;
  features: string[];
  highlighted: boolean;
  sortOrder: number;
  isActive: boolean;
}

interface ApiResponse<T> {
  status: 'success' | 'fail' | 'error';
  data: T;
  message?: string;
}

export const planService = {
  // Public — same endpoint Super Admin's Plans management page reads from (see
  // salonHubFrontend/src/pages/SuperAdmin/PlansManager.tsx). Active plans only, sorted.
  listPublic: async (): Promise<Plan[]> => {
    const { data } = await apiClient.get<ApiResponse<Plan[]>>('/plans');
    return data.data;
  },
};
