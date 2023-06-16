import styled from '@emotion/styled'

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.s};
  color: ${({ theme }) => theme.colors.basic};
  border: none;
  font-weight: 600;
  cursor: pointer;

  padding: 8px 30px;
  /* padding-top: 8px;
padding-left: 30px;
padding-right: 30px;
padding-bottom: 8px; */

&:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
`;
