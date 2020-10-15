import React from 'react';
import styled from 'styled-components';
import { brandPrimary, baseSpacing, button } from '../shared/commonCss';

type ActionButtonProps = {
  icon: any,
  onClick: () => void,
};

type DragButtonProps = {
  icon: any,
};

const Button = styled.button`
  ${button}
  margin: 0 ${baseSpacing};

  &:hover svg path {
    fill: ${brandPrimary};
  }
`;

export const ActionButton: React.FC<ActionButtonProps> = ({ icon, onClick }) => <Button onClick={onClick}>{icon}</Button>

export const DragButton: React.FC<DragButtonProps> = ({ icon }) => <Button>{icon}</Button>