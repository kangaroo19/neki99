import BottomBar from './bottomBar/BottomBar'
import WindowContainer from './windowContainer/WindowContainer'

export default function Layout({ children }) {
  return <div>{children}</div>
}

Layout.TaskBar = BottomBar
Layout.WindowContainer = WindowContainer
