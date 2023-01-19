import React from "react"
import styled from "styled-components";


const ListUsers = ({users}) =>{
    const UsersList = styled.div`
        margin-top: 20px;
        color: red;
    `;
    const usersAll = users.map((item,id) => {
         return <UsersList key={id}>
                 <ul>
                 <li>{item.name} and {item.age}</li>
            </ul>
         </UsersList>
    })
    
        return (<div>
             {usersAll}
        </div>
           
        )
    
}
export default ListUsers;