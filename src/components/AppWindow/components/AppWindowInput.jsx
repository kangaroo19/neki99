import { TextInput } from 'react95'
import styled from 'styled-components'

export default function AppWindowInput({ width, rows, placeholder, multiline }) {
  return <TextInputStlyed rows={rows} placeholder={placeholder} width={width} multiline={multiline} />
}

const TextInputStlyed = styled(TextInput)`
  width: ${props => props.width};
`
