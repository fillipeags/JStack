import styled from 'styled-components';

export const Container = styled.header`
  background: ${({ theme }) => theme.headerBackgroundColor};
  height: 100px;
  display: flex;
  align-items: center;
  padding: ${({ theme }) => `0  ${theme.spacing.large}`};
  border-radius: ${ ({ theme }) => theme.borderRadius};
  justify-content: space-between;

  button {
    font-size: ${({ theme }) => theme.spacing.medium};
    cursor: pointer;
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;
