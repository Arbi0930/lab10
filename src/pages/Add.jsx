import React from 'react'
import { useState } from 'react'
const Add = () => {

  const [employee, setEmployee] = useState({
    // eslint-disable-next-line no-undef
    firstName:string = "",
    // eslint-disable-next-line no-undef
    lastName:string = "",
  });
  const handleChange = (e) => {
    setEmployee(prev=>({...prev, [e.target.name]: e.target.value}))
  }
  return (
    <div className='form'>
      <div>Шинэ ажилтан нэмэх</div>
      <input type='text' placeholder='first_name' onChange={handleChange} name='firstName'/>
      <input type='text' placeholder='last_name' onChange={handleChange} name='lastName'/>
    </div>

  )
}

export default Add