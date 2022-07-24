import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PageLayout } from '.';

export default {
  title: 'PageLayout',
  component: PageLayout,
} as ComponentMeta<typeof PageLayout>;

const Template: ComponentStory<typeof PageLayout> = (args) => (
  <PageLayout {...args}></PageLayout>
);

export const Base = Template.bind({});

Base.args = {
  header: (
    <div
      style={{
        background: 'red',
        color: 'white',
        padding: '1.5em 2.5em',
        textAlign: 'center',
      }}
    >
      Header
    </div>
  ),
  sider: {
    isEnabled: true,
    node: (
      <div
        style={{
          alignItems: 'center',
          background: 'yellow',
          display: 'flex',
          flex: '1',
          justifyContent: 'center',
        }}
      >
        Aside
      </div>
    ),
  },
  children: (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
      }}
    >
      Content
    </div>
  ),
  footer: {
    isEnabled: true,
    node: (
      <div
        style={{
          background: 'blue',
          color: 'white',
          padding: '0.75em 1.25em',
          textAlign: 'center',
        }}
      >
        Footer
      </div>
    ),
  },
};
