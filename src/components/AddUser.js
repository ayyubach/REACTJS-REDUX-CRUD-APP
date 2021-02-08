
import NavBar from './NavBar'
import React,{useState,useContext} from 'react'

import {Form,Input,Label,FormGroup,Button} from 'reactstrap'
import {Link,useHistory} from 'react-router-dom'
import { v4 as uuid } from "uuid";
import {addingUser} from '../store/Actions'
import {connect} from 'react-redux'

const AddUser = ({addingUser}) => {
    const history = useHistory();
    const [newUser,setNewUser] = useState({id:uuid(),name:'',email:''});

    const onChange = (e)=>{
        e.preventDefault();
        setNewUser({...newUser,[e.target.name]:e.target.value});
        }

        const submit = (e)=>{
            e.preventDefault();
            addingUser(newUser);
            history.push('/');
            }

    return (
        <div>
            <NavBar To='/' value='Home' />
            <Form style={{width:'60%',marginLeft:'280px'}} className='mt-4' onSubmit={submit}>
            <FormGroup>
            <Label>Name</Label> 
            <Input name='name' placeholder='Enter Your Name' onChange={onChange} required/>
            <Label>Email</Label>
            <Input name='email' placeholder='Enter Your Email' onChange={onChange} required/>   
            </FormGroup>
            <div>
                    <Button type='submit' color='primary'>Save</Button>
                    <Link to='/' className='btn btn-danger m-1'>Cancel</Link>
                </div>    
            </Form> 
        </div>
    )
}
const mapStateToProps = (state)=>({
    users:state
})
 export default connect(mapStateToProps,{addingUser})(AddUser)

//export default AddUser
