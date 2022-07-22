import React from 'react';
import { render } from '@testing-library/react';
import { PageLayout } from '.';

describe('PageLayout', () => {
  it('renders', () => {
    const { getByText } = render(<PageLayout>foo</PageLayout>);
    expect(getByText('foo')).toBeInTheDocument();
  });
});
