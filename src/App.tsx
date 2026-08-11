import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { OnboardSalon } from './pages/OnboardSalon';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsAndConditions } from './pages/TermsAndConditions';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<OnboardSalon />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
    </BrowserRouter>
  );
};
