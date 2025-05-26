import AppRouter from 'routes/AppRouter'
import Layout from './layout/Layout'
import ReactFloatingProfile from 'react-floating-profile'

export default function Main() {
  return (
    <Layout>
      <Layout.Background />
      <Layout.WindowRender />
      <Layout.TaskBar />
      <AppRouter />
      <ReactFloatingProfile
        userName="kangaroo19" // required
        // 💡 accessToken is not required, but it's recommended to avoid GitHub API rate limits.
        location="top-right"
      />
    </Layout>
  )
}
