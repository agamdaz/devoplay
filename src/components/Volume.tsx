import React from 'react';
import styled from 'styled-components';
import {
  ComponentContainer,
  ControlContainer,
  ControlLabelContainer,
  ControlPosition,
  lightGrey,
  brandPrimary,
  textLight,
  scaleMargin,
} from '../shared/commonCss';
import { Volume } from './Icons';
import { DragButton } from './Buttons';

export interface VolumeProps {
  volume: number;
}

const Container = styled(ComponentContainer)`
  max-width: calc(110px + ${scaleMargin});
`;

const Timer = styled.span`
    ${textLight}
`;

export const VolumeControl: React.FC<VolumeProps> = ({ volume }) => (
  <Container>
    <ControlLabelContainer>
      <Timer>{volume}%</Timer>
    </ControlLabelContainer>
    <ControlContainer>
      <ControlPosition style={{left: `${volume}%`}}>
        <DragButton icon={Volume}/>
      </ControlPosition>
      <div>
        <svg width="100%" height="30" viewBox="0 0 100% 30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <clipPath id="volume-clip-path">
              <path
                d="M-1210.793-1683v-30H-1207v30Zm-7.586,0v-28h3.794v28Zm-7.586,0v-26h3.793v26Zm-7.586,0v-24h3.794v24Zm-7.585,0v-22h3.793v22Zm-7.586,0v-20h3.793v20Zm-7.586,0v-18h3.793v18Zm-7.586,0v-16h3.792v16Zm-7.586,0v-14h3.792v14Zm-7.586,0v-12h3.793v12Zm-7.586,0v-10h3.793v10Zm-7.586,0v-8h3.793v8Zm-7.586,0v-6h3.793v6Zm-7.586,0v-4h3.793v4Zm-7.586,0v-2h3.793v2Z"
                transform="translate(2907 3050)"
              />
            </clipPath>
          </defs>
          <g transform="translate(-1590 -1337)" clipPath="url(#volume-clip-path)">
            <rect width="110" height="30" transform="translate(1590 1337)" fill={lightGrey}/>
            <rect width={volume} height="30" transform="translate(1590 1337)" fill={brandPrimary}/>
          </g>
        </svg>
      </div>
    </ControlContainer>
  </Container>
);
