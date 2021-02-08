import React,{useState} from 'react'
import NavBar from './NavBar'
import {Form ,FormGroup, Input , Label,Button} from 'reactstrap'
import {Link,useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import {editUser} from '../store/Actions'
//import '../App.css'

const EditUser = ({users,match,editUser}) => {
    const history = useHistory();
    var onChange = (e)=>{
     e.preventDefault();
     setNewUser({...newUser,[e.target.name]:e.target.value})
    }

    const submit = (e)=>{
        e.preventDefault();
        editUser(newUser);
        console.log(newUser)
        history.push("/");
}
    const selectedUser = users[match.params.id-1];

    const [newUser,setNewUser]=useState({id:selectedUser.id,
        name:selectedUser.name,
        email:selectedUser.email})

    
    return (
        <div>
           <NavBar To='/' value='Home' />
           <h5 className='text-center mt-2'>EditUser</h5> 
           <Form  style={{width:'60%',marginLeft:'280px'}} onSubmit={submit}>
               <FormGroup>
                   <Label>Name</Label>
                   <Input name='name' value={newUser.name} onChange={onChange} />
               </FormGroup>
               <FormGroup>
                   <Label>Email</Label>
                   <Input name='email' value={newUser.email} onChange={onChange} />
               </FormGroup>
               <FormGroup>
                   <Button type='submit' color='primary'>Save</Button>
                   <Link to='/' className='btn btn-secondary ml-1' >Cancel</Link>
               </FormGroup>
           </Form>
        </div>
    )
}

const mapStateToProps = (state) =>({
    users:state
})
export default connect(mapStateToProps,{editUser})(EditUser)
