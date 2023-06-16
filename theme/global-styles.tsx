import { css, Global } from '@emotion/react'
import emotionNormalize from 'emotion-normalize'
// local libs
import { theme } from 'theme'

export const globalStyles = (
 <Global
  styles={css`
     @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;600&family=Rubik:wght@400;600&display=swap');
     ${emotionNormalize}
     html,
     body {
        padding: 0;
        margin: 0;
        min-height: 100vh;
        font-family: Rubik, sans-serif;
        line-height: 1.5;
        scroll-behavior: smooth;
        background-color: ${theme.colors.secondary};
        background-image: url('/bg.png');
        background-repeat: no-repeat;
        background-position-x: right;
        background-position-y: center;
    }

    html,
    body,
    button,
    input,
    textarea {
        font-family: Rubik, sans-serif;
    }

    * {
        box-sizing: border-box;
    }
    `}
 />
)

