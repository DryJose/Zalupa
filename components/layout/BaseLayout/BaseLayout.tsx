import React from 'react'
// local libs
import { BaseLayoutContainer } from './styles'
//types
import { BaseLayoutProps } from './types'

export const BaseLayout = ({ children }: BaseLayoutProps) => {
    return <BaseLayoutContainer>{children}</BaseLayoutContainer>
}