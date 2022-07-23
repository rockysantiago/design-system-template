import React from 'react';
import { render } from '@testing-library/react';
import { ProviderTest } from '../..';

import { Footer } from '.';

describe('Footer', () => {
  it('renders', () => {
    const { getByText } = render(
      <ProviderTest>
        <Footer illustrativePurpose={'foo'} disclaimerTitle={'bar'} />
      </ProviderTest>
    );
    expect(getByText(/foo/)).toBeInTheDocument();
    expect(getByText('bar')).toBeInTheDocument();
  });
});
