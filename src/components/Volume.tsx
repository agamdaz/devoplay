import React from 'react';
import { ComponentContainer, ControlContainer, ControlLabelContainer, TextLight, ControlButton, ControlScale } from "../shared/commonCss";

export interface VolumeProps {
  volume: number;
}

export const Volume: React.FC<VolumeProps> = ({ volume }) => (
  <ComponentContainer>
    <ControlLabelContainer>
      <TextLight>{volume}%</TextLight>
    </ControlLabelContainer>
    <ControlContainer>
      <ControlButton style={{left: `${volume}%`}}>
        <svg id="icon-volume" width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
          <circle cx="22" cy="22" r="22" fill="#0D0D0E" fillOpacity="0.7"/>
          <path
            d="M13.436-07.728a21.943,21.943,0,0,1-6.993-4.715,22.006,22.006,0,0,1-3.463-4.49l-.007-.013,0-.005a22.1,22.1,0,0,1-1.24-2.484A21.847,21.847,0,0,1,0-27.721c0-.093,0-.185,0-.278a21.859,21.859,0,0,1,1.729-8.563,21.91,21.91,0,0,1,4.714-6.993,22.014,22.014,0,0,1,3.89-3.1,21.957,21.957,0,0,1,3.1-1.614A21.874,21.874,0,0,1,22-50a21.874,21.874,0,0,1,8.564,1.729,21.943,21.943,0,0,1,6.993,4.715,21.961,21.961,0,0,1,3.437,4.445,21.928,21.928,0,0,1,1.277,2.548A21.847,21.847,0,0,1,44-28.139v.14a21.862,21.862,0,0,1-1.729,8.563,21.92,21.92,0,0,1-4.714,6.993,22.042,22.042,0,0,1-3.871,3.089,21.951,21.951,0,0,1-3.123,1.626A21.874,21.874,0,0,1,22-06,21.874,21.874,0,0,1,13.436-07.728Zm.779-38.7a19.933,19.933,0,0,0-6.358,4.286,19.931,19.931,0,0,0-4.286,6.358A19.862,19.862,0,0,0,2-28v.126a19.887,19.887,0,0,0,1.572,7.659,19.938,19.938,0,0,0,4.286,6.357,19.917,19.917,0,0,0,6.357,4.286,19.82,19.82,0,0,0,6.61,1.538l.042,0h.024c.368.02.738.031,1.109.031a19.889,19.889,0,0,0,7.785-1.572,19.931,19.931,0,0,0,6.358-4.286,19.932,19.932,0,0,0,4.286-6.358A19.866,19.866,0,0,0,42-28c0-.085,0-.169,0-.253a19.843,19.843,0,0,0-1.57-7.532,19.931,19.931,0,0,0-4.286-6.358,19.9,19.9,0,0,0-6.357-4.285,19.8,19.8,0,0,0-6.61-1.539l-.042,0h-.024q-.552-.03-1.11-.03A19.872,19.872,0,0,0,14.215-46.427ZM17.924-24H10v-8h7.923L29-41v26Z"
            transform="translate(0 50)"
            fill="#fff"
          />
        </svg>
      </ControlButton>
      <ControlScale>
        <svg width="110" height="30" viewBox="0 0 110 30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <clipPath id="volume-clip-path">
              <path
                d="M-1210.793-1683v-30H-1207v30Zm-7.586,0v-28h3.794v28Zm-7.586,0v-26h3.793v26Zm-7.586,0v-24h3.794v24Zm-7.585,0v-22h3.793v22Zm-7.586,0v-20h3.793v20Zm-7.586,0v-18h3.793v18Zm-7.586,0v-16h3.792v16Zm-7.586,0v-14h3.792v14Zm-7.586,0v-12h3.793v12Zm-7.586,0v-10h3.793v10Zm-7.586,0v-8h3.793v8Zm-7.586,0v-6h3.793v6Zm-7.586,0v-4h3.793v4Zm-7.586,0v-2h3.793v2Z"
                transform="translate(2907 3050)"
              />
            </clipPath>
          </defs>
          <g transform="translate(-1590 -1337)" clipPath="url(#volume-clip-path)">
            <rect width="110" height="30" transform="translate(1590 1337)" fill="#767676"/>
            <rect width={volume} height="30" transform="translate(1590 1337)" fill="#bc6c82"/>
          </g>
        </svg>
      </ControlScale>
    </ControlContainer>
  </ComponentContainer>
);
