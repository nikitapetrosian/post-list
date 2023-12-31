import { FC } from "react"
import { PostsProps } from "models"
import UIAlert from "./UIAlert"
import Post from "./Post"

const Posts: FC<PostsProps> = ({ searchedPosts }) => {
  return (
    <>
      {searchedPosts.length ? (
        searchedPosts.map((post) => <Post key={post.id} {...post} />)
      ) : (
        <UIAlert
          title="Posts not found"
          text="Какие-то проблемы"
        />
      )}
    </>
  )
}

export default Posts
