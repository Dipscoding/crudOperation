import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const EmpDetails = () => {
  const {empid }= useParams();
  console.log(empid,"empid");
  const [datas,setDatas]=useState('')

  useEffect(()=>{
    const fetchData = async () => {
      try {
          const result = await axios.get(`http://localhost:3000/employee/${empid}`)
          const data = result.data;
          console.log(data,"datahjh")
          setDatas(data)
          console.log(datas)
          // console.log(empData,"empdata")
          // const 
      }

      catch (err) {
          console.log(err)
      }
  }
  fetchData()

  },[])
  return (
    <div>
      <h1>{datas.name}</h1>
        
    </div>
  )
}

export default EmpDetails