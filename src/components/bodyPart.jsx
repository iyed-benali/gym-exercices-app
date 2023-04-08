import React from 'react'

const BodyPart = ({item,setBodyPart,bodyPart}) => {

  return (
    <div onClick={()=>{
        setBodyPart(item)
        console.log(item);
    }}>
      <p>{item}</p>
    </div>
  )
}

export default BodyPart 