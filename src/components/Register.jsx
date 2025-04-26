import React, { useState } from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {

    const [user, setUser] = useState({
        userName: "",
        userEmail: "",
        userPass: ""
    });

    function handleChange(event) {
        setUser({ ...user, [event.target.name]: event.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        // this line prevents the default behaviour -> form submission
        console.log(user);
    }

    return (
        <div className='container w-75 px-3 mt-5 pt-5'>
            <Card>
                <CardHeader>
                    <h1>Register Here</h1>
                </CardHeader>
                <Form onSubmit={handleSubmit}>
                    <CardBody>
                        <FormControl type='text' className='mb-1'
                            onChange={handleChange} required
                            placeholder='Enter your name' name='userName' />
                        <FormControl type='email' className='mb-1'
                            onChange={handleChange} required
                            placeholder='Enter your email' name='userEmail' />
                        <FormControl type='password'
                            onChange={handleChange} required
                            placeholder='Enter your password' name='userPass' />
                    </CardBody>
                    <CardFooter className='d-flex align-items-center justify-content-between'>
                        <Button type='submit'>Register</Button>
                        <Link to={"/"}>Login</Link>
                    </CardFooter>
                </Form>
            </Card>
        </div>
    )
}

export default Register;