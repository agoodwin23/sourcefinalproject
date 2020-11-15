import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

function QueryForm(props) {
    const [formData, setFormData] = useState('');

    return (
        <div>
            <Card body border="secondary" style={{ margin: '10px' }}>
                <Form onSubmit={e => {
                    e.preventDefault(); // prevents the screen from rendering, which loses form data entered
                    props.onSubmit(formData);
                }}> 
                <Form.Label>
                    Danceability:
                </Form.Label>
                <Form.Control type="text" placeholder="Enter a number between 0.0 and 1.0"
                    onChange={(e) => {
                        let oldFormVals = { ...formData, danceability: e.target.value };
                        setFormData(oldFormVals);
                }} />
                <Button variant="success" onClick={() => console.log(formData)} style={{margin:"10px"}}>Submit</Button>
            </Form>
         </Card>

            <Card body border="secondary" style={{ margin: '10px' }}>
                <Form onSubmit={e => {
                    e.preventDefault(); // prevents the screen from rendering, which loses form data entered
                    props.onSubmit(formData);
                }}> 
                <Form.Label>
                    Energy:
                </Form.Label>
                <Form.Control type="text" placeholder="Enter a number between 0.0 and 1.0"
                    onChange={(e) => {
                        let oldFormVals = { ...formData, energy: e.target.value };
                        setFormData(oldFormVals);
                }} />
                <Button variant="success" onClick={() => console.log(formData)} style={{margin:"10px"}}>Submit</Button>
            </Form>
        </Card>

            <Card body border="secondary" style={{ margin: '10px' }}>
                <Form onSubmit={e => {
                    e.preventDefault(); // prevents the screen from rendering, which loses form data entered
                    props.onSubmit(formData);
                }}> 
                <Form.Label>
                    Loudness:
                </Form.Label>
                <Form.Control type="text" placeholder="Enter a number between -60 and 0 decibels"
                    onChange={(e) => {
                        let oldFormVals = { ...formData, loudness: e.target.value };
                        setFormData(oldFormVals);
                }} />
                <Button variant="success" onClick={() => console.log(formData)} style={{margin:"10px"}}>Submit</Button>
            </Form>
        </Card>

             <Card body border="secondary" style={{ margin: '10px' }}>
                <Form onSubmit={e => {
                    e.preventDefault(); // prevents the screen from rendering, which loses form data entered
                    props.onSubmit(formData);
                }}> 
                <Form.Label>
                    Popularity:
                </Form.Label>
                <Form.Control type="text" placeholder="Enter a number between 0 and 100"
                    onChange={(e) => {
                        let oldFormVals = { ...formData, popularity: e.target.value };
                        setFormData(oldFormVals);
                }} />
                <Button variant="success" onClick={() => console.log(formData)} style={{margin:"10px"}}>Submit</Button>
            </Form>
        </Card>
        </div>
    )
}

export default QueryForm;