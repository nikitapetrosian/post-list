import { FC } from "react"
import { Card } from "antd"
import { Link } from "react-router-dom"
import { PostProps } from "models"
import css from "../styles/Home.module.css"

const Post: FC<PostProps> = ({ id, title, body }) => {
  return (
    <Card key={id} title={`№${id}. ${title}`} className={css.card}>
      {body.length > 150 ? (
        <>
          <p>{`${body.slice(0, 150)} ...`}</p>
          <Link to={`/post/${id}`}
          >
            Просмотр
          </Link>
        </>
      ) : <p>{body}</p>}
    </Card>
  )
}

export default Post
