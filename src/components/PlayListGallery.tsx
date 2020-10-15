import React from 'react';
import styled from 'styled-components';
import { ComponentContainer, TextBold, TextLight, baseSpacing } from '../shared/commonCss';
import { PreviousSong, NextSong } from './Icons';
import { DragButton } from './Buttons';

export type PlayListProps = {
  songImageUrl: string;
  songTitle: string;
  albumName: string;
  artist: string;
}

const PlayListContainer = styled(ComponentContainer)`
  display: flex;
  align-items: center;
`;

const SongImageContainer = styled.div`
  width: 82px;
  height: 82px;
  margin: 0 ${baseSpacing};
  border-radius: 10px;
`;

const SongImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const PlayList: React.FC<PlayListProps> = ({ songImageUrl, songTitle, albumName, artist }) => (
  <PlayListContainer>
    <DragButton icon={PreviousSong}/>
    <SongImageContainer>
      <SongImage src={songImageUrl} alt={`${songTitle} album image`}/>
    </SongImageContainer>
    <div>
      <TextBold>{songTitle}</TextBold>
      <TextLight>{albumName} | {artist}</TextLight>
    </div>
    <DragButton icon={NextSong}/>
  </PlayListContainer>
);
