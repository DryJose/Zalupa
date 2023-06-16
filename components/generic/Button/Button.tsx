import { ButtonContainer } from './styles'
//types
import { ButtonProps } from './types'

export const Button = ({ children, ...rest }: ButtonProps) => {
    return <ButtonContainer{...rest}>{children}</ButtonContainer>
}
