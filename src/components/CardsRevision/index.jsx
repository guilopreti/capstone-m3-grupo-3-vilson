import {
  Container,
  ImgContainer,
  TemeContainer,
  TextContainer,
  TitleTextContainer,
  UserDateContainer,
} from './style'
import PaisagemImg from '../../assets/image/paisagem.jpg'

const CardsRevision = () => {
  return (
    <Container>
      <ImgContainer>
        <img src={PaisagemImg} alt='' />
      </ImgContainer>
      <TextContainer>
        <UserDateContainer>
          <span>Usuário</span>
          <p>feb 12</p>
        </UserDateContainer>
        <TitleTextContainer>
          <h3>Lorem ipsum dolor sit amet</h3>
        </TitleTextContainer>
        <TemeContainer>
          <span>Tema</span>
        </TemeContainer>
      </TextContainer>
    </Container>
  )
}

export default CardsRevision
