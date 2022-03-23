import HeaderHome from '../../components/HeaderHome'
import MenuNav from '../../components/MenuNav'
import {
  Button,
  Container,
  DateTemaContainer,
  FeedBackContainer,
  FontContainer,
  HeaderPost,
  ImgContainer,
  ImgTextContainer,
  TemaContainer,
  TextContainer,
  TitleContainer,
} from './style'
import { useEffect, useState, useContext } from 'react'
import api from '../../services/api'
import { UserContext } from '../../Providers/users'

const RevisionPostPage = () => {
  const [idPostRevision] = useState(
    JSON.parse(localStorage.getItem('@Capstone:postIdRevision'))
  )
  const [postRevision, setPostRevision] = useState({})

  const token = JSON.parse(localStorage.getItem('@CapstoneM3:userLogin'))

  const { listUsers } = useContext(UserContext)
  const findUser = listUsers.find((user) => {
    return user.id === postRevision.userId
  })

  useEffect(() => {
    api
      .get(`/accept/${idPostRevision}`, {
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
        },
      })
      .then((response) => setPostRevision(response.data))
  }, [])

  return (
    <>
      <HeaderHome />
      <MenuNav />
      <Container>
        <div>
          <HeaderPost>
            <DateTemaContainer>
              <TemaContainer>
                <span>{postRevision.theme}</span>
              </TemaContainer>
              <span>{postRevision.date}</span>
            </DateTemaContainer>
            <TitleContainer>
              <h3>{postRevision.title}</h3>
              <p>Sugerido e escrito por {findUser?.username}</p>
            </TitleContainer>
          </HeaderPost>
          <ImgTextContainer>
            <ImgContainer>
              <img src={postRevision.primaryImage} alt={postRevision.theme} />
            </ImgContainer>
            <TextContainer>{postRevision.text}</TextContainer>
          </ImgTextContainer>
          <FontContainer>
            <span>
              Fonte: <span>{postRevision.font}</span>
            </span>
          </FontContainer>
          <FeedBackContainer>
            <h3>Digite o feedback para o usúario:</h3>
            <textarea placeholder='Digite seu feedback aqui'></textarea>
            <div>
              <Button approved>Aprovar</Button>
              <Button>Recusar</Button>
            </div>
          </FeedBackContainer>
        </div>
      </Container>
    </>
  )
}

export default RevisionPostPage
