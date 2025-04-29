import React, { useState } from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, Form, FormControl } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Service from '../service/Service';

const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();
    const location = useLocation();

    function handleChange(event) {
        setUser({ ...user, [event.target.name]: event.target.value });
    }

    async function handleSubmit(event) {
        event.preventDefault();
        // this line prevents the default behaviour -> form submission
        const response = await Service.loginUser(user);
        if (user.email === response.data.email) {
            navigate("/h", {
                state: {
                    user: response.data
                }
            });
        } else {
            alert("Incorrect credentials");
        }
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
                            onChange={handleChange} required value={user.email}
                            placeholder='Enter your email' name='email' />
                        <FormControl type='password'
                            onChange={handleChange} required value={user.password}
                            placeholder='Enter your password' name='password' />
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