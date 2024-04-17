import { GroupBox, Select } from 'react95'

const options = ['리액트', '자바스크립트', '기타']

export default function AppWindowSelect() {
  return (
    <GroupBox label="Category">
      <Select options={options} />
    </GroupBox>
  )
}
