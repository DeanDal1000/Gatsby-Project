import React from 'react';
import { Link } from 'gatsby'
import Footer from '../components/footer'

const IndexPage = () => {
  return (
    <div>Hello Im dean

      <p><Link to="/contact">Contact Me</Link></p>
      <Footer />
    </div>
  )
}

export default IndexPage