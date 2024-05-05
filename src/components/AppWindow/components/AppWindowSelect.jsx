/* eslint-disable */

import { GroupBox, Select } from 'react95'
import styled from 'styled-components'

export default function AppWindowSelect({ registerFn, onChange, options, width, height }) {
  return (
    <GroupBoxStyled label="Category">
      <Select {...registerFn} options={options} width={width} height={height} onChange={onChange} />
    </GroupBoxStyled>
  )
}

const GroupBoxStyled = styled(GroupBox)`
  width: ${props => props.width};
  height: ${props => props.height};
  & ul {
    margin: 0;
  }
`
