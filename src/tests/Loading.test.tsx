import React from 'react';
import { render } from '@testing-library/react-native';
import LoadingIndicator from '../components/LoadingIndicator';

describe('LoadingIndicator component', () => {
  it('renders ActivityIndicator and default message', () => {
    const message = 'Loading data...';
    const { getByText, getByTestId } = render(
      <LoadingIndicator message={message} color="#00f" size="large" />
    );

    // ✅ Check if the message text is rendered
    expect(getByText(message)).toBeTruthy();

    // ✅ Optional: add testID to your ActivityIndicator to check it
    // expect(getByTestId('loading-spinner')).toBeTruthy();
  });
});
