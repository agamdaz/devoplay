import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SongActions, SongActionsProps } from '../components/SongActions';
import { songControlsArgs } from "../shared/arguments";

export default {
  title: 'Components/Song Actions',
  component: SongActions,
} as Meta;

const Template: Story<SongActionsProps> = (args) => <SongActions {...args} />;

export const Default = Template.bind({});
Default.args = songControlsArgs;
