import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SongProgress, SongProgressProps } from '../components/SongProgress';
import { songProgressArgs } from "../shared/arguments";

export default {
  title: 'Components/Song Progress',
  component: SongProgress,
} as Meta;

const Template: Story<SongProgressProps> = (args) => <SongProgress {...args} />;

export const Default = Template.bind({});
Default.args = songProgressArgs;
