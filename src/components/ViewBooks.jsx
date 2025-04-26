import React from 'react'
import { Button, Table } from 'react-bootstrap';

const ViewBooks = () => {
    return (
        <div className='container'>
            <div className="card">
                <div className="card-header">
                    <h3>View & Edit Books Here</h3>
                </div>
                <div className="card-body">
                    <Table responsive hover striped bordered>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Author</th>
                                <th>Genre</th>
                                <th>Quantity</th>
                                <th>Publication Year</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>Wings Of Fire</td>
                                <td>APJ Abdul Kalam</td>
                                <td>Autobiography</td>
                                <td>100</td>
                                <td>2008</td>
                                <td><Button className='bi bi-pencil'></Button></td>
                                <td><Button variant='danger' className='bi bi-trash'></Button></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default ViewBooks;