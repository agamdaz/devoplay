import React from 'react';
import styled from 'styled-components';
import {
    ComponentContainer,
    ControlContainer,
    ControlLabelContainer,
    ControlPosition,
    brandPrimary,
    lightGrey,
    textLight,
} from '../shared/commonCss';
import { Pause } from './Icons';
import { DragButton } from './Buttons';

export interface SongProgressProps {
    timeTotal: number;
    timeElapsed: number;
}

function millisecondsToTimer(millis: number) {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds.toFixed(0)}`;
}

function getProgress(total: number, elapsed: number) {
    return `${((elapsed / total) * 100).toFixed(0)}%`;
}

export const ControlScale = styled.div`
  max-width: 396px;
`;

const Timer = styled.span`
    ${textLight}
`;

export const SongProgress: React.FC<SongProgressProps> = ({ timeTotal, timeElapsed}) => (
  <ComponentContainer>
    <ControlLabelContainer>
      <Timer>{millisecondsToTimer(timeElapsed)}</Timer>
      <Timer>{millisecondsToTimer(timeTotal)}</Timer>
    </ControlLabelContainer>
    <ControlContainer>
      <ControlPosition style={{left: getProgress(timeTotal, timeElapsed)}}>
        <DragButton icon={Pause}/>
      </ControlPosition>
      <ControlScale>
        <svg width="100%" height="30" viewBox="0 0 100% 30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <clipPath id="progress-clip-path">
              <path
                d="M399.832,30V10.161H404V30ZM391.5,30V7.258h4.168V30Zm-8.337,0V15h4.168V30Zm-8.337,0V0h4.168V30Zm-8.337,0V0h4.169V30Zm-8.337,0V10.161h4.169V30Zm-8.337,0V7.258h4.169V30Zm-8.337,0V15h4.169V30Zm-8.336,0V2.419h4.168V30ZM324.8,30V10.161h4.168V30Zm-8.337,0V13.064h4.168V30Zm-8.337,0V15h4.168V30Zm-8.337,0V4.354h4.168V30Zm-8.337,0V10.161h4.169V30Zm-8.337,0V2.419h4.169V30Zm-8.337,0V13.064h4.169V30Zm-8.337,0V20.806h4.169V30Zm-8.336,0V15h4.168V30Zm-8.337,0V15h4.168V30Zm-8.337,0V2.419H245.6V30Zm-8.337,0V10.161h4.168V30Zm-8.337,0V7.742h4.168V30Zm-8.337,0V15.484h4.169V30Zm-8.337,0V.484h4.169V30Zm-8.337,0V13.064h4.169V30Zm-8.337,0V2.419h4.169V30Zm-8.336,0V10.161h4.168V30Zm-8.337,0V4.354h4.168V30ZM166.4,30V10.161h4.168V30Zm-8.337,0V15h4.168V30Zm-8.337,0V15.484h4.168V30Zm-8.337,0V2.419h4.169V30Zm-8.337,0V10.161h4.169V30Zm-8.337,0V7.258h4.169V30Zm-8.337,0V15h4.169V30Zm-8.336,0V0h4.168V30Zm-8.337,0V0h4.168V30Zm-8.337,0V10.161h4.168V30Zm-8.337,0V7.258H87.2V30Zm-8.337,0V15h4.168V30Zm-8.337,0V2.419h4.169V30Zm-8.337,0V10.161H62.19V30Zm-8.337,0V13.064h4.169V30Zm-8.337,0V15h4.169V30Zm-8.336,0V4.354h4.168V30Zm-8.337,0V10.161h4.168V30Zm-8.337,0V2.419h4.168V30ZM8,30V13.064h4.168V30Z"
              />
            </clipPath>
          </defs>
          <g clipPath="url(#progress-clip-path)">
            <rect id="Right_scale_background" width="396" height="30" fill={lightGrey}/>
            <rect id="Left_scale_background" width={getProgress(timeTotal, timeElapsed)} height="30" fill={brandPrimary}/>
          </g>
        </svg>
      </ControlScale>
    </ControlContainer>
  </ComponentContainer>
);
