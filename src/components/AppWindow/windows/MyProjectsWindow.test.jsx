import { fireEvent, screen } from '@testing-library/react'
import { render } from '@testing-library/react'
import MyProjectsWindow from './MyProjectsWindow'

jest.mock('../AppWindow', () => {
  const AppWindow = ({ children }) => <div>{children}</div>
  AppWindow.Header = ({ children }) => <div>{children}</div>
  AppWindow.Content = ({ children }) => <div>{children}</div>
  AppWindow.ContentTitle = ({ text }) => <h1>{text}</h1>
  AppWindow.ContentSection = ({ children }) => <section>{children}</section>
  AppWindow.ScrollView = ({ children }) => <div>{children}</div>

  return AppWindow
})

jest.mock('utils/zustand/useAppWindowRender', () => ({
  useAppWindowRender: () => ({
    onClickWindowClose: jest.fn(),
    onClickWindow: jest.fn(),
    windowRenderObj: {
      myProjectWindow: {
        zIndexValue: 1,
      },
    },
  }),
}))

test('shows daily listening project details when its tab is selected', () => {
  render(<MyProjectsWindow />)

  fireEvent.click(screen.getByRole('button', { name: '오늘의 리스닝' }))

  expect(screen.getByText('앱인토스 미니앱')).toBeTruthy()
  expect(screen.getByText('하루 1문제 학습 플로우')).toBeTruthy()
  expect(screen.getByText('TDS Mobile')).toBeTruthy()
})
