import React from 'react';
import styled from 'styled-components';
import { ComponentContainer} from '../shared/commonCss';
import { RepeatSong, ShufflePlaylist, SwitchDevice } from './Icons';
import { ActionButton } from './Buttons';

export interface SongActionsProps {
  onClickRepeat: () => void;
  onClickShuffle: () => void;
  onClickSwitch: () => void;
}

const Container = styled(ComponentContainer)`
  flex-shrink: 0;
`;

export const SongActions: React.FC<SongActionsProps> = ({ onClickRepeat, onClickShuffle, onClickSwitch,  }) => (
  <Container>
    <ActionButton icon={RepeatSong} onClick={onClickRepeat}/>
    <ActionButton icon={ShufflePlaylist} onClick={onClickShuffle}/>
    <ActionButton icon={SwitchDevice} onClick={onClickSwitch}/>
  </Container>
);
