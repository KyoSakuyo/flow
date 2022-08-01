import './styles.css'
import 'react-photo-view/dist/react-photo-view.css'

import { LiteralProvider } from '@literal-ui/core'
import { MDXProvider } from '@mdx-js/react'
import { supabaseClient } from '@supabase/auth-helpers-nextjs'
import { UserProvider } from '@supabase/auth-helpers-react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { RecoilRoot } from 'recoil'

import { H1, H2, Layout as AppLayout } from '../components'
import { Layout as PageLayout } from '../layout/Layout'

const components = {
  h1: H1,
  h2: H2,
}

export default function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()
  const Layout = pathname === '/' ? AppLayout : PageLayout

  return (
    <UserProvider supabaseClient={supabaseClient}>
      <LiteralProvider>
        <MDXProvider components={components}>
          <RecoilRoot>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </RecoilRoot>
        </MDXProvider>
      </LiteralProvider>
    </UserProvider>
  )
}
