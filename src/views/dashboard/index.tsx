import { FC, memo } from 'react'
import useLogic from './logic'
import { DashboardContent, PostContainer , Cards } from './styles'
import Card from "../../components/card"
import Button from '../../components/button'



const Dashboard: FC = () => {
  
  const { isLoading, posts } = useLogic()

  if (isLoading) {
    return <div>CARGANDO....</div>
  }

  return (
    <DashboardContent>
      <Button>Profile</Button>

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
