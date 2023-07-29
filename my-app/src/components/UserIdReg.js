import { Form, Button } from 'react-bootstrap';
import { Col, Row, Container, Card, } from "react-bootstrap";
import { useState, useEffect } from 'react';
import axios from 'axios';
import paytm from '../photo/paytm.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Members from './coordinator/members';

let UserIdReg = () => {
    let [name, newName] = useState("");
    let [collegeName, newCollegeName] = useState("");
    let [phoneNo, newPhoneNumber] = useState("");
    let [document, newDocument] = useState("select document");
    let [documentID, newDocumentID] = useState("");
    let [email, newEmail] = useState("");
    let [tshirt, newTshirt] = useState("");
    const [image, setImage] = useState();
    let [trID, newTrID] = useState("");
    const [paymentEmail, newPaymentEmail] = useState("");
    const [baseUrl, setBaseUrl] = useState('');
    let nameHandler = (event) => {
        newName(event.target.value);
    }
    let collegeNameHandler = (event) => {
        newCollegeName(event.target.value);
    }
    let phoneNoHandler = (event) => {
        newPhoneNumber(event.target.value);
    }
    let documentIDHandler = (event) => {
        newDocumentID(event.target.value);
    }
    let emailHandler = (event) => {
        newEmail(event.target.value);
    }
    let documentHandler = (event) => {
        newDocument(event.target.value);
        // console.log(event.target.value);
    }

    let paymentEmailHandler = (event) => {
        newPaymentEmail(event.target.value);
    }
    let tshirtHandler = (event) => {
        newTshirt(event.target.value);
    }
    let TrIDHandler = (event) => {
        newTrID(event.target.value);
    }

    useEffect(() => {
        const getBaseUrl = () => {
            const { protocol, host } = window.location;
            const baseUrl = `${protocol}//${host}`;
            setBaseUrl(baseUrl);
        };

        getBaseUrl();
    }, []);


    //convertto base60

    let convertToBase64 = (e) => {
            let reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = () => {
                console.log(reader.result);
                setImage(reader.result);
            };
            reader.onerror = error => {
                console.log("Error: ", error);
            };
        
    }

    let uploadHandler = async (event) => {
        event.preventDefault();
        const headers = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        };


        const requestBody = JSON.stringify({
            image: image,
            email: paymentEmail,
            trID: trID,
        })

        axios.post(`/upload`, requestBody, { headers })
            .then(response => {
                console.log('Post created successfully');
                console.log('Response:', response.data);
                toast.success(`Your registration has been successful. Please check your email for User ID`, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            })
            .catch(error => {
                console.error('Error creating post:', error);
                toast.error(`${error.response.data.message}`, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            });


    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        let studentDetails = {
            name: name,
            collegeName: collegeName,
            documentID: documentID,
            email: email,
            phoneNo: phoneNo,
            document: document,
            tshirt: tshirt,
        }
        console.log(studentDetails);
        try {
            const response = await axios.post(`/register`, JSON.stringify(studentDetails), {
                headers: { 'Content-Type': 'application/json' }
            });
            let { data } = response;
            toast.success(`${data.message}`, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } catch (error) {
            if (error.response) {
                toast.error(`${error.response.data.message}`, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            } else if (error.request) {
                toast.error(`No response from the server`, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            } else {
                toast.error(`Error : ${error.message}`, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }
        }

        newName('');
        newEmail('');
        newPhoneNumber('');
        newCollegeName('');
        newDocumentID('');
        newDocument();
        newTshirt();
    }



    return (


        <div className='bg-secondary'>
            <ToastContainer />
            <Container className='mt-5'>
                <Row className="d-flex justify-content-center align-items-center ">
                    <Col md={8} lg={6} xs={12}>

                        <Card className="shadow px-lg-5">
                            <Card.Body>
                                <div >
                                    <h2 className="fw-bold mb-4  text "><span className='reg'>Fiesta'23 Registration</span></h2>
                                    <div className="mb-3">
                                        <Form onSubmit={handleSubmit} className='mb-3' >

                                            <Form.Group controlId="name" className='mb-2 d-flex' >
                                                <i className="fa-solid fa-user black fa-2x p-1"></i>
                                                <Form.Control type="text" placeholder="Enter Full Name" value={name} onChange={nameHandler} required />
                                            </Form.Group>

                                            <Form.Group controlId="email" className='mb-2   d-flex' >
                                                <i className="fa-solid fa-envelope fa-2x p-1" ></i>
                                                <Form.Control type="email" placeholder="Email" value={email} onChange={emailHandler} required />

                                            </Form.Group>

                                            <Form.Group controlId="mobileNumber" className='mb-2  d-flex' >
                                                <i className="fa-solid fa-phone-volume fa-2x p-1"></i>
                                                <Form.Control type="tel" pattern="[0-9]{10}" placeholder="Mobile Number" value={phoneNo} onChange={phoneNoHandler} required />
                                            </Form.Group>

                                            <Form.Group controlId="clgName" className='mb-2 d-flex' >
                                                <i className="fa-solid fa-building-columns fa-2x p-1"></i>
                                                <Form.Control type="text" placeholder="Enter College Name" value={collegeName} onChange={collegeNameHandler} required />
                                            </Form.Group>


                                            <Form.Group controlId="formSelector" className='mb-2 d-flex' >
                                                <i class="fa-sharp fa-solid fa-file-export fa-2x p-1" ></i>
                                                <Form.Select onChange={documentHandler} required>
                                                    <option >Select Document</option>
                                                    <option >Adhar Card</option>
                                                    <option  >College ID Card(Registration Slip/Identity Card)</option>
                                                </Form.Select>
                                            </Form.Group>

                                            <Form.Group controlId="idNumber" className='mb-2  d-flex' required >
                                                <i class="fa-solid fa-id-card-clip  fa-2x p-1"></i>
                                                <Form.Control type="text" placeholder="Enter ID Number Above Select Document" value={documentID} onChange={documentIDHandler} />
                                            </Form.Group>

                                            <Form.Group controlId="formSelector" className='mb-2 d-flex' >
                                                {/* <i class="fa-sharp fa-solid fa-file-export fa-2x p-1" ></i> */}
                                                <i class="fa-duotone fa-solid fa-shirt fa-2x p-1"></i>
                                                <Form.Select onChange={tshirtHandler} required>
                                                    <option>Size of T-shirt</option>
                                                    <option>S</option>
                                                    <option>M</option>
                                                    <option>L</option>
                                                    <option>XL</option>

                                                </Form.Select>
                                            </Form.Group>


                                            <p >Please recheck all details.</p>

                                            <Button type="handleSubmit" variant='success' className='mt-3 mb-5 ereg hower mx-auto' >
                                                Register
                                            </Button>

                                        </Form>



                                        <div className="col-lg-8 col-sm-12 text-center mx-auto">
                                            <div className="card" style={{ border: 'none' }} >
                                                <img src={paytm} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <p className="card-text"><b>Pay : ₹ 900/-</b></p>
                                                </div>
                                            </div>

                                        </div>

                                        <Form.Group controlId="email" className=' mb-2  d-flex' >
                                            <i className="fa-solid fa-envelope fa-2x p-1" ></i>
                                            <Form.Control type="email" placeholder="Email" value={paymentEmail} onChange={paymentEmailHandler} required />
                                        </Form.Group>

                                        <Form.Group controlId="trID" className='mb-2  d-flex' >
                                            <Form.Control type="tel" placeholder="Transaction Id" value={trID} onChange={TrIDHandler} required />
                                        </Form.Group>

                                        {/* image upload work */}




                                        <Form.Group controlId="paymentImage" className=' mb-2  d-flex ' >
                                            <Form.Control type="file" placeholder="upload" onChange={convertToBase64} required />
                                        </Form.Group>
                                        <p>upload fee receipt (size less than 250kb)</p>



                                        <div >

                                            <Button variant="danger" type="" className='mt-2 ereg hower mx-auto ' onClick={uploadHandler} >
                                                Upload
                                            </Button>

                                        </div>
                                    </div>
                                </div>

                            </Card.Body>
                            <a href='/form-fill' style={{ textDecoration: 'none' }} ><b>How to fill form </b></a>
                            <p>While facing issues regarding registration then you can contact us at (9798525268)</p>

                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )

};

export default UserIdReg;
































