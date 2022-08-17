import React from 'react';
import { render } from '@testing-library/react';

import { PageLayout } from '.';
import { ProviderTest } from '../../tests';

describe('PageLayout', () => {
  it('renders', () => {
    const { getByText } = render(
      <ProviderTest>
        <PageLayout
          header={'header'}
          sider={{ isEnabled: true, node: 'sider' }}
          footer={{ isEnabled: true, node: 'footer' }}
        >
          fooo
        </PageLayout>
      </ProviderTest>
    );
    expect(getByText(/header/)).toBeInTheDocument();
    expect(getByText(/sider/)).toBeInTheDocument();
    expect(getByText(/footer/)).toBeInTheDocument();
    expect(getByText('fooo')).toBeInTheDocument();
  });

  it('should not render sider and footer if isEnabled is false', () => {
    const { getByText, queryByText } = render(
      <ProviderTest>
        <PageLayout
          header={'header'}
          sider={{ isEnabled: false, node: 'sider' }}
          footer={{ isEnabled: false, node: 'footer' }}
        >
          bar
        </PageLayout>
      </ProviderTest>
    );
    expect(queryByText(/sider/)).not.toBeInTheDocument();
    expect(queryByText(/footer/)).not.toBeInTheDocument();
    expect(getByText('bar')).toBeInTheDocument();
  });
});
