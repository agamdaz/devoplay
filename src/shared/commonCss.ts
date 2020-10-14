import styled, {createGlobalStyle, css} from 'styled-components';

export const baseSpacing = "10px";

export const bodyStyles = css`
  background-color: #0D0D0E;
`;

export const containers = css`
  padding: 0 ${baseSpacing};
`;

export const fontFamily = css`
  margin: 0;
  color: #fff;
  font-family: 'Poppins', sans-serif;
`;

const button = css`
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

export const button_xs = css`
  ${button}
  width: 22px;
  height: 22px;
`;

export const button_xl = css`
  ${button}
  width: 44px;
  height: 44px;
`;

export const ComponentContainer = styled.div`
  padding: 0 ${baseSpacing};
`;

export const ControlContainer = styled.div`
  position: relative;
  margin: 0 22px;
`;

export const ControlButton = styled.button`
  ${button_xl}
  position: absolute;
  margin-left: -22px;
`;

export const ControlScale = styled.div`
  display: inline-block;
  margin: 5px 0;
`;

export const ControlLabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TextBold = styled.p`
  ${fontFamily}
  font-size: 1em;
  font-weight: 600;

`;

export const TextLight = styled.p`
  ${fontFamily}
  font-size: .87em;
  font-weight: 400;
`;

export const GlobalStyle = createGlobalStyle`
 body {
   ${bodyStyles}
 }
`;
