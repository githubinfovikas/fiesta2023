import React, { useState, useEffect } from 'react';
import { Form, Button, FormLabel } from 'react-bootstrap';
import { Col, Row, Container, Card, } from "react-bootstrap";
import axios from 'axios';
import '../css/eventsReg.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EventRegistrationForm = () => {
    let [eventName, setEventName] = useState("");
    let [leaderName, setLeaderName] = useState("");
    let [leaderUserID, setLeaderUserID] = useState("");
    let [collegeName, setCollegeName] = useState("");
    let [phoneNumber1, setPhoneNumber1] = useState("");
    let [phoneNumber2, setPhoneNumber2] = useState("");
    let [email, setEmail] = useState("");
    let [members, setMembers] = useState([{ userId: null }]);
    const [baseUrl, setBaseUrl] = useState('');
    let eventNameHandler = (event) => {
        setEventName(event.target.value);
    }
    let leaderNameHandler = (event) => {
        setLeaderName(event.target.value);
    }
    let leaderUserIDHandler = (event) => {
        setLeaderUserID(event.target.value);
    }
    let collegeNameHandler = (event) => {
        setCollegeName(event.target.value);
    }
    let phoneNumber1Handler = (event) => {
        setPhoneNumber1(event.target.value);
    }
    let phoneNumber2Handler = (event) => {
        setPhoneNumber2(event.target.value);
    }
    let emailHandler = (event) => {
        setEmail(event.target.value);
    }


    let handleAddMember = (event) => {
        setMembers([...members, { userId: null }]);
    };



    let handleMemberChange = (event, index) => {
        const newMembers = [...members];
        newMembers[index][event.target.name] = event.target.value;
        setMembers(newMembers);
    };


    useEffect(() => {
        const getBaseUrl = () => {
            const { protocol, host } = window.location;
            const baseUrl = `${protocol}//${host}`;
            setBaseUrl(baseUrl);
        };

        getBaseUrl();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(members);
        let eventDetails = {
            event: eventName,
            leaderName: leaderName,
            leaderUserID: leaderUserID,
            collegeName: collegeName,
            mobileNo1: phoneNumber1,
            mobileNo2: phoneNumber2,
            email: email,
            memberNameAndUserID: members,
        }

        let response = null;

        try {
            response = await axios.post(`/register-event`, JSON.stringify(eventDetails), {
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

            setEventName(eventName);
            setLeaderName('');
            setLeaderUserID('');
            setCollegeName('');
            setPhoneNumber1('');
            setPhoneNumber2('');
            setEmail('');
            setMembers([{ userId: '' }]);

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
                toast.error('No response getting from server !', {
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


    };





    return (
        <div className='bg-secondary'>
            <ToastContainer />
            <Container className='mt-3'>
                <Row className="d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12}>

                        <Card className="shadow px-lg-4">
                            <Card.Body>
                                <div >
                                    <h2 className="fw-bold mb-4 text-uppercase text mt-5"><span className='reg'>Event registration</span></h2>
                                    <div className="mb-3">
                                        <Form onSubmit={handleSubmit} className='mb-2' >



                                            <Form.Group controlId="formSelector" className='mb-2' >
                                                <Form.Select onChange={eventNameHandler} required>
                                                    <option>Select Event</option>
                                                    {/* Music & Dance */}
                                                    <option  >Saaz – The solo instrumental (without Vocal)</option>
                                                    <option  >Goonj – The solo Singing</option>
                                                    <option  >Nrityanjali – A Classical Solo dance</option>
                                                    <option  >Elite Feet – A Solo dance</option>
                                                    <option  >Jasrang – The group singing</option>
                                                    <option  >The Grooves – A Group Dance</option>
                                                    <option  >Battle-on-Street – A Solo Battle Dance</option>
                                                    <option  >Gangesta – The Solo Rap</option>
                                                    {/* Acting & Drama  */}
                                                    <option >Rangmanch – Theatre Play </option>
                                                    <option >Tamasha – Nukkad</option>
                                                    <option >Bayaan – Open Mic</option>
                                                    <option >Roobaroo – Monoact</option>
                                                    {/* l & D  */}
                                                    <option  >Kavyanjali – Poetry / Shayari</option>
                                                    <option  >Kissa kahani – Story Telling</option>
                                                    <option  >Khabar – A Situation based journalism </option>
                                                    <option  >Shastrarth – A Parliamentary Debate</option>
                                                    <option  > Quizomania – Quiz </option>
                                                    <option  >Tech Lekh – Technical Writing</option>
                                                    {/* Fine & Arts  */}
                                                    <option  >Talking Strokes (Painting) </option>
                                                    <option  >Mukhauta (Face Painting)  </option>
                                                    <option  >Chitrakari (Sketching)</option>
                                                    <option  >Rang-Neeti (Rangoli)</option>
                                                    <option  >Wall Rush (wall Painting) </option>
                                                    <option > Rangbaazi (Finger Painting)</option>

                                                    {/* Online Event */}
                                                    <option >Feel the Reel – Reels Making (Online Events)</option>
                                                    <option  > Patrakar – Video Journalism(Online Event)</option>
                                                    <option  > Hasya – Meme Designing(Online Event) </option>
                                                    <option  >Snappers (Photography-Online Events) </option>

                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group controlId="GroupLeaderName" className='mb-2 formheader' >
                                                <FormLabel >Group Leader Name</FormLabel>
                                                <Form.Control value={leaderName} type="text" placeholder="Group Leader Name" onChange={leaderNameHandler} required />
                                            </Form.Group>

                                            <Form.Group controlId="UserId" className='mb-2 formheader'>
                                                <FormLabel>Group Leader UserId</FormLabel>
                                                <Form.Control value={leaderUserID} type="text" placeholder="Group Leader UserId" onChange={leaderUserIDHandler} required />
                                            </Form.Group>
                                            <Form.Group controlId="ClgName" className='mb-2 formheader'>
                                                <FormLabel>College Name</FormLabel>
                                                <Form.Control value={collegeName} type="text" placeholder="College Name" onChange={collegeNameHandler} required />
                                            </Form.Group>
                                            <Form.Group controlId="MobileNumber" className='mb-2 formheader'>
                                                <FormLabel>Mobile Number-1</FormLabel>
                                                <Form.Control value={phoneNumber1} type="tel" pattern="[0-9]{10}" placeholder="Mobile Number-1" onChange={phoneNumber1Handler} required />
                                            </Form.Group>
                                            <Form.Group controlId="MobileNumber" className='mb-2 formheader'>
                                                <FormLabel>Mobile Number-2</FormLabel>
                                                <Form.Control value={phoneNumber2} type="tel" pattern="[0-9]{10}" placeholder="Mobile Number-2" onChange={phoneNumber2Handler} required />
                                            </Form.Group>
                                            <Form.Group controlId="email" className='mb-2 formheader'>
                                                <FormLabel>Email</FormLabel>
                                                <Form.Control value={email} type="text" placeholder="Enter Email Id" onChange={emailHandler} required />
                                            </Form.Group>
                                            {/* Members Details  */}
                                            <p style={{ fontSize: '12px', marginBottom: '-2px' }}><spam style={{ color: 'red' }} >***</spam>User id not required for solo participant, Proceed for submission<spam style={{ color: 'red' }} >***</spam></p>
                                            <FormLabel >Member User Id</FormLabel>

                                            {members.map((member, index) => (
                                                <div key={index} className='row'>
                                                    <div className='col-lg-10 col-sm-12 mb-2 mx-auto' style={{ display: 'flex', justifyContent: 'center' }}>
                                                        <Form.Group controlId={`memberEmail${index}`}>
                                                            <Form.Control type="userId" placeholder="User Id" name="userId" value={member.userId} onChange={(event) => handleMemberChange(event, index)} />
                                                        </Form.Group>
                                                        <Button variant="secondary" onClick={handleAddMember} className='mx-2 addmember hower' style={{ fontSize: 10 }} >
                                                            Add Member
                                                        </Button>
                                                    </div>
                                                </div>

                                            ))}

                                            <div>
                                                <Button variant="danger" type="handleSubmit" className='mt-5 ereg hower ' style={{ marginLeft: '-9px' }} >
                                                    Submit
                                                </Button>

                                            </div>

                                        </Form>
                                        <div className="mt-5">
                                            <p className=" text-center">
                                                At the time of physical verification it's mandatory to carry Adhar Card , College Id and Two Photos.

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                            <a href='/form-fill' style={{ textDecoration: 'none' }} ><b>How to fill form</b></a>
                            <p>While facing issues regarding registration then you can contact us at (9798525268)</p>
                        </Card>
                    </Col>
                </Row>

            </Container>

        </div>
    );
};

export default EventRegistrationForm;

















