import React from "react"
import './layout.css'
import {Link} from 'gatsby'
const ListLink= props => ( 
    <li style={{dispaly: `inline-block`}}>
        <Link to ={props.to}>{props.children}</Link>
    </li>
)


export default ({ children }) => (
  <div className = 'background'>
      <div className='header'>
          <Link to ='/' style={{ textShadow: `none`, backgroundImage: `none` }}>
              Doula Site 
          </Link>

          <ul style={{ listStyle: `none`, float: `right`, display: `flex`, justifyContent: `space-between` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
      </div>
  <div style={{ margin: `auto`, maxWidth: 650, padding: `0 1rem` }}>
    {children}

  </div>
  </div>
)