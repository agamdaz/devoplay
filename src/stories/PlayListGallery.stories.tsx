import React from 'react';
import { Meta, Story } from '@storybook/react';
import { PlayList, PlayListProps } from "../components/PlayListGallery";
import { playlistGalleryArgs } from "../shared/arguments";

export default {
  title: 'Components/PlayList Gallery',
  component: PlayList,
} as Meta;

const Template: Story<PlayListProps> = (args) => <PlayList {...args} />;

export const Default = Template.bind({});
Default.args = playlistGalleryArgs;
