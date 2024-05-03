/*eslint-disable */

import { Dialog, Slide } from '@mui/material'
import AppWindow from 'components/AppWindow/AppWindow'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Window } from 'react95'
import styled from 'styled-components'
import { useAuthStore } from 'utils/zustand/useAuthStore'
import { useLoginModal } from 'utils/zustand/useLoginModal'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function LoginWindow() {
  const { isOpen, setIsOpenFalse } = useLoginModal()
  const [styleID, setStyleID] = useState('')
  const { setIsAuthTrue } = useAuthStore()
  const { register, handleSubmit } = useForm()
  const onSubmitLoginBtn = data => {
    if (data.password === process.env.REACT_APP_AUTH) {
      // 비번 맞았을 때
      setIsAuthTrue()
    }
    // } else {
    //   setStyleID('shaking-element') // 흔들리는 효과 적용
    //   setTimeout(() => {
    //     setStyleID('') // 일정 시간이 지난 후에 styleID 초기화
    //   }, 300)
    // }
  }

  return (
    <Dialog
      open={isOpen}
      TransitionComponent={Transition}
      keepMounted
      aria-describedby="alert-dialog-slide-description"
    >
      <Window>
        <AppWindow.Header
          onClick={() => {
            setIsOpenFalse()
          }}
        >
          로그인
        </AppWindow.Header>
        <AppWindow.Content>
          <ButtonContainer onSubmit={handleSubmit(onSubmitLoginBtn)}>
            <AppWindow.Input
              password
              width="100%"
              placeholder="패스워드를 입력해 주세요"
              registerFn={register('password')}
            />
            <AppWindow.Button width="100%" type="submit">
              확인
            </AppWindow.Button>
          </ButtonContainer>
        </AppWindow.Content>
      </Window>
    </Dialog>
  )
}

const ButtonContainer = styled.form`
  padding: 5px 0;
`
