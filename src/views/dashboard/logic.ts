import { useCallback, useEffect, useState } from 'react'
import { Post } from '../../models/Post'
import { getPosts } from '../../services/api/post'

const useLogic = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const handleSetPosts = useCallback(async () => {
    const postsList = await getPosts()
    setPosts(postsList)
    setIsLoading(false)
  }, [])
  useEffect(() => {
    handleSetPosts()
  }, [handleSetPosts])
  console.log(posts)
  return {
    posts,
    isLoading,
  }
}

  export default useLogic