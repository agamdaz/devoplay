import React from 'react';
import styled from 'styled-components';
import { PlayList, PlayListProps } from './PlayListGallery';
import { PlaylistActions, PlaylistActionsProps } from './PlaylistActions';
import { SongProgress, SongProgressProps } from './SongProgress';
import { SongActions, SongActionsProps } from './SongActions';
import { VolumeControl, VolumeProps } from './Volume';
import { baseSpacing } from '../shared/commonCss';

export type PlayerBarProps = PlayListProps & PlaylistActionsProps & SongProgressProps & SongActionsProps & VolumeProps;

const Container = styled.main`
  display: flex;
  background: linear-gradient(to right, #0d0d0e, #767676);
`;

const SongInfo = styled.section`
  width: 40%;
  display: flex;
  align-items: center;
  padding: ${baseSpacing} 0;
`;

const SongControl = styled.section`
  width: 60%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: ${baseSpacing};
  background-color: #0d0d0e;
  border-bottom-left-radius: 36px
`;

export const PlayerBar: React.FC<PlayerBarProps> = (props) => (
  <Container>
    <SongInfo>
      <PlayList albumName={props.albumName} artist={props.artist} songImageUrl={props.songImageUrl} songTitle={props.songTitle}/>
      <PlaylistActions onClickPlaylist={props.onClickPlaylist} onClickLike={props.onClickLike} onClickDislike={props.onClickDislike}/>
    </SongInfo>
    <SongControl>
      <SongProgress timeTotal={props.timeTotal} timeElapsed={props.timeElapsed}/>
      <SongActions onClickRepeat={props.onClickRepeat} onClickShuffle={props.onClickShuffle} onClickSwitch={props.onClickSwitch}/>
      <VolumeControl volume={props.volume}/>
    </SongControl>
  </Container>
);
