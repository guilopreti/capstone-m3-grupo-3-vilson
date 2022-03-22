import HeaderHome from '../../components/HeaderHome'
import MenuNav from '../../components/MenuNav'
import Paisagem from '../../assets/image/paisagem.jpg'
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
  UserVoteContainer,
} from './style'
import { AiFillDislike, AiFillLike } from 'react-icons/ai'

const RevisionPostPage = () => {
  return (
    <>
      <HeaderHome />
      <MenuNav />
      <Container>
        <div>
          <HeaderPost>
            <DateTemaContainer>
              <TemaContainer>
                <span>tema</span>
              </TemaContainer>
              <span>feb 17</span>
            </DateTemaContainer>
            <TitleContainer>
              <h3>Mussum Ipsum, cacilds vidis litro abertis.</h3>
              <p>Sugerido e escrito por Usuário</p>
            </TitleContainer>
          </HeaderPost>
          <ImgTextContainer>
            <ImgContainer>
              <img src={Paisagem} alt='image' />
            </ImgContainer>
            <TextContainer>
              has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.has been
              the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged.
            </TextContainer>
          </ImgTextContainer>
          <FontContainer>
            <span>
              Fonte: <span>link</span>
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
