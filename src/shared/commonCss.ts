import styled, { createGlobalStyle, css } from 'styled-components';

export const brandPrimary = "#bc6c82";
export const darkGrey = "#0d0d0e";
export const lightGrey = "#767676";

export const baseSpacing = "10px";

export const actionIconSize = "16px";
export const dragIconSize = "32px";

export const scaleMargin = dragIconSize;

export const bodyStyles = css`
  background-color: ${darkGrey};
`;

export const containers = css`
  padding: 0 ${baseSpacing};
`;

export const fontFamily = css`
  margin: 0;
  color: #fff;
  font-family: 'Poppins', sans-serif;
`;

export const textBold = css`
  ${fontFamily}
  font-size: 1em;
  font-weight: 600;

`;

export const textLight = css`
  ${fontFamily}
  font-size: .87em;
  font-weight: 400;
`;

export const button = css`
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1;
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const ComponentContainer = styled.div`
  padding: 0 ${baseSpacing};
`;

export const ControlContainer = styled.div`
  position: relative;
  margin: 0 22px;
`;

export const ControlPosition = styled.div`
  position: absolute;
  margin-left: -26px;
`;

export const ControlLabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const GlobalStyle = createGlobalStyle`
 body {
   ${bodyStyles}
 }
`;
