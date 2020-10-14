import React from 'react';
import { ComponentContainer, ControlContainer, ControlLabelContainer, TextLight, ControlButton, ControlScale } from "../shared/commonCss";

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

export const SongProgress: React.FC<SongProgressProps> = ({ timeTotal, timeElapsed}) => (
  <ComponentContainer>
    <ControlLabelContainer>
      <TextLight>{millisecondsToTimer(timeElapsed)}</TextLight>
      <TextLight>{millisecondsToTimer(timeTotal)}</TextLight>
    </ControlLabelContainer>
    <ControlContainer>
      <ControlButton style={{left: getProgress(timeTotal, timeElapsed)}}>
        <svg id="icon-volume" width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
          <circle cx="22" cy="22" r="22" fill="#0D0D0E" fillOpacity="0.7"/>
          <path
            d="M13.436-1607.729a21.943,21.943,0,0,1-6.993-4.715,21.981,21.981,0,0,1-3.463-4.49l-.008-.013,0-.006a21.991,21.991,0,0,1-1.24-2.484A21.842,21.842,0,0,1,0-1627.722q0-.139,0-.278a21.858,21.858,0,0,1,1.729-8.563,21.92,21.92,0,0,1,4.714-6.993,22.014,22.014,0,0,1,3.89-3.1,21.944,21.944,0,0,1,3.1-1.614A21.874,21.874,0,0,1,22-1650a21.874,21.874,0,0,1,8.564,1.729,21.943,21.943,0,0,1,6.993,4.715,21.985,21.985,0,0,1,3.437,4.445,21.983,21.983,0,0,1,1.277,2.548A21.85,21.85,0,0,1,44-1628.139q0,.07,0,.139a21.859,21.859,0,0,1-1.729,8.563,21.921,21.921,0,0,1-4.714,6.993,22.025,22.025,0,0,1-3.871,3.089,21.945,21.945,0,0,1-3.123,1.626A21.874,21.874,0,0,1,22-1606,21.874,21.874,0,0,1,13.436-1607.729ZM22-1608a19.874,19.874,0,0,0,7.785-1.572,19.931,19.931,0,0,0,6.358-4.286,19.931,19.931,0,0,0,4.286-6.358A19.866,19.866,0,0,0,42-1628q0-.127,0-.253a19.86,19.86,0,0,0-1.571-7.532,19.932,19.932,0,0,0-4.285-6.357,19.93,19.93,0,0,0-6.357-4.285,19.821,19.821,0,0,0-6.61-1.539l-.042,0H23.11q-.552-.03-1.11-.03a19.871,19.871,0,0,0-7.785,1.572,19.931,19.931,0,0,0-6.358,4.286,19.931,19.931,0,0,0-4.286,6.358A19.865,19.865,0,0,0,2-1628c0,.042,0,.084,0,.126a19.867,19.867,0,0,0,1.572,7.659,19.93,19.93,0,0,0,4.285,6.357,19.931,19.931,0,0,0,6.357,4.285,19.824,19.824,0,0,0,6.61,1.539l.042,0h.025Q21.443-1608,22-1608Zm3-10v-20h4v20Zm-10,0v-20h4v20Z"
            transform="translate(0 1650)"
            fill="#fff"
          />
        </svg>
      </ControlButton>
      <ControlScale>
        <svg width="396" height="30" viewBox="0 0 396 30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <clipPath id="progress-clip-path">
              <path
                d="M399.832,30V10.161H404V30ZM391.5,30V7.258h4.168V30Zm-8.337,0V15h4.168V30Zm-8.337,0V0h4.168V30Zm-8.337,0V0h4.169V30Zm-8.337,0V10.161h4.169V30Zm-8.337,0V7.258h4.169V30Zm-8.337,0V15h4.169V30Zm-8.336,0V2.419h4.168V30ZM324.8,30V10.161h4.168V30Zm-8.337,0V13.064h4.168V30Zm-8.337,0V15h4.168V30Zm-8.337,0V4.354h4.168V30Zm-8.337,0V10.161h4.169V30Zm-8.337,0V2.419h4.169V30Zm-8.337,0V13.064h4.169V30Zm-8.337,0V20.806h4.169V30Zm-8.336,0V15h4.168V30Zm-8.337,0V15h4.168V30Zm-8.337,0V2.419H245.6V30Zm-8.337,0V10.161h4.168V30Zm-8.337,0V7.742h4.168V30Zm-8.337,0V15.484h4.169V30Zm-8.337,0V.484h4.169V30Zm-8.337,0V13.064h4.169V30Zm-8.337,0V2.419h4.169V30Zm-8.336,0V10.161h4.168V30Zm-8.337,0V4.354h4.168V30ZM166.4,30V10.161h4.168V30Zm-8.337,0V15h4.168V30Zm-8.337,0V15.484h4.168V30Zm-8.337,0V2.419h4.169V30Zm-8.337,0V10.161h4.169V30Zm-8.337,0V7.258h4.169V30Zm-8.337,0V15h4.169V30Zm-8.336,0V0h4.168V30Zm-8.337,0V0h4.168V30Zm-8.337,0V10.161h4.168V30Zm-8.337,0V7.258H87.2V30Zm-8.337,0V15h4.168V30Zm-8.337,0V2.419h4.169V30Zm-8.337,0V10.161H62.19V30Zm-8.337,0V13.064h4.169V30Zm-8.337,0V15h4.169V30Zm-8.336,0V4.354h4.168V30Zm-8.337,0V10.161h4.168V30Zm-8.337,0V2.419h4.168V30ZM8,30V13.064h4.168V30Z"
              />
            </clipPath>
          </defs>
          <g clipPath="url(#progress-clip-path)">
            <rect id="Right_scale_background" width="396" height="30" fill="#767676"/>
            <rect id="Left_scale_background" width={getProgress(timeTotal, timeElapsed)} height="30" fill="#bc6c82"/>
          </g>
        </svg>
      </ControlScale>
    </ControlContainer>
  </ComponentContainer>
);
