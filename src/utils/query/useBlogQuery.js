/* eslint-disable */

import { useQuery, useMutation } from '@tanstack/react-query'
import { db } from '../../firebase'
import { collection, doc, addDoc, getDocs, query, where, orderBy } from 'firebase/firestore'
import getCurrentDate from 'utils/getCurrentDate'

const getBlogList = category => {
  switch (category.label) {
    case 'all':
      return getAllBlogList()
    case 'React':
      return getReactBlogList()
    case 'JavaScript':
      return getJavaScriptBlogList()
    default:
      return getOtherBlogList()
  }
}

export const getAllBlogList = async () => {
  console.log('모든거')
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
const getReactBlogList = async () => {
  console.log('리액트 블로그 리스트')
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
const getJavaScriptBlogList = async () => {
  console.log('자바스크립트 블로그 리스트')
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
const getOtherBlogList = async () => {
  console.log('다른 블로그 리스트')
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

export const useBlogQuery = category => {
  console.log(category)
  return useQuery({
    queryKey: ['blogList', category],
    queryFn: () => getBlogList(category),
  })
}
export const useBlogItemMutation = () => {
  return useMutation({
    mutationFn: postBlogItem,
  })
}
