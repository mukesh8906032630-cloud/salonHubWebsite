import { useState } from 'react';
import { Modal, Form, DatePicker, Upload, Space } from 'antd';
import type { UploadFile } from 'antd/es/upload/interface';
import { UploadOutlined, CheckCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { Input } from './Input';
import { Button } from './Button';
import { LocationPicker } from './LocationPicker';
import type { LocationValue } from './LocationPicker';
import { onboardingService } from '../api/onboardingService';
import type { Plan } from '../api/planService';

const SectionLabel = styled.h4`
  margin: 24px 0 4px;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #94a3b8;

  &:first-child {
    margin-top: 4px;
  }
`;

const DocRow = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
  align-items: start;
  margin-bottom: 14px;
`;

const ErrorBanner = styled.div`
  background: #fef2f2;
  border: 1px solid #fecaca;
  color: #b91c1c;
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 13px;
  margin-bottom: 16px;
`;

const SuccessBody = styled.div`
  text-align: center;
  padding: 24px 8px 8px;
`;

const SuccessTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #0f172a;
  margin: 12px 0 8px;
`;

const SuccessText = styled.p`
  color: #64748b;
  font-size: 14px;
  line-height: 1.6;
  margin: 0 0 20px;
`;

interface DocField {
  key: 'aadhaarDoc' | 'panDoc' | 'shopEstablishmentDoc' | 'gstUdyamDoc';
  numberField: string;
  label: string;
  numberPlaceholder: string;
}

const DOC_FIELDS: DocField[] = [
  { key: 'aadhaarDoc', numberField: 'aadhaarNumber', label: 'Aadhaar Card', numberPlaceholder: 'Aadhaar number (optional)' },
  { key: 'panDoc', numberField: 'panNumber', label: 'PAN Card', numberPlaceholder: 'PAN number (optional)' },
  { key: 'shopEstablishmentDoc', numberField: 'shopEstablishmentNumber', label: 'Shop & Establishment Registration', numberPlaceholder: 'Registration number (optional)' },
  { key: 'gstUdyamDoc', numberField: 'gstUdyamNumber', label: 'GST or Udyam/MSME Registration', numberPlaceholder: 'Registration number (optional)' },
];

interface OnboardSalonModalProps {
  open: boolean;
  plan: Plan | null;
  onClose: () => void;
}

// Mirrors salonHubFrontend/src/pages/Public/SignUpSalon.tsx field-for-field and submits to the
// same real backend endpoint (POST /onboarding/signup-salon) — this site's onboarding IS the
// product's onboarding, not a copy of it. Only reachable after a plan is chosen on the Pricing
// section (see LandingPage.tsx) — `plan` travels with the request so a Super Admin reviewing it
// knows which SalonFeature toggles to set up once approved.
export const OnboardSalonModal = ({ open, plan, onClose }: OnboardSalonModalProps) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [files, setFiles] = useState<Partial<Record<DocField['key'], File>>>({});

  const handleFileChange = (key: DocField['key']) => (info: { fileList: UploadFile[] }) => {
    const latest = info.fileList[info.fileList.length - 1];
    setFiles((prev) => ({ ...prev, [key]: (latest?.originFileObj as File) ?? undefined }));
  };

  const resetAndClose = () => {
    form.resetFields();
    setFiles({});
    setErrorMessage(null);
    setSubmitted(false);
    onClose();
  };

  const onFinish = async (values: any) => {
    if (!plan) return;
    setErrorMessage(null);
    const missing = DOC_FIELDS.filter((f) => !files[f.key]);
    if (missing.length > 0) {
      setErrorMessage(`Please upload: ${missing.map((f) => f.label).join(', ')}`);
      return;
    }

    const location: LocationValue | undefined = values.location;

    try {
      setLoading(true);
      await onboardingService.signupSalon({
        name: values.name,
        email: values.email,
        phone: values.phone || undefined,
        dateOfBirth: values.dateOfBirth.format('YYYY-MM-DD'),
        salonName: values.salonName,
        planId: plan.id,
        address: values.address || undefined,
        country: location?.country || undefined,
        state: location?.state || undefined,
        city: location?.city || undefined,
        latitude: location?.latitude,
        longitude: location?.longitude,
        aadhaarNumber: values.aadhaarNumber || undefined,
        panNumber: values.panNumber || undefined,
        shopEstablishmentNumber: values.shopEstablishmentNumber || undefined,
        gstUdyamNumber: values.gstUdyamNumber || undefined,
        aadhaarDoc: files.aadhaarDoc!,
        panDoc: files.panDoc!,
        shopEstablishmentDoc: files.shopEstablishmentDoc!,
        gstUdyamDoc: files.gstUdyamDoc!,
      });
      setSubmitted(true);
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || 'Something went wrong — please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={open}
      onCancel={resetAndClose}
      width={620}
      title={submitted ? undefined : `Register your salon — ${plan?.name ?? ''} Plan`}
      footer={
        submitted
          ? null
          : (
            <Space>
              <Button $variant="secondary" onClick={resetAndClose}>Cancel</Button>
              <Button $variant="gold" htmlType="submit" form="onboard-salon-form" loading={loading}>
                Create my salon
              </Button>
            </Space>
          )
      }
      destroyOnClose
    >
      {submitted ? (
        <SuccessBody>
          <CheckCircleOutlined style={{ fontSize: 40, color: '#15803d' }} />
          <SuccessTitle>Request submitted</SuccessTitle>
          <SuccessText>
            A platform administrator will review your documents. Once approved, we'll email your
            login details to get started.
          </SuccessText>
          <Button $variant="gold" onClick={resetAndClose}>Back to home</Button>
        </SuccessBody>
      ) : (
        <div style={{ maxHeight: '65vh', overflowY: 'auto', paddingRight: 4 }}>
          {errorMessage && <ErrorBanner>{errorMessage}</ErrorBanner>}
          <Form id="onboard-salon-form" form={form} layout="vertical" onFinish={onFinish}>
            <SectionLabel>Your details</SectionLabel>
            <Form.Item label="Full name" name="name" rules={[{ required: true, message: 'Full name is required' }]}>
              <Input $fullWidth placeholder="Your full name" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Email is required' }, { type: 'email', message: 'Enter a valid email' }]}
            >
              <Input $fullWidth placeholder="you@example.com" />
            </Form.Item>
            <Form.Item label="Phone" name="phone">
              <Input $fullWidth placeholder="Phone number (optional)" />
            </Form.Item>
            <Form.Item label="Date of birth" name="dateOfBirth" rules={[{ required: true, message: 'Date of birth is required' }]}>
              <DatePicker style={{ width: '100%' }} disabledDate={(d) => d.isAfter(dayjs())} placeholder="Select your date of birth" />
            </Form.Item>

            <SectionLabel>Your salon</SectionLabel>
            <Form.Item label="Salon name" name="salonName" rules={[{ required: true, message: 'Salon name is required' }]}>
              <Input $fullWidth placeholder="e.g. Glow Up Beauty Studio" />
            </Form.Item>
            <Form.Item label="Country / State / City" name="location">
              <LocationPicker countryPlaceholder="Country" statePlaceholder="State" cityPlaceholder="City" />
            </Form.Item>
            <Form.Item label="Address" name="address">
              <Input $fullWidth placeholder="Salon address (optional)" />
            </Form.Item>

            <SectionLabel>Government documents</SectionLabel>
            {DOC_FIELDS.map((f) => (
              <DocRow key={f.key}>
                <Form.Item label={f.label} name={f.numberField} style={{ marginBottom: 0 }}>
                  <Input $fullWidth placeholder={f.numberPlaceholder} />
                </Form.Item>
                <Form.Item label="Document" style={{ marginBottom: 0 }} required>
                  <Upload
                    accept=".jpg,.jpeg,.png,.webp,.pdf"
                    maxCount={1}
                    beforeUpload={() => false}
                    onChange={handleFileChange(f.key)}
                  >
                    <Button $variant="secondary" icon={<UploadOutlined />}>
                      {files[f.key] ? files[f.key]!.name.slice(0, 16) : 'Upload'}
                    </Button>
                  </Upload>
                </Form.Item>
              </DocRow>
            ))}
          </Form>
        </div>
      )}
    </Modal>
  );
};
