import React from 'react';
import styled, { css } from 'styled-components';
import { ComponentContainer, textBold, textLight, baseSpacing } from '../shared/commonCss';
import { PreviousSong, NextSong } from './Icons';
import { ActionButton } from './Buttons';

export type PlayListProps = {
  songImageUrl: string;
  songTitle: string;
  albumName: string;
  artist: string;
}

const PlayListContainer = styled(ComponentContainer)`
  display: flex;
  flex-grow: 1;
  width: 50%;
  align-items: center;
`;

const SongImageContainer = styled.div`
  flex-shrink: 0;
  width: 82px;
  height: 82px;
  margin: 0 ${baseSpacing};
  border-radius: 10px;
`;

const textEllipsis = css`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const linkHover = css`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;


const SongImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
const SongTitle = styled.a`
  ${textBold}
  ${textEllipsis}
  ${linkHover}
`;

const AlbumInfo = styled.a`
  ${textLight}
  ${textEllipsis}
  ${linkHover}
`;

export const PlayList: React.FC<PlayListProps> = ({ songImageUrl, songTitle, albumName, artist }) => (
  <PlayListContainer>
    <ActionButton icon={PreviousSong} onClick={() => {}}/>
    <SongImageContainer>
      <SongImage src={songImageUrl} alt={`${songTitle} album image`}/>
    </SongImageContainer>
    <div style={{overflow: "hidden"}}>
      <SongTitle>{songTitle}</SongTitle>
      <AlbumInfo>{albumName} | {artist}</AlbumInfo>
    </div>
    <div style={{marginLeft:"auto"}}>
      <ActionButton icon={NextSong} onClick={() => {}}/>
    </div>
  </PlayListContainer>
);
