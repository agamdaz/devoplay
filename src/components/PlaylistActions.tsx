import React from 'react';
import { ComponentContainer } from '../shared/commonCss';
import { ExpandPlayList, LikeSong, DislikeSong } from './Icons';
import { ActionButton } from './ActionButton';

export interface PlaylistActionsProps {
  onClickPlaylist: () => void;
  onClickLike: () => void;
  onClickDislike: () => void;
}

export const PlaylistActions: React.FC<PlaylistActionsProps> = ({ onClickPlaylist, onClickLike, onClickDislike,  }) => (
  <ComponentContainer>
      <ActionButton icon={ExpandPlayList} onClick={onClickPlaylist}/>
      <ActionButton icon={LikeSong} onClick={onClickLike}/>
      <ActionButton icon={DislikeSong} onClick={onClickDislike}/>
  </ComponentContainer>
);
