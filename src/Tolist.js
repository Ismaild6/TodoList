import React from 'react'

const Tolist = ({todolist,deletehandler}) => {
  return (
    <div >
        {todolist.map((todos,index)=>
        <div key={index}>
          <h1>{todos} &nbsp; <button onClick={()=>deletehandler(index)}>Delete</button></h1>
          </div>
        )}
    </div>
  ) 
}

export default Tolist