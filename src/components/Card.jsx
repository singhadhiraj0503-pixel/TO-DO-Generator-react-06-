import React from 'react'

const Card = (props) => {
  // console.log(props);

  let deleteHandler=()=>{
    console.log("deleted");
    let copy=[...props.allInfo]
    copy.splice(props.idx,1)
    props.setallInfo(copy)
  }
  
  return (
      <div className="card w-full bg-[#676d70] rounded-2xl p-4 flex items-center justify-between">
        <p className='text-xl font-bold'><span className='text-black'>Time:</span> {props.time}</p>
        <h2 className='text-3xl font-bold'><span className='text-black'>To-Do:</span> {props.details}</h2>
        <button className='p-4 bg-red-600 rounded-2xl text-xl font-semibold active:scale-[0.9]'
        onClick={deleteHandler}>Remove</button>
      </div>
  )
}

export default Card