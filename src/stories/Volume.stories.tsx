import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Volume, VolumeProps } from '../components/Volume';
import { volumeArgs } from "../shared/arguments";

export default {
  title: 'Components/Song Volume',
  component: Volume,
} as Meta;

const Template: Story<VolumeProps> = (args) => <Volume {...args} />;

export const Default = Template.bind({});
Default.args = volumeArgs;
