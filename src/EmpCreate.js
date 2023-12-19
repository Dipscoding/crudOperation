import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const EmpCreate = () => {


    const [id,idchange] = useState('')
    const [name,namechange] = useState('')
    const [email,emailchange] = useState('')
    const [phone,phonechange] = useState('')
    const [active,activechange] = useState(true)





  return (
    <div class="row">
    <div class="offset-lg-3 col-lg-6">
        <form class="container">
            <div class="card" style={{textAlign:"center"}}>
                <div class="card-title">
                    <h2>Employee Create</h2>

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
                                <input className='form-control' value={name} onChange={(e)=>namechange(e.target.value)}></input>
                            </div>

                        </div>
                        <div className='col-lg-12'>
                            <div className='form-group'>
                                <label>Email</label>
                                <input className='form-control' value={email} onChange={(e)=>emailchange(e.target.value)}></input>
                            </div>

                        </div>
                        <div className='col-lg-12'>
                            <div className='form-group'>
                                <label>Phone</label>
                                <input className='form-control' value={phone} onChange={(e)=>phonechange(e.target.value)}></input>
                            </div>

                        </div>
                        <div className='col-lg-12'>
                            <div className='form-check'>
                            <input checked={name} onChange={(e)=>namechange(e.target.checked)} type="checkbox" className='form-check-input'></input>
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