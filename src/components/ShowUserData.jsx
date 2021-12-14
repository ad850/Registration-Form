import React from 'react';
import {Card } from 'react-bootstrap';
import Pic from '../asset/Pic.jpg'
import { Envelope, Telephone, Person, Shop, Flag } from 'react-bootstrap-icons';

const ShowUserData = ({ data }) => {
    return (
        <Card style={{ width: '24rem', marginTop: "43px" }}>
            <Card.Img variant="top" src={Pic} />
            <Card.Body>

                <Card.Title style={{ textTransform: "capitalize" }}>{data.username}</Card.Title>
                <Card.Text style={{ padding: "10px" }}>
                    <div><Envelope color="blue" />  {data.email}</div>
                    <div><Telephone color="green" /> {data.phone}</div>
                    <div><Person color="brown" /> {data.gender}</div>
                    <div><Shop color="red"/> {data.company}</div>
                    <div><Flag  color="orange"/> {data.country}</div>
                </Card.Text>
                
            </Card.Body>
        </Card>
    )
}

export default ShowUserData


