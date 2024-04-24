/* eslint-disable */

import { useQuery, useMutation } from '@tanstack/react-query'
import { db } from '../../firebase'
import { collection, doc, addDoc, getDocs, query, where, orderBy } from 'firebase/firestore'
import getCurrentDate from 'utils/getCurrentDate'

export const getAllBlogList = async () => {
  const result = []
  try {
    const q = query(collection(db, 'blog'), orderBy('createdAt', 'desc'))
    const querySnapshot = await getDocs(q)

    querySnapshot.forEach(item => {
      result.push({ ...item.data(), id: item.id })
    })
    return result
  } catch (error) {
    console.error('Error fetching document:', error)
    throw error
  }
}

const postBlogItem = async data => {
  await addDoc(collection(db, 'blog'), {
    category: data.category,
    content: data.content,
    title: data.title,
    summary: data.summary,
    createdAt: getCurrentDate(),
    id: null,
  })
}

export const useBlogQuery = () => {
  return useQuery({
    queryKey: ['blogList'],
    queryFn: getAllBlogList,
  })
}
export const useBlogItemMutation = () => {
  return useMutation({
    mutationFn: postBlogItem,
  })
}
