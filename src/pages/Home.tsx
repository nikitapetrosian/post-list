import { FC, useEffect, useState } from "react"
import { Space, Row, Spin } from "antd"
import { useFetchPostsQuery } from "../API/jsonApi"
import { useSearchedPosts } from "hooks/useSearchedPosts"
import { useActions } from "../hooks/useActions"
import PostModal from "components/PostModal"
import Posts from "components/Posts"
import UIAlert from "components/UIAlert"
import css from "../styles/Home.module.css"

const Home: FC = () => {
  const [sort] = useState<string>("")
  const [search] = useState<string>("")

  const { setPosts } = useActions()

  const { data: posts_data, isLoading: posts_loading } =
    useFetchPostsQuery(sort)

  const posts = useSearchedPosts(search)

  useEffect(() => {
    setPosts(posts_data)
  }, [setPosts, posts_data])

  if (posts_loading) return <Spin className={css.center} size="large" />

  return (
    <>
      {posts ? (
        <Row justify="center">
          <Space direction="vertical" size={16}>
            <Posts searchedPosts={posts} />
          </Space>
        </Row>
      ) : (
        <UIAlert
          title="No posts"
          text="Какие-то проблемы"
        />
      )}
      <PostModal />
    </>
  )
}

export default Home
