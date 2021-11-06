import React from 'react'

export const UserList = () => {
    const users=[
        {
        id:1,
        name:'hasan',
        address: 'soborg',
        },
        {
        id:2,
        name:'liton',
        },
        {
        id:3,
        name:'kanak',                                       
        },
      
        
        
    ];
    
    return ( 
        <div>
         
          {users.map(user=>{
              return(
                  <li key = {user.id}>{user.name} address:- {user.address}
                  </li>              )
          })
          
           
}
        </div>
    )}
