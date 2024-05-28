/* eslint-disable */

import { ThemeProvider } from 'styled-components'
import original from 'react95/dist/themes/original'
import { useAppWindowRender } from 'utils/zustand/useAppWindowRender'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import useEscapeKey from 'utils/hook/useEsacpeKey'
import { Suspense, lazy } from 'react'

const Main = lazy(() => import('components/Main'))
const SuspenseMain = lazy(() => import('components/SuspenseMain'))
const queryClient = new QueryClient()

export default function App() {
  const { closeAllWindow } = useAppWindowRender()
  useEscapeKey(closeAllWindow) // esc키 입력 시 모든창 close
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={original}>
        <Suspense fallback={<SuspenseMain />}>
          <Main />
        </Suspense>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
