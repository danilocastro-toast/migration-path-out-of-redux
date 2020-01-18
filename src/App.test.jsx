import { render } from '@testing-library/react';
import React from 'react';
import App from './App';

test('renders learn react link', () => {
  const wrapper = render(<App />);
  const title = wrapper.getByText(/JSON Store/i);
  expect(title).toBeTruthy();
});
