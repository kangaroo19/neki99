/* eslint-disable */

import { GroupBox, Select } from 'react95'
import styled from 'styled-components'

export default function AppWindowSelect({ registerFn, options, width, height }) {
  return (
    <GroupBoxStyled label="Category">
      <Select {...registerFn} options={options} defaultValue={1} width={width} height={height} />
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
