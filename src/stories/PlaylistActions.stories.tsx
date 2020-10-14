import React from 'react';
import { Meta, Story } from '@storybook/react';
import { PlaylistActions, PlaylistActionsProps } from '../components/PlaylistActions';
import { playlistControlsArgs } from "../shared/arguments";

export default {
  title: 'Components/Playlist Actions',
  component: PlaylistActions,
} as Meta;

const Template: Story<PlaylistActionsProps> = (args) => <PlaylistActions {...args} />;

export const Default = Template.bind({});
Default.args = playlistControlsArgs;
