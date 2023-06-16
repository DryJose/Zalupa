import axios from 'axios'
import { SWRConfig } from "swr"
import { ThemeProvider } from '@emotion/react'
import { appWithTranslation } from 'next-i18next'
//local libs
import { BaseLayout } from 'components/layout/BaseLayout'
import { Header } from 'components/layout/Header'
import { Footer } from "components/layout/Footer"
import { globalStyles } from 'theme/global-styles'
import { theme } from 'theme'
//types
import { AppProps } from 'next/app'

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL

const fetcher = (url: string) => axios.get<unknown>(url).then((res) => res.data);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      {globalStyles}

      <SWRConfig
        value={{
          fetcher: fetcher,
        }}
      >
          <BaseLayout>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </BaseLayout>
      </SWRConfig>
    </ThemeProvider>
  );
}

export default appWithTranslation (MyApp)
