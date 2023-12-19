import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const EmpListing = () => {

    const [empData,setEmpData] = useState('')




    useEffect(() => {
        // fetch("http://localhost:3000/employee")

        const fetchData = async () => {
            try {
                const result = await axios.get("http://localhost:3000/employee")
                const data = result.data;
                console.log(data,"data")
                setEmpData(data)
                console.log(empData,"empdata")
                // const 
            }

            catch (err) {
                console.log(err)
            }
        }
        fetchData()





    },[])






    return (
        <div className='container'>
            <div className='card'>
                <div className='card-title'>
                    <h2>Employee Listing</h2>

                </div>
                <div className='card-body'>
                    <div className='divbtn'>
                        <Link to="employee/create" className='btn-btn-success'>
                        Add New (+)
                        </Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Action</td>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                empData && empData.map((item)=>{
                                    return (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td><a className='btn btn-success'>EDIT</a>
                                            <a className='btn btn-danger'>REMOVE</a>
                                            <a className='btn btn-primary'>DETAILS</a>
                                            </td>
                                        </tr>

                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default EmpListing