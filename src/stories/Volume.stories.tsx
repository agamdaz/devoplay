import React from 'react';
import { Meta, Story } from '@storybook/react';
import { VolumeControl, VolumeProps } from '../components/Volume';
import { volumeArgs } from "../shared/arguments";

export default {
  title: 'Components/Song Volume',
  component: VolumeControl,
} as Meta;

const Template: Story<VolumeProps> = (args) => <VolumeControl {...args} />;

export const Default = Template.bind({});
Default.args = volumeArgs;
