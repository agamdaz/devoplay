import React from 'react';
import { PlayList, PlayListProps } from './PlayListGallery';
import { PlaylistActions, PlaylistActionsProps } from './PlaylistActions';
import { SongProgress, SongProgressProps } from './SongProgress';
import { SongActions, SongActionsProps } from './SongActions';
import { VolumeControl, VolumeProps } from './Volume';
import styled from 'styled-components';

export type PlayerBarProps = PlayListProps & PlaylistActionsProps & SongProgressProps & SongActionsProps & VolumeProps;

const Container = styled.div`
  display: flex;
  background: linear-gradient(to right, #0d0d0e, #767676);
`;

const SongInfo = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  padding: 20px;
`;

const SongControl = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #0d0d0e;
  border-bottom-left-radius: 36px
`;

export const PlayerBar: React.FC<PlayerBarProps> = (props) => (
  <main>
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
  </main>
);
