import React from 'react';
import { ComponentContainer} from '../shared/commonCss';
import { RepeatSong, ShufflePlaylist, SwitchDevice } from './Icons';
import { ActionButton } from './ActionButton';

export interface SongActionsProps {
  onClickRepeat: () => void;
  onClickShuffle: () => void;
  onClickSwitch: () => void;
}

export const SongActions: React.FC<SongActionsProps> = ({ onClickRepeat, onClickShuffle, onClickSwitch,  }) => (
  <ComponentContainer>
    <ActionButton icon={RepeatSong} onClick={onClickRepeat}/>
    <ActionButton icon={ShufflePlaylist} onClick={onClickShuffle}/>
    <ActionButton icon={SwitchDevice} onClick={onClickSwitch}/>
  </ComponentContainer>
);
