/* eslint-disable */

import { useQuery, useMutation } from '@tanstack/react-query'
import { db } from '../../firebase'
import { collection, doc, addDoc, getDocs, query, where, orderBy, setDoc } from 'firebase/firestore'
import getCurrentDate from 'utils/getCurrentDate'
import getThumnailImg from 'utils/getThumbnailImg'

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
export const getBlogDetail = async id => {
  const q = query(collection(db, 'blog'), where('id', '==', id))
  const result = []

  const querySnapshot = await getDocs(q)
  querySnapshot.forEach(doc => {
    // doc.data() is never undefined for query doc snapshots
    result.push(doc.data())
  })
  return result[0]
}
export const getAllBlogList = async () => {
  // console.log('모든거')
  const result = []
  try {
    const q = query(collection(db, 'blog'), orderBy('createdAt', 'desc'))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach(item => {
      result.push({
        id: item.id,
        title: item.data().title,
        img: item.data().img, // 썸네일 이미지
        summary: item.data().summary,
      })
    })
    return result
  } catch (error) {
    console.error('Error fetching document:', error)
    throw error
  }
}
const getReactBlogList = async () => {
  // console.log('리액트 블로그 리스트')
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
  // console.log('자바스크립트 블로그 리스트')
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
  // console.log('다른 블로그 리스트')
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

export const useBlogQuery = category => {
  // console.log(category)
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

export const useGetBlogDetail = id => {
  return useQuery({
    queryKey: ['blogDetail', id],
    queryFn: () => getBlogDetail(id),
    enabled: false,
  })
}
// 블로그 리스트 전체 조회 시
// content까지 불러오는 비효율성 때문에
// 전체 조회 요청 시 원래는 모~든 필드 가져왓는데
// 필요한 필드만 가져오는 코드로 바꿈
// 블로그 생성 요청 시
// 썸네일 이미지 지정하여 전체 조회시 content자체를 불러올 일이 없게됨
