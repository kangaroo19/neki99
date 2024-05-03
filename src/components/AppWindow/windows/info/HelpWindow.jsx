/*eslint-disable */

import AppWindow from 'components/AppWindow/AppWindow'
import { Frame } from 'react95'
import styled from 'styled-components'
import { useAppWindowRender } from 'utils/zustand/useAppWindowRender'

export default function HelpWindow() {
  const { windowRenderObj, onClickWindowClose, onClickWindow } = useAppWindowRender()

  return (
    <AppWindow
      width="400px"
      top="0%"
      left="0%"
      zIndex={windowRenderObj.loginWindow.zIndexValue + 9}
      onClick={() => onClickWindow('helpWindow')}
    >
      <AppWindow.Header
        onClick={() => {
          onClickWindowClose('helpWindow')
        }}
      >
        이 사이트는..
      </AppWindow.Header>
      <AppWindow.Content>
        <Frames style={{ width: '100%' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum obcaecati provident repudiandae unde cum
          facilis dicta praesentium expedita soluta similique impedit recusandae ipsa enim quasi nulla, laudantium
          explicabo beatae? Qui, magnam sequi. Ex illum iusto tempora. Deserunt ea asperiores eum eligendi omnis nihil,
          fugit praesentium quaerat iure architecto dolorum numquam? Recusandae modi iusto dolore corrupti placeat
          reiciendis, nobis consequuntur. Fuga libero doloribus, obcaecati laboriosam eligendi tempore quae blanditiis
          dignissimos molestiae soluta dolore ullam labore architecto atque quisquam quaerat placeat vitae in saepe
          assumenda id quos temporibus? Libero et magni quia, ipsam, nemo esse officiis recusandae sequi rem at
          doloribus temporibus.
        </Frames>
      </AppWindow.Content>
    </AppWindow>
  )
}
const Frames = styled(Frame)`
  padding: 30px;
`
