import styled from 'styled-components';

export const List = styled.ul``;
export const Item = styled.li`
  color: ${p => (p.completed ? 'green' : 'black')};
`;

/* background-color: ${props => props.backgroundColor};
  transform: ${props => props.isActive && 'scale(1.2)'}; */
