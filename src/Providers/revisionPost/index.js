import { createContext, useEffect, useState } from 'react'
import api from '../../services/api'

export const RevisionPostContext = createContext()

export const RevisionPostProvider = ({ children }) => {
  const [revisionPosts, setRevisionPosts] = useState([])
  const token = JSON.parse(localStorage.getItem('@CapstoneM3:userLogin')) || ''

  useEffect(() => {
    api
      .get('/accept', {
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
        },
      })
      .then((response) => setRevisionPosts(...revisionPosts, response.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <RevisionPostContext.Provider value={{ revisionPosts }}>
      {children}
    </RevisionPostContext.Provider>
  )
}
