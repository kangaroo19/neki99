import BottomBar from './bottomBar/BottomBar'
import Background from './background/Background'
import WindowRender from './windowRender/WindowRender'

export default function Layout({ children }) {
  return <div>{children}</div>
}

Layout.TaskBar = BottomBar
Layout.Background = Background
Layout.WindowRender = WindowRender
