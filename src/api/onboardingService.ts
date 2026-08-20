import { apiClient } from './apiClient';

export interface SignupSalonPayload {
  name: string;
  email: string;
  phone?: string;
  dateOfBirth: string; // YYYY-MM-DD
  salonName: string;
  planId: string;
  address?: string;
  country?: string;
  state?: string;
  city?: string;
  latitude?: number;
  longitude?: number;
  aadhaarNumber?: string;
  panNumber?: string;
  shopEstablishmentNumber?: string;
  gstUdyamNumber?: string;
  // At least one of these 4 is required — enforced by the caller, not by this type.
  aadhaarDoc?: File;
  panDoc?: File;
  shopEstablishmentDoc?: File;
  gstUdyamDoc?: File;
}

interface ApiResponse<T> {
  status: 'success' | 'fail' | 'error';
  data: T;
  message?: string;
}

export const onboardingService = {
  // multipart/form-data — the 4 documents are actual files, not just text fields. Creates a
  // PENDING request on the real backend; nothing is provisioned until a Super Admin approves it —
  // same endpoint and payload shape as the product's own signup page.
  signupSalon: async (payload: SignupSalonPayload): Promise<{ id: string; status: string }> => {
    const form = new FormData();
    form.append('name', payload.name);
    form.append('email', payload.email);
    if (payload.phone) form.append('phone', payload.phone);
    form.append('dateOfBirth', payload.dateOfBirth);
    form.append('salonName', payload.salonName);
    form.append('planId', payload.planId);
    if (payload.address) form.append('address', payload.address);
    if (payload.country) form.append('country', payload.country);
    if (payload.state) form.append('state', payload.state);
    if (payload.city) form.append('city', payload.city);
    if (payload.latitude !== undefined) form.append('latitude', String(payload.latitude));
    if (payload.longitude !== undefined) form.append('longitude', String(payload.longitude));
    if (payload.aadhaarNumber) form.append('aadhaarNumber', payload.aadhaarNumber);
    if (payload.panNumber) form.append('panNumber', payload.panNumber);
    if (payload.shopEstablishmentNumber) form.append('shopEstablishmentNumber', payload.shopEstablishmentNumber);
    if (payload.gstUdyamNumber) form.append('gstUdyamNumber', payload.gstUdyamNumber);
    if (payload.aadhaarDoc) form.append('aadhaarDoc', payload.aadhaarDoc);
    if (payload.panDoc) form.append('panDoc', payload.panDoc);
    if (payload.shopEstablishmentDoc) form.append('shopEstablishmentDoc', payload.shopEstablishmentDoc);
    if (payload.gstUdyamDoc) form.append('gstUdyamDoc', payload.gstUdyamDoc);

    const { data } = await apiClient.post<ApiResponse<{ id: string; status: string }>>(
      '/onboarding/signup-salon',
      form,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    );
    return data.data;
  },
};
