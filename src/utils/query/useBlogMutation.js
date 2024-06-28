/* eslint-disable */

import { useMutation } from '@tanstack/react-query'
import { db } from '../../firebase'
import { collection, doc, addDoc, getDocs, query, where, orderBy, setDoc, deleteDoc } from 'firebase/firestore'
import getCurrentDate from 'utils/getCurrentDate'
import getThumnailImg from 'utils/getThumbnailImg'

const mutateBlog = data => {
  switch (data.method) {
    case 'post':
      return postBlogItem(data.data)
    case 'delete':
      return deleteBlogItem(data.data)
    case 'update':
      return updateBlogItem(data)
  }
}

const postBlogItem = async data => {
  const blogRef = doc(collection(db, 'blog'))
  await setDoc(blogRef, {
    category: data.category,
    content: data.content,
    title: data.title,
    img: getThumnailImg(data.content),
    summary: data.summary,
    createdAt: getCurrentDate(),
    id: blogRef.id,
  })
}

const deleteBlogItem = async data => {
  console.log(data)
  await deleteDoc(doc(db, 'blog', data))
}

const updateBlogItem = data => {
  console.log(data)
}

export const useBlogItemMutation = () => {
  return useMutation({
    mutationKey: ['blogMutate'],
    mutationFn: data => mutateBlog(data),
  })
}
