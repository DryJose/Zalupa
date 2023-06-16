import { PokemonItemContainer } from './styles'
//type
import { PokemonItemProps } from './types'

export const PokemonItem: React.FC<PokemonItemProps> = ({ children }) => {
    return <PokemonItemContainer>{children}</PokemonItemContainer>
}
