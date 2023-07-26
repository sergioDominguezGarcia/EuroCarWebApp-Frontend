import { FC, memo } from 'react'
import useLogic from './logic'
import { DashboardContent, PostContainer } from './styles'
import Card from "../../components/card"
const Dashboard: FC = () => {
  const { isLoading, posts } = useLogic()

  if (isLoading) {
    return <div>CARGANDO....</div>
  }

  return (
    <DashboardContent>
      <PostContainer>
        {posts.map((post, index) => (
          <Card key={index} post={post} />
        ))}
      </PostContainer>
    </DashboardContent>
  )
}

export default memo(Dashboard)
