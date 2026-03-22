import AppRouter from 'routes/AppRouter'
import Layout from './layout/Layout'
import ReactFloatingProfile from 'react-floating-profile'

export default function Main() {
  const githubApiKey = process.env.REACT_APP_GITHUB_API_KEY
  return (
    <Layout>
      <Layout.Background />
      <Layout.WindowRender />
      <Layout.TaskBar />
      <AppRouter />
      <ReactFloatingProfile
        userName="kangaroo19" // required
        accessToken={githubApiKey} // 환경변수 값 전달
        pinnedRepoArr={['neki99', 'react-floating-profile']}
        location="top-right"
      />
    </Layout>
  )
}
