import React from 'react';
import styled from 'styled-components';
import { baseSpacing, button_xs } from '../shared/commonCss';

type ButtonProps = {
  icon: any,
  onClick: () => void,
};

const Button = styled.button`
  ${button_xs}
  margin: 0 ${baseSpacing};
`;

export const ActionButton: React.FC<ButtonProps> = ({ icon, onClick }) => <Button onClick={onClick}>{icon}</Button>