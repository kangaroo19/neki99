/* eslint-disable */

import { useQuery, useMutation } from '@tanstack/react-query'
import { db } from '../../firebase'
import { collection, doc, addDoc, getDocs, query, where, orderBy } from 'firebase/firestore'

const getAllBLogList = async () => {
  const result = []
  try {
    const q = query(collection(db, 'blog'), orderBy('createdAt', 'desc'))
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


export const useBlogQuery = () => {
    return useQuery({
      queryKey: ['blogList'],
      queryFn: getAllBLogList,
    })
  }
  