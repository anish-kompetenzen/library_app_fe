import React from 'react'
import { Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const HomePage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className='container'>
            <h1 className='mt-5'>Hi User, Welcome to the app</h1>
            <div className='d-flex align-items-center justify-content-between' style={{ marginTop: "30vh" }}>
                <Button variant='info'>Edit User</Button>
                <Button onClick={() => navigate("/a")}>Add Books</Button>
                <Button variant='warning' onClick={() => navigate("/v")}>View/Edit Books</Button>
                <Link variant='danger' to={"/"} className='btn btn-danger'>Logout</Link>
            </div>
        </div>
    )
}

export default HomePage;