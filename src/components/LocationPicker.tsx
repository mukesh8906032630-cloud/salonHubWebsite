import { useEffect, useMemo, useState } from 'react';
import { Select, Row, Col } from 'antd';
import { Country, State, City } from 'country-state-city';

export interface LocationValue {
  country?: string;
  state?: string;
  city?: string;
  latitude?: number;
  longitude?: number;
}

interface LocationPickerProps {
  value?: LocationValue;
  onChange?: (value: LocationValue) => void;
  countryPlaceholder?: string;
  statePlaceholder?: string;
  cityPlaceholder?: string;
}

// Country → State → City cascade backed by the `country-state-city` dataset — ported verbatim
// from the product's own LocationPicker so this site's form behaves identically.
export const LocationPicker = ({
  value,
  onChange,
  countryPlaceholder = 'Country',
  statePlaceholder = 'State',
  cityPlaceholder = 'City',
}: LocationPickerProps) => {
  const [countryCode, setCountryCode] = useState<string | undefined>();
  const [stateCode, setStateCode] = useState<string | undefined>();

  const countries = useMemo(() => Country.getAllCountries(), []);
  const states = useMemo(() => (countryCode ? State.getStatesOfCountry(countryCode) : []), [countryCode]);
  const cities = useMemo(() => (countryCode && stateCode ? City.getCitiesOfState(countryCode, stateCode) : []), [countryCode, stateCode]);

  useEffect(() => {
    if (!value?.country) {
      setCountryCode(undefined);
      setStateCode(undefined);
      return;
    }
    const country = countries.find((c) => c.name === value.country);
    setCountryCode(country?.isoCode);
    if (country && value.state) {
      const state = State.getStatesOfCountry(country.isoCode).find((s) => s.name === value.state);
      setStateCode(state?.isoCode);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value?.country, value?.state]);

  const handleCountryChange = (isoCode: string) => {
    const country = countries.find((c) => c.isoCode === isoCode);
    setCountryCode(isoCode);
    setStateCode(undefined);
    onChange?.({ country: country?.name, state: undefined, city: undefined, latitude: undefined, longitude: undefined });
  };

  const handleStateChange = (isoCode: string) => {
    const state = states.find((s) => s.isoCode === isoCode);
    setStateCode(isoCode);
    onChange?.({ ...value, state: state?.name, city: undefined, latitude: undefined, longitude: undefined });
  };

  const handleCityChange = (cityName: string) => {
    const city = cities.find((c) => c.name === cityName);
    onChange?.({
      ...value,
      city: city?.name,
      latitude: city?.latitude ? parseFloat(city.latitude) : undefined,
      longitude: city?.longitude ? parseFloat(city.longitude) : undefined,
    });
  };

  return (
    <Row gutter={8}>
      <Col span={8}>
        <Select
          placeholder={countryPlaceholder}
          showSearch
          allowClear
          value={countryCode}
          onChange={handleCountryChange}
          options={countries.map((c) => ({ label: c.name, value: c.isoCode }))}
          filterOption={(input, option) => (option?.label as string).toLowerCase().includes(input.toLowerCase())}
          style={{ width: '100%' }}
        />
      </Col>
      <Col span={8}>
        <Select
          placeholder={statePlaceholder}
          showSearch
          allowClear
          disabled={!countryCode}
          value={stateCode}
          onChange={handleStateChange}
          options={states.map((s) => ({ label: s.name, value: s.isoCode }))}
          filterOption={(input, option) => (option?.label as string).toLowerCase().includes(input.toLowerCase())}
          style={{ width: '100%' }}
        />
      </Col>
      <Col span={8}>
        <Select
          placeholder={cityPlaceholder}
          showSearch
          allowClear
          disabled={!stateCode}
          value={value?.city}
          onChange={handleCityChange}
          options={cities.map((c) => ({ label: c.name, value: c.name }))}
          filterOption={(input, option) => (option?.label as string).toLowerCase().includes(input.toLowerCase())}
          style={{ width: '100%' }}
        />
      </Col>
    </Row>
  );
};
