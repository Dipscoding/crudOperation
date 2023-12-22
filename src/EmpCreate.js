import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const EmpCreate = () => {

    const [name, namechange] = useState('')
    const [email, emailchange] = useState('')
    const [phone, phonechange] = useState('')
    const [active, activechange] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const empData = { name, email, phone, active }
        const url = "http://localhost:3000/employee";
        try {
            await axios.post(url, empData, {
                headers: { "content-type": "application/json" }

            })
            navigate("/")

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="row">
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handleSubmit}>
                    <div className="card" style={{ textAlign: "center" }}>
                        <div className="card-title">
                            <h2>Employee Create</h2>

                        </div>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className='form-group'>
                                        <label>ID</label>
                                        <input className='form-control' disabled="disabled"></input>
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

export default EmpCreate