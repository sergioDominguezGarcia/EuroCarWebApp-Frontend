import React from 'react'
import { FC, memo } from 'react'
import { Props } from './types'
import { CardContent, CardHeader, CardFooter } from './styles'




const Card: FC<Props> = ({post}) =>{



  return (
    <CardContent>
      <CardHeader>{post.name}</CardHeader>

      <CardFooter>
        {post.type}
        {post.model}
        {post.plateNumber}
      </CardFooter>
    </CardContent>
  )
}

export default memo(Card)