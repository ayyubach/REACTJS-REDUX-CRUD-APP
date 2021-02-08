import React from 'react'
import {connect} from 'react-redux'
import {ListGroup,ListGroupItem,Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import {removeUser} from '../store/Actions'


const ListUsers = ({users,removeUser}) => {
     
    
    return (
        <div>
            <h5 className='mt-4 text-center'>ListUsers</h5>
        {users.length>0? (
            
            users.map(user=>(
                <ListGroup key={user.id} className='mt-4'>
                    <ListGroupItem className="d-flex">
                        <div>{user.name}</div>
                        <div className="ml-auto">{user.email}</div>
                        <div className="ml-auto">
                 <Link to={`/edit/${user.id}`} className='btn btn-primary'>Edit</Link>
                 <Button className='btn btn-danger ml-1' onClick={()=>removeUser(user.id)} >Remove</Button>
                        </div>
                    </ListGroupItem>
                </ListGroup>
            )
            
            )
        
        ):(null)} 
            
          
            
        </div>
    )
}

    


const mapStateToProps = (state)=>({
    users:state
})

export default connect(mapStateToProps,{removeUser})(ListUsers)
