import { createContext, useState } from 'react'
import { toast } from 'react-toastify'
import api from '../../services/api'

export const RevisionPostContext = createContext()

export const RevisionPostProvider = ({ children }) => {
  const [revisionPosts, setRevisionPosts] = useState([])
  const token = JSON.parse(localStorage.getItem('@CapstoneM3:userLogin'))

  const handleDeleteArticleRevision = (postId, history) => {
    api
      .delete(`/accept/${postId}`, {
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
        },
      })
      .then((response) => {
        toast.success('Revisão deletada com sucesso')
        history.push('/revision')
      })
  }

  const handleApprovedAticleRevision = (post, history) => {
    api
      .post(
        '/posts',
        {
          title: post.title,
          text: post.text,
          font: post.font,
          theme: post.theme,
          date: post.date,
          primaryImage: post.primaryImage,
          secondaryImages: post.secondaryImages,
          votes: post.votes,
          media: post.media,
          userId: post.userId,
        },
        {
          headers: {
            Authorization: `Bearer ${token.accessToken}`,
          },
        }
      )
      .then((response) => {
        api.delete(`/accept/${post.id}`, {
          headers: {
            Authorization: `Bearer ${token.accessToken}`,
          },
        })
        toast.success('Revisão aprovada com sucesso')
        history.push('/revision')
      })
  }

  return (
    <RevisionPostContext.Provider
      value={{
        revisionPosts,
        setRevisionPosts,
        handleDeleteArticleRevision,
        handleApprovedAticleRevision,
      }}
    >
      {children}
    </RevisionPostContext.Provider>
  )
}
