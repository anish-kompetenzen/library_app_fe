import React, { useState } from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Service from '../service/Service';

const Register = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    function handleChange(event) {
        setUser({ ...user, [event.target.name]: event.target.value });
    }

    async function handleSubmit(event) {
        event.preventDefault();
        // this line prevents the default behaviour -> form submission
        const response = await Service.registerUser(user);
        if (response.status === 201) {
            alert("User added successfully!");
        }
        setUser({
            name: "",
            email: "",
            password: ""
        });
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
                            onChange={handleChange} required value={user.name}
                            placeholder='Enter your name' name='name' />
                        <FormControl type='email' className='mb-1'
                            onChange={handleChange} required value={user.email}
                            placeholder='Enter your email' name='email' />
                        <FormControl type='password'
                            onChange={handleChange} required value={user.password}
                            placeholder='Enter your password' name='password' />
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