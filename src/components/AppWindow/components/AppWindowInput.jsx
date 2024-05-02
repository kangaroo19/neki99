/* eslint-disable */

import { TextInput } from 'react95'
import styled from 'styled-components'

export default function AppWindowInput({ width, rows, placeholder, multiline, registerFn, password }) {
  return (
    <TextInputStlyed
      type={password && 'password'}
      {...registerFn}
      rows={rows}
      placeholder={placeholder}
      width={width}
      multiline={multiline}
    />
  )
}

const TextInputStlyed = styled(TextInput)`
  width: ${props => props.width};

  > textarea,
  input {
    @media screen and (max-width: 600px) {
      font-size: 0.8rem;
    }
  }
`
