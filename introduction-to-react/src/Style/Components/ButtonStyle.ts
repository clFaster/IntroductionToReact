import styled from 'styled-components';

export const Button = styled.div`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #AEF6C7;
  color: #000;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 1rem;
  margin-right: 1rem;
  user-select: none;

  &:hover {
    background-color: #5B8266;
  }
`;