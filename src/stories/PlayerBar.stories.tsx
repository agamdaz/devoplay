import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PlayerBar, PlayerBarProps } from '../components/PlayerBar';
import {
  playlistGalleryArgs,
  playlistControlsArgs,
  songProgressArgs,
  songControlsArgs,
  volumeArgs
} from "../shared/arguments";

export default {
  title: 'PlayerBar',
  component: PlayerBar,
} as Meta;

const Template: Story<PlayerBarProps> = (args) => <PlayerBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...playlistGalleryArgs,
  ...playlistControlsArgs,
  ...songProgressArgs,
  ...songControlsArgs,
  ...volumeArgs,
};
