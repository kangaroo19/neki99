/* eslint-disable */

import { useQuery, useMutation } from '@tanstack/react-query'
import { db } from '../../firebase'
import { collection, doc, addDoc, getDocs, query, where, orderBy } from 'firebase/firestore'

const fetchGuestBookItem = async () => {
  const result = []
  try {
    const q = query(collection(db, 'guestBook'), orderBy('createdAt', 'desc'))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach(item => {
      result.push(item.data())
    })
    return result
  } catch (error) {
    console.error('Error fetching document:', error)
    throw error
  }
}

const postGuestBookItem = async data => {
  await addDoc(collection(db, 'guestBook'), {
    writer: data.writer,
    content: data.content,
    createdAt: data.createdAt,
  })
}

export const useGuestBookQuery = () => {
  return useQuery({
    queryKey: ['guestbook'],
    queryFn: fetchGuestBookItem,
  })
}

export const useGuestBookMutation = () => {
  return useMutation({
    mutationFn: postGuestBookItem,
  })
}
