import React from 'react'
import { useEffect, useState } from 'react'
import { Axios } from 'axios'
import {Link} from 'react-router-dom';
const Employees = () => {
    const [employees, setEmployees] = useState([]);
    useEffect(()=>{
        const fetchAllEmployees = async () => {
            try{
                const res = await Axios.get("https://localhost:8000/employees")
                console.log(res)
            }
            catch(err){
                console.log(err)
            }
        }
    })
  return (
    <div>
        <h1>lab11 Ажилтан</h1>
        <div className='employees'>
            {employees.map((employees) => <div className='employee'>
                <h2>{employees.first_name}</h2>
                <p>
                    {employees.last_name}
                </p>
            </div>)}
        </div>
        <button><Link to='/add'>Шинэ ажилтан нэмэх</Link></button>
    </div>
  )
}

export default Employees