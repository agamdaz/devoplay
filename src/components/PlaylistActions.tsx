import React from 'react';
import styled from 'styled-components';
import { ComponentContainer } from '../shared/commonCss';
import { ExpandPlayList, LikeSong, DislikeSong } from './Icons';
import { ActionButton } from './Buttons';

export interface PlaylistActionsProps {
  onClickPlaylist: () => void;
  onClickLike: () => void;
  onClickDislike: () => void;
}

const Container = styled(ComponentContainer)`
  flex-shrink: 0;
`;

export const PlaylistActions: React.FC<PlaylistActionsProps> = ({ onClickPlaylist, onClickLike, onClickDislike,  }) => (
  <Container>
    <ActionButton icon={ExpandPlayList} onClick={onClickPlaylist}/>
    <ActionButton icon={LikeSong} onClick={onClickLike}/>
    <ActionButton icon={DislikeSong} onClick={onClickDislike}/>
  </Container>
);
