import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

const EmpEdit = () => {
  const [id, idchange] = useState('')
  const [name, namechange] = useState('')
  const [email, emailchange] = useState('')
  const [phone, phonechange] = useState('')
  const [active, activechange] = useState(false)
  const navigate = useNavigate()
  const { empid } = useParams()


  const handleSubmit = async (e) => {
    e.preventDefault();
    const empData = {name, email, phone, active }
    const url = `http://localhost:3000/employee/${empid}`;
    try {
      await axios.put(url, empData, {
        headers: { "content-type": "application/json" }

      })
      navigate("/")

    } catch (err) {
      console.log(err);
    }

  }
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`http://localhost:3000/employee/${empid}`)
        const data = result.data;
        idchange(data.id)
        namechange(data.name)
        emailchange(data.email)
        phonechange(data.phone)
        activechange(data.active)

      }
      catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={handleSubmit}>
          <div className="card" style={{ textAlign: "center" }}>
            <div className="card-title">
              <h2>Employee Edit </h2>

            </div>
            <div className='card-body'>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='form-group'>
                    <label>ID</label>
                    <input className='form-control' value={id} disabled="disabled"></input>
                  </div>

                </div>
                <div className='col-lg-12'>
                  <div className='form-group'>
                    <label>Name</label>
                    <input className='form-control' value={name} onChange={(e) => namechange(e.target.value)}></input>
                  </div>

                </div>
                <div className='col-lg-12'>
                  <div className='form-group'>
                    <label>Email</label>
                    <input className='form-control' value={email} onChange={(e) => emailchange(e.target.value)}></input>
                  </div>

                </div>
                <div className='col-lg-12'>
                  <div className='form-group'>
                    <label>Phone</label>
                    <input className='form-control' value={phone} onChange={(e) => phonechange(e.target.value)}></input>
                  </div>

                </div>
                <div className='col-lg-12'>
                  <div className='form-check'>
                    <input checked={active} onChange={(e) => activechange(e.target.checked)} type="checkbox" className='form-check-input'></input>
                    <label className='form-check-label'>Is Active</label>

                  </div>

                </div>
                <div className='col-lg-12'>
                  <div className='form-group'>
                    <button type='submit' className='btn btn-success'>Save</button>
                    <Link to="/" className='btn btn-danger' >Back</Link>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EmpEdit