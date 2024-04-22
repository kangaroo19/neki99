/* eslint-disable */

import AppWindow from 'components/AppWindow/AppWindow'
import QuillEditor from './components/QuillEditor'
import { FormProvider, useForm } from 'react-hook-form'
import { useBlogItemMutation } from 'utils/query/useBlogQuery'

const options = ['React', 'JavaScript', 'Other'].map((label, index) => ({
  value: index + 1,
  label,
}))

export default function TextEdit() {
  const method = useForm()
  const { mutate } = useBlogItemMutation()
  const onClickSubmitButton = data => {
    mutate(data)
  }

  return (
    <FormProvider {...method}>
      <AppWindow.Select options={options} width="20%" registerFn={method.register('category')} />
      <AppWindow.Input width="100%" placeholder="제목을 작성해 주세요" registerFn={method.register('title')} />
      <AppWindow.Input width="100%" placeholder="요약을 작성해 주세요" registerFn={method.register('summary')} />
      <QuillEditor />
      <AppWindow.Button onClick={method.handleSubmit(onClickSubmitButton)}>전송</AppWindow.Button>
    </FormProvider>
  )
}
