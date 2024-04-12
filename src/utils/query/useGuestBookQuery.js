/* eslint-disable */

import { useQuery } from '@tanstack/react-query'
import { db } from '../../firebase'
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'

const fetchGuestBookItem = async () => {
  const result = []
  try {
    const q = query(collection(db, 'guestBook'))
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
export const useGuestBookQuery = () => {
  return useQuery({
    queryKey: ['guestbook'],
    queryFn: fetchGuestBookItem,
  })
}
