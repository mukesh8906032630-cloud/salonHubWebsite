// The backend API this site submits salon signups to directly — same backend the real product
// talks to. Update VITE_API_URL when deploying so this follows without hunting through pages.
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1';
