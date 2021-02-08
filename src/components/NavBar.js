import React from 'react'
import {Navbar} from 'reactstrap'
import {Link} from 'react-router-dom'

const NavBar = (props) => {
    return (
        <div>
            <Navbar color='dark'>
            <span className='logo'>CRUD APP</span>
            <Link to={props.To}  className='btn btn-primary'>{props.value}</Link>
            </Navbar>
        </div>
    )
}

export default NavBar
