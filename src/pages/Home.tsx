import { FC, useState } from "react"
import { Space, Row } from "antd"
import { useSearchedPosts } from "hooks/useSearchedPosts"
import PostModal from "components/PostModal"
import Posts from "components/Posts"
import UIAlert from "components/UIAlert"

const Home: FC = () => {
  const [search] = useState<string>("")
  const posts = useSearchedPosts(search)
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
