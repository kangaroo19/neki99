import AppRouter from 'routes/AppRouter'
import Layout from './layout/Layout'

export default function Main() {
  return (
    <Layout>
      <Layout.Background />
      <Layout.WindowRender />
      <Layout.TaskBar />
      <AppRouter />
    </Layout>
  )
}
