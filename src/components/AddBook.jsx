import React, { useState } from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, Form, FormControl } from 'react-bootstrap';

const AddBook = () => {

    const [book, setBook] = useState({
        bookName: "",
        bookImage: "",
        authorName: "",
        bookGenre: "",
        quantityAvailable: "",
        publicationYear: ""
    });

    function handleChange(event) {
        setBook({ ...book, [event.target.name]: event.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        // this line prevents the default behaviour -> form submission
        console.log(book);
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
                            onChange={handleChange} required
                            placeholder='Enter book name' name='bookName' />
                        <FormControl type='url' className='mb-1'
                            onChange={handleChange} required
                            placeholder='Enter book image' name='bookImage' />
                        <FormControl type='text' className='mb-1'
                            onChange={handleChange} required
                            placeholder='Enter book author' name='authorName' />
                        <FormControl type='text' className='mb-1'
                            onChange={handleChange} required
                            placeholder='Enter book genre' name='bookGenre' />
                        <FormControl type='number' className='mb-1'
                            onChange={handleChange} required
                            placeholder='Enter book quantity' name='quantityAvailable' />
                        <FormControl type='number'
                            onChange={handleChange} required
                            placeholder='Enter book publication year' name='publicationYear' />
                    </CardBody>
                    <CardFooter>
                        <Button type='submit'>Add Book</Button>
                    </CardFooter>
                </Form>
            </Card>
        </div>
    )
}

export default AddBook;