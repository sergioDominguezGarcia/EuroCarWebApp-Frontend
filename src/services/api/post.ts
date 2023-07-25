import { Post, PostInput, normalizePost } from "../../models/Post";
import { getToken } from "../storage/token";

const BASE_URL = 'http://localhost:8080/posts'
const token = getToken()

export const getPosts = async(): Promise<Post[]> => {
    try {
      const auth = `Bearer ${token}`
      const response = await fetch(BASE_URL, {
        headers: {
          Authorization: auth,
          'Content-Type': 'application/json',
        },
      })
      console.log(response)
      const data = await response.json()
      console.log(data)
      return data.photos.map(normalizePost)
    } catch (e) {
      console.log(e)
    }
    return []
}

export const getPostById = async (id: string): Promise<Post[]> => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const data = await response.json()

  return data.map(data)
}

export const createPost = async (
  id: string,
  input: PostInput
): Promise<Post> => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    body: JSON.stringify(input),
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const data = await response.json()

  return normalizePost(data)
}

export const updatePost = async (
  id: string,
  input: PostInput
): Promise<Post> => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    body: JSON.stringify(input),
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const data = await response.json()

  return normalizePost(data)
}

export const deletePostById = async (id: string): Promise<boolean> => {
  await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return true
}

export const togglePostFavByUser = async (id: string): Promise<Post> => {
  const response = await fetch(`http://localhost:8080/${id}/favs`, {
    body: JSON.stringify(id),
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const data = await response.json()

  return normalizePost(data)
}