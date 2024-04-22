/* eslint-disable */

import React, { useMemo, useRef, useState } from 'react'
import ReactQuill, { Quill } from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { storage } from '../../../../../firebase'
import { uploadBytes, getDownloadURL, ref } from 'firebase/storage'
import ImageResize from 'quill-image-resize'
import QuillImageDropAndPaste from 'quill-image-drop-and-paste'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import { useFormContext } from 'react-hook-form'
import useImageHandler from 'utils/hook/quill/useImageHandler'

Quill.register('modules/ImageResize', ImageResize)
Quill.register('modules/imageDropAndPaste', QuillImageDropAndPaste)

hljs.configure({
  languages: ['javascript', 'ruby', 'python', 'rust'],
})

export default function QuillEditor() {
  const { imageHandler, quillRef, imageUrl } = useImageHandler()

  // 이미지 핸들러

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          ['image', 'link', 'video', 'code-block'],
          [{ header: [1, 2, 3, false] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ color: [] }, { background: [] }],
          [{ list: 'ordered' }, { list: 'bullet' }],
        ],
        handlers: {
          image: imageHandler,
        },
      },
      syntax: {
        highlight: text => hljs.highlightAuto(text).value,
      },
      imageDropAndPaste: {
        // handler: imageDropHandler,
      },
      ImageResize: {
        parchment: Quill.import('parchment'),
        mopdules: ['Resize', 'DisplaySize'],
      },
    }
  }, [])

  const formats = ['header', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'image', 'code-block', 'list']
  const { getValues, setValue } = useFormContext()

  const handleChange = content => {
    setValue('content', content)
  }

  return (
    <div className="ql-snow">
      <ReactQuill
        className="ql-editor"
        ref={quillRef}
        theme="snow"
        placeholder="내용을 입력해주세요."
        onChange={handleChange}
        modules={modules}
        formats={formats}
        value={getValues('content')}
      />
    </div>
  )
}
