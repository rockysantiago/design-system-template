import React from 'react';
import { render } from '@testing-library/react';
import { ProviderTest } from '../..';

import { Header } from '.';

describe('Header', () => {
  it('renders', () => {
    const { getByText } = render(
      <ProviderTest>
        <Header />
      </ProviderTest>
    );
    expect(getByText('Header')).toBeInTheDocument();
  });
});
