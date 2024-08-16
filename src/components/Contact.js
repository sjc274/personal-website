import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Swal from 'sweetalert2';
import contactImg from '../assets/img/contact-img.svg';

export const Contact = () => {
    const formInitialDetails = {
        fullName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (key, value) => {
        setFormDetails({
            ...formDetails,
            [key]: value
        });
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        setButtonText('Sending...');
    
        const formData = new FormData(event.target);
        formData.append("access_key", "832497b9-b0cd-4da4-95c1-a63d69f290ec");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            Swal.fire({
                title: "Success!",
                text: "We received your message!",
                icon: "success",
                confirmButtonText: "Cool",
            });
            setButtonText('Send');
            event.target.reset();
        } else {
            Swal.fire({
                title: "Error!",
                text: "Something went wrong!",
                icon: "error",
                confirmButtonText: "Try Again",
            });
            setButtonText('Send');
        }
    };

    return (
        <section className="contact" id="connect">
            <Container className="align-items-center">
                <Row>
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us"/>
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={onSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input required className="name" type="text" value={formDetails.fullName} placeholder="Full Name" onChange={(e) => {
                                        onFormUpdate('fullName', e.target.value);
                                    }} />
                                </Col>
                                
                                <Col sm={6} className="px-1">
                                    <input required className="email" type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => {
                                        onFormUpdate('email', e.target.value);
                                    }} />
                                </Col>
                                
                                <Col>
                                    <textarea required className="message" row="6" value={formDetails.message} placeholder="Message" onChange={(e) => {
                                        onFormUpdate('message', e.target.value);
                                    }} />
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}