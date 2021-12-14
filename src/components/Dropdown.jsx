import React from 'react';
import { Form } from 'react-bootstrap';


const Dropdown = ({ label, list, handleChange }) => {
    const handleOptionChange = (e) => {
        e.preventDefault();
        handleChange(e.target.value);
    }
    return (
        <div>
            <div className='comp'>
                <Form.Label>{label}:</Form.Label>
                <Form.Select className="me-sm-2" id="company" name="company" onChange={handleOptionChange} >
                    <option value="0">Choose...</option>
                    {
                        list && list.map(item => {
                            let [itemCode, itemName] = item;
                            return <option value={itemName} name={item.name} key={itemCode}>{itemName}</option>;
                        })
                    }
                </Form.Select>
            </div>

        </div>
    )
}

export default Dropdown;


