import React from 'react';
import { render } from '@testing-library/react';

import { PageLayout } from '.';

describe('PageLayout', () => {
  it('renders', () => {
    const { getByText } = render(
      <PageLayout header={'header'} footer={'footer'}>
        foo
      </PageLayout>
    );
    expect(getByText(/header/)).toBeInTheDocument();
    expect(getByText(/footer/)).toBeInTheDocument();
    expect(getByText('foo')).toBeInTheDocument();
  });
});
