import React from 'react'
import { users } from './data.js'

const Move = () => {
    console.log(users);
  return (
    <>
    <h1>Users</h1>
    <div className='flex justify-center flex-wrap gap-8 mt-8'>
   {users.map((users,index)=>{
    return (
      <div key={users.id}>
        <h2>{users.name}</h2>
        <img src="" alt={users.title} className='w-full h-64 object-cover border-2 border-yellow-400 rounded-lg'/>
        <h1>{users.username}</h1>
        <h1>{users.email}</h1>
      </div>
    );
   })}
   </div>
    </>
  )
}

export default Move