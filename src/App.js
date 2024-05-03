import { ThemeProvider } from 'styled-components'
import original from 'react95/dist/themes/original'
import Layout from './components/layout/Layout'
import { useAppWindowRender } from 'utils/zustand/useAppWindowRender'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import useEscapeKey from 'utils/hook/useEsacpeKey'
import AppRouter from 'routes/AppRouter'

const queryClient = new QueryClient()

export default function App() {
  const { closeAllWindow } = useAppWindowRender()
  useEscapeKey(closeAllWindow) // esc키 입력 시 모든창 close
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={original}>
        <Layout>
          <Layout.Background />
          <Layout.WindowRender />
          <Layout.TaskBar />
          <AppRouter />
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
