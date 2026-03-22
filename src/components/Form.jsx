import React, { useState } from 'react'
import Card from './Card'

const Form = () => {

  const [time, settime] = useState('')
  const [details, setdetails] = useState('')

  const [allInfo, setallInfo] = useState([])

  let eventHandler=(e)=>{
    e.preventDefault()
    
    let newInfo=[...allInfo]
    newInfo.push({time,details})
    setallInfo(newInfo)
    // console.log(newInfo);

    // setallInfo([...allInfo,{time,details}]) - method-2

    // setallInfo((prev)=>{
    //   return [...prev,{time,details}] - method-3 (best method)
    // })

    settime('')
    setdetails('')
  }

  return (
    <div className="form">
      <form className='p-4 flex  items-center justify-start gap-5 flex-wrap'
      action=""
      onSubmit={eventHandler}>
        <input type="text"
        name=""
        id=""
        placeholder='Enter time'
        className='border-2 border-amber-50 p-4 rounded-2xl'
        value={time}
        required
        onChange={(e)=>{
          settime(e.target.value)
        }} />
      
        <textarea name=""
        id=""
        placeholder='Enter more details'
        className='border-2 border-amber-50 w-[83%] rounded-2xl p-4'
        value={details}
        required
        onChange={(e)=>{
          setdetails(e.target.value)
        }}></textarea>
        <button className='w-full bg-green-600 p-4 rounded-2xl text-xl font-bold active:scale-[0.9]'>Submit</button>
      </form>

      <div className="cards w-full bg-black flex flex-col gap-4 justify-center rounded-2xl">
        {allInfo.map(function(elem,idx){
          // console.log(elem);

          return <Card key={idx} time={elem.time} details={elem.details} allInfo={allInfo} setallInfo={setallInfo} idx={idx}/>
        })}
      </div>
    </div>
  )
}

export default Form