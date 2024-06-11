import React from 'react'

function InputUser(
  {
    userDetail,
    onUserNameChange,
  }

) 

{
  return (
  <div className=' flex justify-center items-center gap-3 p-5 sm:p-0'>
    
        <label htmlFor="">Enter github username:</label>
        <input type="text" 
        className=' border-2 border-solid border-black rounded-md p-1 '
        placeholder='example'
        value={userDetail}
        onChange={(e)=> onUserNameChange(e.target.value)}
        />
        
    
</div>
   
  )
}

export default InputUser