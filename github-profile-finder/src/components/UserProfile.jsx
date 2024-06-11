import React from 'react'

function UserProfile({users})

{
  const {avatar_url,login,followers,public_repos,following,
    created_at}=users
    const date=new Date(created_at)
  return (
 <div className=' h-96 mt-10 grid justify-center bg-gray-500 items-center gap-8 sm:bg-gray-500 sm:flex'>
      <div className=' flex justify-center sm:flex sm:justify-center'>
        <img src={avatar_url} alt="User" 
        className=' rounded-full size-72 '
        />
      </div>
      
      <div className=' bg-white h-full w-screen text-center rounded-md grid justify-center items-center sm:w-1/3'>
      
        <a href={`https://github.com/${login}`} 
        className=' text-black text-2xl'
        >Username: {login}</a>

        <hr />
        <p className=' text-xl mt-4'>Followers: {followers}</p>
        <hr />
        <p className=' text-xl mt-4'>Public Repositiories: {public_repos}</p>
        <hr />
        <p className=' text-xl mt-4'>Following: {following}</p>
        <hr />
        <p className=' text-xl mt-4'>Created at: {`${date.getDate()} ${date.toLocaleString('en-us',{month:'short'})} ${date.getFullYear()}`}</p>
      </div>
    
 </div>
  )
}

export default UserProfile