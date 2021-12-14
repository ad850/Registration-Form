
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';

const Images = () => {

    const [selectedImages, setSelectedImages] = useState([]);

    const imageHandleChange = (e) => {

        if (e.target.files) {
            const fileArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
            setSelectedImages((previmages) => previmages.concat(fileArray));

            Array.from(e.target.files)
                .map((file) =>
                    URL.revokeObjectURL(file)
                );
        }
    }

    const remove = (index) => {
        let temp = []
        for (let i = 0; i < selectedImages.length; i++) {
            if (i !== index) temp.push(selectedImages[i]);
        }
        setSelectedImages(temp);
    }

    const renderPhotos = (source) => {
        return source.map((photo, index) => {
            return (<div className='previewContain'>

                <div style={{ position: "absolute", top: 0, right: 0, zIndex: 1, backgroundColor: "#FFF" }}>

                    <Trash onClick={() => remove(index)} color="red" />
                </div>
                <img src={photo} key={photo} className='img' id={index} alt="google" />

            </div>)
        })
    }
    return (
        <div>
            <Form.Group className="position-relative mb-3" style={{ marginTop: "20px" }}>
                <Form.Label>Add File</Form.Label>
                <Form.Control
                    type="file"
                    multiple
                    name="file"
                    onChange={imageHandleChange}
                    id="file"
                />
            </Form.Group>
            <div className='result'>
                {renderPhotos(selectedImages)}
            </div>
        </div>
    )
}

export default Images
