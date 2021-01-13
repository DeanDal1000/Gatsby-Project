import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from "./comp-styles/header.module.scss"

const Header = () => {
  //performed a query
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header>
      <h1>
        <Link className={headerStyles.title}>
          {" "}
          {/* Injected into JSX */}
          {data.site.siteMetadata.title}{" "}
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.nav_list}>
          <li>
            <Link
              className={headerStyles.nav_item}
              activeClass={headerStyles.active_nav_item}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link className={headerStyles.nav_item} to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className={headerStyles.nav_item} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className={headerStyles.nav_item} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
