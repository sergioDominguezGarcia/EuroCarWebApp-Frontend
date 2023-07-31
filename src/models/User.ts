type userResponse = {
  _id: string
  rol: string
  email: string
  favPosts: Array<{
    postId: string
  }>;
};

export const normalizeUser = (input: userResponse) => ({
  _id: input?._id || "",
  rol: input?.rol || "",
  email: input?.email || "",
  favoritos: input?.favPosts || "",
});

export type User = ReturnType<typeof normalizeUser>;