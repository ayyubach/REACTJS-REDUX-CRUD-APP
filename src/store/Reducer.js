const initData = [{id:'1',name:'Ayyub',email:'ayyub@email.com'},{id:'2',name:'Mike',email:'mike@email.com'}]

export default (state=initData,action)=>{
    switch(action.type){

        case 'ADD_USER':
            
            return[...state,{...action.payload}]

        case 'REMOVE_USER':

            return[...state.filter((u)=>(u.id != action.payload))]

        case 'EDIT_USER':
            
            const newUser = action.payload;
            const updatedUsers = state.map(user=>{
                
                if(user.id === newUser.id){
                    return newUser;
                }
                return user;
            })

            return [...updatedUsers]

          
        default: return state;

    }

}