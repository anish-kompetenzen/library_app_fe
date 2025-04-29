import React, { useState } from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, Form, FormControl, FormSelect } from 'react-bootstrap';
import Service from '../service/Service';

const AddBook = () => {

    const [book, setBook] = useState({
        name: "",
        image: "",
        author: "",
        genre: "",
        quantity: "",
        year: ""
    });

    function handleChange(event) {
        setBook({ ...book, [event.target.name]: event.target.value });
    }

    async function handleSubmit(event) {
        event.preventDefault();
        // this line prevents the default behaviour -> form submission
        const response = await Service.addBook(book);
        if (response.status === 201) {
            alert("Book added successfully!!");
        }
    }

    return (
        <div className='container w-75 px-3 mt-5 pt-5'>
            <Card>
                <CardHeader>
                    <h1>Add Book Here</h1>
                </CardHeader>
                <Form onSubmit={handleSubmit}>
                    <CardBody>
                        <FormControl type='text' className='mb-1'
                            onChange={handleChange} required value={book.name}
                            placeholder='Enter book name' name='name' />
                        <FormControl type='url' className='mb-1'
                            onChange={handleChange} required value={book.image}
                            placeholder='Enter book image' name='image' />
                        <FormControl type='text' className='mb-1'
                            onChange={handleChange} required value={book.author}
                            placeholder='Enter book author' name='author' />
                        <FormSelect type='text' className='mb-1'
                            onChange={handleChange} required name='genre'>
                            <option value={'Enter book genre'}>Enter book genre</option>
                            <option value={"Autobiography"}>Autobiography</option>
                            <option value={"Adventure"}>Adventure</option>
                            <option value={"Biography"}>Biography</option>
                            <option value={"Literary Fiction"}>Literary Fiction</option>
                            <option value={"Dystopian"}>Dystopian</option>
                            <option value={"Horror"}>Horror</option>
                            <option value={"Romance"}>Romance</option>
                            <option value={"Fantasy"}>Fantasy</option>
                            <option value={"Mystery"}>Mystery</option>
                            <option value={"Thriller"}>Thriller</option>
                            <option value={"Science Fiction"}>Science Fiction</option>
                            <option value={"Non-Fiction"}>Non-Fiction</option>
                        </FormSelect>
                        <FormControl type='number' className='mb-1'
                            onChange={handleChange} required value={book.quantity}
                            placeholder='Enter book quantity' name='quantity' />
                        <FormControl type='number'
                            onChange={handleChange} required value={book.year}
                            placeholder='Enter book publication year' name='year' />
                    </CardBody>
                    <CardFooter>
                        <Button type='submit'>Add Book</Button>
                    </CardFooter>
                </Form>
            </Card>
        </div >
    )
}

export default AddBook;