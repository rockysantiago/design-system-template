import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Base = Template.bind({});

Base.args = {
  illustrativePurpose: 'For illustrative purpose only',
  isIllustrativePurposeVisible: true,
  disclaimerTitle: 'Disclaimer',
  isDisclaimerTitleVisible: true,
};
