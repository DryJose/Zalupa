import styled from '@emotion/styled'
//types
import { PokemonItemProps } from "./types";

export const PokemonItemContainer = styled.div<PokemonItemProps>`
display: flex;
justify-content: center;
align-items: center;
background-color: ${({ theme }) => theme.colors.basic};
width: 200px;
height: 80px;
box-shadow: ${({ theme }) => theme.boxShadows[1]};
color: ${({ theme }) => theme.colors.primary};
text-transform: uppercase;
border-radius: ${({ theme }) => theme.borderRadius.m};
transition: background-color 0.2;
font-size: 20px;
font-weight: bold;
cursor: pointer;

margin: 10px 10px;
/* margin-top: 10px;
margin-left: 10px;
margin-right: 10px;
margin-bottom: 10px; */

&:hover {
    background-color: ${({ theme }) => theme.colors.accent};
}
`
