import React from 'react'
import { PokemonListProps } from "./types";
import { PokemonItem } from '../PokemonItem';

import { PokemonListContainer } from "./styles";

export const PokemonList = ({ pokemonList }: PokemonListProps) => {
    return (
        <PokemonListContainer>
        {pokemonList.map(({ name }) => (
        <PokemonItem key={name}>{name}</PokemonItem>
        ))}
        </PokemonListContainer>
    );
};
