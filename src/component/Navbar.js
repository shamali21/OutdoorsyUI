import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import { Icon } from 'react-icons-kit'
import {u1F340} from 'react-icons-kit/noto_emoji_regular/u1F340'
const Navbar = (props) => {

    // added redirect to Home page after 2000 ms 
    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 2000);    

    return (
    <nav className="nav-wrapper black darken-3">
        <div className="container">
            <Link className="brand-logo" to="/" style={{
          display: "flex",
          alignItems: "left"
        }}><Icon size={30} icon={u1F340} />Cultiveit</Link>
            <ul className="right">
                <li><Link to='/'>Home</Link></li>
            </ul>
        </div>
    </nav>
    )
}

// by adding withRouter in the class we make it higher order component to access props without the route component
export default withRouter(Navbar)