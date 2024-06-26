/*eslint-disable */

import AppWindow from 'components/AppWindow/AppWindow'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { useAppWindowRender } from 'utils/zustand/useAppWindowRender'
import { useAuthStore } from 'utils/zustand/useAuthStore'

export default function LoginWindow() {
  const { onClickWindowClose, onClickWindow, windowRenderObj } = useAppWindowRender()
  const { setIsAuthTrue } = useAuthStore()
  const { register, handleSubmit } = useForm()
  const onSubmitLoginBtn = (data, event) => {
    if (data.password === process.env.REACT_APP_AUTH) {
      // 비번 맞았을 때
      setIsAuthTrue()
      onClickWindowClose('loginWindow', event)
    }
  }

  return (
    <AppWindow
      width="300px"
      top="70%"
      left="10%"
      zIndex={windowRenderObj.loginWindow.zIndexValue + 9}
      onClick={() => onClickWindow('loginWindow')}
    >
      <AppWindow.Header
        onClick={event => {
          onClickWindowClose('loginWindow', event)
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
    </AppWindow>
  )
}

const ButtonContainer = styled.form`
  padding: 5px 0;
`
