import React from 'react';
import { render, screen } from '@testing-library/react';

import { Button } from '..';
import { ProviderTest } from '../../tests';

describe('Button', () => {
  it('renders', () => {
    render(
      <ProviderTest>
        <Button disabled={false}>Hello World</Button>
      </ProviderTest>
    );
    expect(screen.queryByText('Hello World')).toBeInTheDocument();
  });
});
