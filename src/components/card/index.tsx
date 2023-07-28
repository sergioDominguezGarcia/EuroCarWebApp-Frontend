import { FC, memo } from 'react'
import { Props } from './types'
import { CardContent, CardHeader, CardFooter } from './styles'
import Button from "../button"



const Card: FC<Props> = ({post}) =>{



  return (
    <CardContent>
      <CardHeader>{post.name}</CardHeader>

      <CardFooter>
        {post.type}
        {post.model}
        {post.plateNumber}
        
        <Button />
      </CardFooter>
    </CardContent>
  );
}

export default memo(Card)