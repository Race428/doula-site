import React from "react"
import { Link} from 'gatsby'
import Layout from '../components/layout'
export default () => (
 <Layout> 


 <div>
    <h1>About Gatsby</h1>
    <p>Such wow. Very React.</p>
<Link to='/about'>
    <div>Here is the link</div>
    </Link>
  </div>

  </Layout>
)