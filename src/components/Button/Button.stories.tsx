import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '..';

export default { title: 'Button', component: Button } as ComponentMeta<
  typeof Button
>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Base = Template.bind({});

Base.args = {
  children: 'Back',
  disabled: false,
  variant: undefined,
  $textColor: '',
};

export const Primary = Template.bind({});

Primary.args = {
  children: 'Next',
  disabled: false,
  variant: 'primary',
  $textColor: '#fff',
};
