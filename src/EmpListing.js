import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const EmpListing = () => {

    const [empData, setEmpData] = useState()
    const navigate = useNavigate()


    const loadDetail = (id) => {
        navigate("/employee/detail/" + id)


    }
    const loadEdit = (id) => {
        navigate(`/employee/edit/${id}`)

    }

    const deleteFunction = async (id) => {
        const url = `http://localhost:3000/employee/${id}`;
        try {
            await axios.delete(url)
            window.location.reload()

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {

        const fetchData = async () => {
            try {
                const result = await axios.get("http://localhost:3000/employee")
                const data = result.data;
                setEmpData(data)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchData()
    }, [])

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
                                empData && empData.map((item) => {
                                    return (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td><a onClick={() => loadEdit(item.id)} className='btn btn-success'>EDIT</a>
                                                <a onClick={() => deleteFunction(item.id)} className='btn btn-danger'>REMOVE</a>
                                                <a onClick={() => loadDetail(item.id)} className='btn btn-primary'>DETAILS</a>
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