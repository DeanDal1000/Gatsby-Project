import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import "../styles/index.scss"

const IndexPage = () => {
  return (
    <Layout>
      Hello Im dean
      <p>
        <Link to="/contact">Contact Me</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
