import { FC, memo } from 'react'
import useLogic from './logic'
import { DashboardContent, PostContainer , Cards } from './styles'
import Card from "../../components/card"
const Dashboard: FC = () => {
  const { isLoading, posts } = useLogic()

  if (isLoading) {
    return <div>CARGANDO....</div>
  }

  return (
    <DashboardContent>
      <PostContainer>
        <Cards>    
          {posts.map((post, index) => (
          <Card key={index} post={post} />
        ))}
        </Cards>

      </PostContainer>
    </DashboardContent>
  )
}

export default memo(Dashboard)
