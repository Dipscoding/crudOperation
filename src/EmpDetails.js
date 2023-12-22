import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

const EmpDetails = () => {
  const { empid } = useParams();
  const [datas, setDatas] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`http://localhost:3000/employee/${empid}`)
        const data = result.data;
        setDatas(data)
      }

      catch (err) {
        console.log(err)
      }
    }
    fetchData()

  }, [])
  return (
    <div>
      <div className='card' style={{ "textAlign": "left" }}>
        <div className='card-title'>
          <h2>Employee Details</h2>
        </div>
        <div className='card-body'></div>
        {datas &&
          <div>
            <h1>The employee is : {datas.name}</h1>
            <h3>Contact details</h3>
            <h5>Email is : {datas.email}</h5>
            <h5>Phone is : {datas.phone}</h5>
            <Link to='/' className="btn btn-success">Back to Listing</Link>
          </div>
        }

      </div>

    </div>
  )
}

export default EmpDetails