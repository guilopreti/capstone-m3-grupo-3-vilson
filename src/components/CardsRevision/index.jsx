import {
  Container,
  ImgContainer,
  TemeContainer,
  TextContainer,
  TitleTextContainer,
  UserDateContainer,
} from './style'
import { useContext } from 'react'
import { UserContext } from '../../Providers/users'
import { useHistory } from 'react-router-dom'
import { NoteContainer } from '../CardNews/BigCard/styled'

const CardsRevision = ({ post }) => {
  const { listUsers } = useContext(UserContext)
  const history = useHistory()

  const findUser = listUsers.find((user) => {
    return user.id === post.userId
  })

  const handleOpenPostPage = (postId) => {
    localStorage.setItem('@Capstone:postIdRevision', postId)
    history.push('/postRevision')
  }

  return (
    <Container onClick={() => handleOpenPostPage(post.id)}>
      <ImgContainer>
        <img src={post.primaryImage} alt={post.theme} />
      </ImgContainer>
      <TextContainer>
        <UserDateContainer>
          <span>
            {findUser.username}{' '}
            {findUser.note && (
              <NoteContainer>{findUser.note.toFixed(2)}</NoteContainer>
            )}
          </span>
          <p>{post.date}</p>
        </UserDateContainer>
        <TitleTextContainer>
          <h3>{post.title}</h3>
        </TitleTextContainer>
        <TemeContainer>
          <span>{post.theme}</span>
        </TemeContainer>
      </TextContainer>
    </Container>
  )
}

export default CardsRevision
