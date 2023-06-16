import styled from "@emotion/styled"
//types
import { HeaderContainerProps } from "./types"

export const HeaderContainer = styled.div<HeaderContainerProps>`
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.intends.s};
  margin-bottom: ${({ theme }) => theme.intends.m};
  position: sticky;
  top: 0;

  ${({ isSrolled, theme }) =>
    !isSrolled
      ? null
      : `
   backdrop-filter: blur(5px);
   box-shadow: ${theme.boxShadows[1]}
   `};
`;

export const LinkList = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  align-items: center;
`

export const ListItem = styled.li`
  margin-right: 20px;

  &:last-of-type {
    margin-right: 0;
  }
`;

export const Link = styled.a`
  padding: 20px;
  text-decoration: none;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    transition: color 0.2s;
  }
`;
