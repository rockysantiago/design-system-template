import React from 'react';
import { render } from '@testing-library/react';
import { ProviderTest } from '../..';

import { Footer } from '.';

describe('Footer', () => {
  it('renders', () => {
    const { getByText } = render(
      <ProviderTest>
        <Footer
          illustrativePurpose={'foo'}
          disclaimerTitle={'bar'}
          isIllustrativePurposeVisible={true}
          isDisclaimerTitleVisible={true}
          onClick={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </ProviderTest>
    );
    expect(getByText(/foo/)).toBeInTheDocument();
    expect(getByText('bar')).toBeInTheDocument();
  });
});
