import React, { useState, useEffect } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import Dropdown from './Dropdown';

const FormComponent = ({ handleSubmit }) => {

    const [userInfo, setUserInfo] = useState({
        username: "",
        email: "",
        phone: "",
        gender: "",
        company: "",
        country: ""
    });

    const [countries, setCountries] = useState([]);

    let companies = [
        ["brand1", "Samsung"],
        ["brand2", "Apple"],
        ["brand3", "Vivo"],
    ]

    useEffect(() => {
        try {
            const getdata = async () => {
                fetch("http://country.io/names.json")
                    .then(response => response.json())
                    .then(data => {
                        
                        setCountries(Object.entries(data));
                    })
            }
            getdata();
        } catch (error) {

            console.log(error)
        }
    }, [])


    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
    
        setUserInfo({ ...userInfo, [name]: value })
    }

    const handelsubmit = (e) => {
        e.preventDefault();

        handleSubmit(userInfo);


        if (userInfo.phone.length < 10) {

            alert("please type valid number")
        }

        setUserInfo({
            username: "",
            email: "",
            phone: "",
            gender: "",
            company: "",
            country: ""
        })
    }

    const handleCompanyChange = (company) => {
        
        setUserInfo({
            ...userInfo,
            company: company
        })
    }
    const handleCountryChange = (country) => {
    
        setUserInfo({
            ...userInfo,
            country: country
        })
    }
    return (
        <>
            <Form style={{ marginLeft: "20px", marginTop: "20px" }} action="" onSubmit={handelsubmit}>
                <Form.Group style={{ marginBottom: "20px" }}>
                    <Form.Label>Enter your name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" id="username" name="username" value={userInfo.username} onChange={handleInput} />
                </Form.Group>
                <Form.Group style={{ marginBottom: "20px" }}>
                    <Form.Label>Enter your Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your Email" id="email" name="email" value={userInfo.email} onChange={handleInput} />
                </Form.Group>
                <Form.Group style={{ marginBottom: "20px" }}>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="tel" placeholder="Enter your Phone" value={userInfo.phone} name="phone" id="phone" onChange={handleInput} />
                </Form.Group>
                <Form.Group as={Row} className="mb-3"   >
                    <Form.Label as="legend" column sm={2} style={{ marginBottom: "40px" }}  >
                        Gender
                    </Form.Label>
                    <Col sm={10} value={userInfo.gender} id="gender" name="gender" onChange={handleInput}>

                        <Form.Check
                            type="radio"
                            label="Male"
                            name="gender"
                            id="Male"
                            value="Male"
                        />
                        <Form.Check
                            type="radio"
                            label="Female"
                            name="gender"
                            id="Female"
                            value="Female"
                        />
                    </Col>
                    <div className='wrapper'>
                        <Row className="align-items-right" style={{ marginBottom: 20 }}>
                            <Col>
                                <Dropdown label="Company" list={companies} handleChange={handleCompanyChange} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>  <Dropdown label="Country" list={countries} handleChange={handleCountryChange} /></Col>
                        </Row>
                    </div>
                    <Button variant="primary" type="submit" className='btn'>
                        Submit
                    </Button>
                </Form.Group>
            </Form>
        </>
    )
}

export default FormComponent;
