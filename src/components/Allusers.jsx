import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

const Allusers = () => {

    // to get data from database in front-end UI.  
    const getApiConfig = () => ({
        headers: {
            "Content-Type": "application/json"
        }
    });

    const dispatch = useDispatch();
    const [users, setUsers] = useState([]);

    // useEffect is used to bring data from database to frontend.
    useEffect( () => {
        async function fetchData() {
            const { data } = await axios.get('http://localhost:9000/auth/all-users', getApiConfig());
            setUsers(data.user);
        }
        fetchData();
    }, [])


    return (
        <>
            <div className="conatiner">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="card">
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Sr. no</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map((item, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email || "abc@gmail.com"}</td>
                                            </tr>
                                        ))
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Allusers