import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import "../styles/index.scss";
import Head from "../components/head";

const IndexPage = () => {
  return (
    <Layout>
      <Head />
      <p>
        <Link to="/contact">Contact Me</Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
