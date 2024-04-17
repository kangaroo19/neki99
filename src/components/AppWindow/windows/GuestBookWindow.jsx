/* eslint-disable */

import { useAppWindowRender } from 'utils/zustand/useAppWindowRender'
import { useGuestBookMutation, useGuestBookQuery } from 'utils/query/useGuestBookQuery'
import AppWindow from '../AppWindow'
import styled from 'styled-components'
import Markdown from 'react-markdown'
import { WindowContent } from 'react95'
import { useForm } from 'react-hook-form'
import getCurrentDate from 'utils/getCurrentDate'

export default function GuestBookWindow() {
  const { onClickWindowClose, windowRenderObj, onClickWindow } = useAppWindowRender()
  const { refetch, data, isLoading } = useGuestBookQuery()
  const { mutate } = useGuestBookMutation()
  const { register, handleSubmit, reset } = useForm()
  const onClickSubmitButton = data => {
    if (data.writer === '' || data.content === '') return
    data.createdAt = getCurrentDate() // 현재 시간 createdAt 프로퍼티에 할당
    mutate(data, {
      onSuccess: () => {
        reset({ content: '', writer: '' })
        refetch()
      },
    })
  }
  return (
    <AppWindow width="800px" top="5%" left="10%" zIndex={windowRenderObj.guestBookWindow.zIndexValue} onClick={() => onClickWindow('guestBookWindow')}>
      <AppWindow.Header onClick={() => onClickWindowClose('guestBookWindow')}>방명록</AppWindow.Header>
      <AppWindow.HeadMenu />
      <AppWindow.Content>
        <AppWindow.ContentSection height="200px">
          <AppWindow.ScrollView width="100%" background="white">
            {/* 방명록 리스트들 랜더링 추후 컴포넌트 따로 빼는게 가독성 면에서 더 나을듯한.. */}
            {!isLoading &&
              data.map(item => {
                return (
                  <GuestBookItemContainer>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>{item.writer}</span>
                      <span>{item.createdAt}</span>
                    </div>
                    <Markdown>{item.content}</Markdown>
                  </GuestBookItemContainer>
                )
              })}
          </AppWindow.ScrollView>
        </AppWindow.ContentSection>
      </AppWindow.Content>
      <AppWindow.Footer>
        {/* 방명록관련 인풋필드 및 버튼 */}
        <AppWindow.Input width="50%" placeholder="이름을 작성해 주세요" registerFn={register('writer')} />
        <AppWindow.Input width="100%" rows={4} placeholder="방명록을 작성해 주세요" multiline registerFn={register('content')} />
        <SubmitButtonContainer>
          <AppWindow.Button width="20%" onClick={handleSubmit(onClickSubmitButton)}>
            등록
          </AppWindow.Button>
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
