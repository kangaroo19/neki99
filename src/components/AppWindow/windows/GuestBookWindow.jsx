import { useAppWindowRender } from 'utils/zustand/useAppWindowRender'
import AppWindow from '../AppWindow'
import styled from 'styled-components'
import Markdown from 'react-markdown'
import { WindowContent } from 'react95'

const dataObj = [
  { content: '잘봤어요~~~~', writer: '지존123', createdAt: '2020-03-23 23:12:02' },
  { content: '잘봤어요~~~~', writer: '지존123', createdAt: '2020-03-23 23:12:02' },
  { content: '잘봤어요~~~~', writer: '지존123', createdAt: '2020-03-23 23:12:02' },
  { content: '잘봤어요~~~~', writer: '지존123', createdAt: '2020-03-23 23:12:02' },
  { content: '잘봤어요~~~~', writer: '지존123', createdAt: '2020-03-23 23:12:02' },
  { content: '잘봤어요~~~~', writer: '지존123', createdAt: '2020-03-23 23:12:02' },
  { content: '잘봤어요~~~~', writer: '지존123', createdAt: '2020-03-23 23:12:02' },
]

export default function GuestBookWindow() {
  const { onClickWindowClose } = useAppWindowRender()

  return (
    <AppWindow width="800px">
      <AppWindow.Header onClick={() => onClickWindowClose('guestBookWindow')}>방명록</AppWindow.Header>
      <AppWindow.HeadMenu />
      <AppWindow.Content>
        <AppWindow.ContentSection height="300px">
          <AppWindow.ScrollView width="100%" background="white">
            {dataObj.map(item => (
              <GuestBookItemContainer>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>{item.writer}</span>
                  <span>{item.createdAt}</span>
                </div>
                <Markdown>{item.content}</Markdown>
              </GuestBookItemContainer>
            ))}
          </AppWindow.ScrollView>
        </AppWindow.ContentSection>
      </AppWindow.Content>
      <AppWindow.Footer>
        <AppWindow.Input width="50%" placeholder="이름을 작성해 주세요" />
        <AppWindow.Input width="100%" rows={4} placeholder="방명록을 작성해 주세요" multiline />
        <SubmitButtonContainer>
          <AppWindow.Button width="20%">등록</AppWindow.Button>
        </SubmitButtonContainer>
      </AppWindow.Footer>
    </AppWindow>
  )
}

const GuestBookItemContainer = styled.div`
  padding: 5px;
  border-bottom: 2px solid;
  border-color: rgb(223, 223, 223) rgb(10, 10, 10) rgb(10, 10, 10) rgb(223, 223, 223);
`

const SubmitButtonContainer = styled(WindowContent)`
  display: flex;
  justify-content: flex-end;
  padding-right: 0;
`
