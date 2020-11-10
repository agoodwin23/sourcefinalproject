import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function QueryForm(props) {
    const [formData, setFormData] = useState('');

    return (
        <div>
            <Form onSubmit={e => {
                e.preventDefault(); // prevents the screen from rendering, which loses form data entered
                props.onSubmit(formData);
            }}> 
            <Form.Label>
                Danceability:
            </Form.Label>
            <Form.Control type="text" placeholder="Enter a number between 0-1"
                onChange={(e) => {
                    let oldFormVals = { ...formData, danceability: e.target.value };
                    setFormData(oldFormVals);
            }} />
            <Button type="submit" onClick={() => console.log(formData)}>Submit</Button>
        </Form>
        </div>
    )
}

export default QueryForm;