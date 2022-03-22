import { Container, TitleContainer } from './style'
import HeaderHome from '../../components/HeaderHome'
import MenuNav from '../../components/MenuNav'
import ListCardsRevision from '../../components/ListCardsRevision'
const RevisionPage = () => {
  return (
    <>
      <HeaderHome />
      <MenuNav />
      <Container>
        <div>
          <TitleContainer>
            <h2>Artigos para revisão:</h2>
          </TitleContainer>
          <ListCardsRevision />
        </div>
      </Container>
    </>
  )
}

export default RevisionPage
