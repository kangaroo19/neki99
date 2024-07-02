/* eslint-disable */

import AppWindow from 'components/AppWindow/AppWindow'
import QuillEditor from './components/QuillEditor'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { useBlogItemMutation } from 'utils/query/useBlogMutation'
import { useLocation, useNavigate } from 'react-router-dom'

// const options = ['React', 'JavaScript', 'Other'].map((label, index) => ({
//   value: index + 1,
//   label,
// }))

export default function TextEdit() {
  const method = useForm()
  const location = useLocation()
  const updateData = location.state
  console.log(updateData)
  const navigate = useNavigate()
  const { mutate } = useBlogItemMutation()
  const onClickSubmitButton = (method, data) => {
    mutate(
      {
        method: method,
        data: data,
      },
      {
        onSuccess: () => {
          navigate('/blog')
        },
      },
    )
  }
  return (
    <FormProvider {...method}>
      <Controller
        name="category" // 폼의 이름
        control={method.control}
        defaultValue={updateData && updateData.category} // 기본값 설정
        render={({ field }) => (
          <select {...field}>
            <option value="">선택하세요</option>
            <option value="react">리액트</option>
            <option value="javascript">자바스크립트</option>
            <option value="other">기타</option>
          </select>
        )}
      />
      <AppWindow.Input
        width="100%"
        placeholder="제목을 작성해 주세요"
        registerFn={method.register('title', { value: updateData?.title })}
      />
      <AppWindow.Input
        width="100%"
        placeholder="요약을 작성해 주세요"
        registerFn={method.register('summary', { value: updateData?.summary })}
      />
      <QuillEditor updateData={updateData?.content}/>
      <AppWindow.Button onClick={method.handleSubmit(data => onClickSubmitButton('post', data))}>전송</AppWindow.Button>
    </FormProvider>
  )
}
