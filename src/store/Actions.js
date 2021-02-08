

export const removeUser = (userId)=> dispatch =>{
    
    dispatch({type:'REMOVE_USER',payload:userId})
}

export const editUser = (EditedUser)=>dispatch=>{
    
    dispatch({type:'EDIT_USER',payload:EditedUser})
}

export const addingUser = (newUser) =>dispatch=>{
    console.log('inside Add USer')
    dispatch({type:'ADD_USER',payload:newUser})
}