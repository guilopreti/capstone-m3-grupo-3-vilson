import { Container } from './style'
import CardsRevision from '../CardsRevision'
import { useContext } from 'react'
import { RevisionPostContext } from '../../Providers/revisionPost'

const ListCardsRevision = () => {
  const { revisionPosts } = useContext(RevisionPostContext)
  return (
    <Container>
      <ul>
        {revisionPosts.map((post) => {
          return <CardsRevision post={post} key={post.id} />
        })}
      </ul>
    </Container>
  )
}

export default ListCardsRevision
