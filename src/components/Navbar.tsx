import { FC } from "react"
import { Button, Layout } from "antd"
import { Link, useLocation } from "react-router-dom"
import { useActions } from "hooks/useActions"
import css from "../styles/Header.module.css"

const Navbar: FC = () => {
  const { togglePostModal } = useActions()
  const { pathname } = useLocation()

  return (
    <nav className={css.navbar}>
      <Layout>
        <Layout.Header className={css["nav-header"]}>
          <div className={css.logo}>
            <h3 className={css["brand-font"]}>Posts List</h3>
          </div>
          <div className={css.navMenu}>
            <Button className={css.navItem} type="default">
              <Link className={css.link} to="/">
                Posts
              </Link>
            </Button>
          </div>
        </Layout.Header>
      </Layout>
    </nav>
  )
}

export default Navbar
