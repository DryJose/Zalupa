import styled from '@emotion/styled'

export const FooterContainer = styled.div`
display: flex;
flex-direction: column;
margin-top: auto;
`

export const FooterBlock = styled.div`
display: flex;
justify-content: space-between;
`

export const FooterTitle = styled.div`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.m};
  line-height: 26px;
  margin-bottom: ${({ theme }) => theme.intends.m};

  color: #${({ theme }) => theme.colors.primary};
`

export const FooterText = styled.div`
  color: #${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.s};
` 
