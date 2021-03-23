import React, { useEffect } from "react"
import {useState } from 'react'
import axios from "axios"
import UserCard from './userCard'

const UserList = () =>{
    const [listOfUser , setListOfUser] = useState([]) ; 
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=> {
          // handle success
          
          setListOfUser(response.data)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
         
        })

    },[])
   const arr = listOfUser.map ( (el )=> el)
    
console.log(arr[0])

    return (
        <>
        {
            arr.map( el => <UserCard key={el.id} el={el}></UserCard>
            )}       
        </>
    )
}
export default UserList ; 