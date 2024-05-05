/*eslint-disable */

import { useRef, useState } from 'react'
import { uploadBytes, getDownloadURL, ref } from 'firebase/storage'
import { storage } from '../../../firebase'
import { imageConverter } from 'upload-images-converter'

const useImageHandler = () => {
  const [imageUrl, setImageUrl] = useState('')
  const quillRef = useRef(null)

  const imageHandler = () => {
    const input = document.createElement('input')
    input.setAttribute('type', 'file')
    input.setAttribute('accept', 'image/*')
    input.click()
    input.addEventListener('change', async () => {
      const editor = quillRef.current.getEditor()
      const file = await imageConverter({ files: [input.files[0]] })
      const range = editor.getSelection(true)
      try {
        // 파일명을 "image/Date.now()"로 저장
        const storageRef = ref(storage, `image/${Date.now()}`)
        // Firebase Method : uploadBytes, getDownloadURL
        await uploadBytes(storageRef, file[0]).then(snapshot => {
          getDownloadURL(snapshot.ref).then(url => {
            // 이미지 URL 에디터에 삽입
            editor.insertEmbed(range.index, 'image', url)
            // URL 삽입 후 커서를 이미지 뒷 칸으로 이동
            editor.setSelection(range.index + 1)
            console.log('url 확인', url)
            setImageUrl(url)
          })
        })
      } catch (error) {
        console.log(error)
      }
    })
  }

  return { imageHandler, quillRef, imageUrl }
}

export default useImageHandler
