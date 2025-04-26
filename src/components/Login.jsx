import React, { useState } from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, Form, FormControl } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const [user, setUser] = useState({
        userEmail: "",
        userPass: ""
    });
    const navigate = useNavigate();
    const location = useLocation();

    function handleChange(event) {
        setUser({ ...user, [event.target.name]: event.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        // this line prevents the default behaviour -> form submission

    }

    return (
        <div className='container w-75 px-3 mt-5 pt-5'>
            <Card>
                <CardHeader>
                    <h1>Login Here</h1>
                </CardHeader>
                <Form onSubmit={handleSubmit}>
                    <CardBody>
                        <FormControl type='email' className='mb-1'
                            onChange={handleChange} required
                            placeholder='Enter your email' name='userEmail' />
                        <FormControl type='password'
                            onChange={handleChange} required
                            placeholder='Enter your password' name='userPass' />
                    </CardBody>
                    <CardFooter className='d-flex align-items-center justify-content-between'>
                        <Button type='submit' variant='success'>Login</Button>
                        <Link to={"/r"}>Create account</Link>
                    </CardFooter>
                </Form>
            </Card>
        </div>
    )
}

export default Login;