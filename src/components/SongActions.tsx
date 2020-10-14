import React from 'react';
import { ComponentContainer, ActionButton } from "../shared/commonCss";

export interface SongActionsProps {
  onClickRepeat: () => void;
  onClickShuffle: () => void;
  onClickSwitch: () => void;
}

export const SongActions: React.FC<SongActionsProps> = ({ onClickRepeat, onClickShuffle, onClickSwitch,  }) => (
  <ComponentContainer>
    <ActionButton onClick={onClickRepeat}>
      <svg id="icon-repeat" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20.6,23.65a1.2,1.2,0,0,1-.351-.849V20.7A11.989,11.989,0,0,1,0,12a1.2,1.2,0,0,1,2.4,0,9.6,9.6,0,0,0,16.565,6.6H16.05a1.2,1.2,0,1,1,0-2.4h5.4a1.2,1.2,0,0,1,1.2,1.2v5.4a1.2,1.2,0,0,1-2.049.849Zm1.35-10.8A1.2,1.2,0,0,1,21.6,12,9.595,9.595,0,0,0,5.036,5.4H7.95a1.2,1.2,0,1,1,0,2.4H2.55a1.2,1.2,0,0,1-1.2-1.2V1.2a1.2,1.2,0,1,1,2.4,0V3.295A11.994,11.994,0,0,1,24,12a1.2,1.2,0,0,1-2.049.849Z"
          transform="translate(0 0)"
          fill="#fff"
        />
      </svg>
    </ActionButton>
    <ActionButton onClick={onClickShuffle}>
      <svg id="icon-shuffle" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M.444,23.548a1.5,1.5,0,0,1,0-2.129l9.428-9.428L1.133,3.252A1.5,1.5,0,0,1,3.247,1.139L12,9.877,18.879,3H16.046a1.5,1.5,0,1,1,0-3h6.446a1.5,1.5,0,0,1,1.5,1.5v6.46a1.5,1.5,0,1,1-3,0V5.126L2.573,23.548a1.5,1.5,0,0,1-2.129,0Zm22.048.434h-6.46a1.5,1.5,0,1,1,0-3H18.85L14.7,16.818a1.505,1.505,0,1,1,2.129-2.129l4.167,4.182V16.009a1.5,1.5,0,1,1,3,0v6.309A1.5,1.5,0,0,1,22.5,23.983Z"
          fill="#fff"
        />
      </svg>
    </ActionButton>
    <ActionButton onClick={onClickSwitch}>
      <svg id="icon-switch" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M-1540.5-2864.5a2,2,0,0,1-2-2h-6v-2h3.5v-2h-5.5a2,2,0,0,1-2-2v-14a2,2,0,0,1,2-2h17a2,2,0,0,1,2,2v1h1a2,2,0,0,1,2,2v17a2,2,0,0,1-2,2Zm0-2h10v-17s-2.892.063-10,0Zm-2-2v-2h-.5v2Zm-8-4h8v-11a2,2,0,0,1,2-2h7v-1h-17Zm14,4a1,1,0,0,1,1-1,1,1,0,0,1,1,1,1,1,0,0,1-1,1A1,1,0,0,1-1536.5-2868.5Z"
          transform="translate(1552.5 2888.5)"
          fill="#fff"
        />
      </svg>
    </ActionButton>
  </ComponentContainer>
);
