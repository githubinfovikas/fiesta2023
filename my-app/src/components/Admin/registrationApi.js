// Event Registration API 

import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function Registration() {
    const [registrationList, setRegistrationList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const fetchRegistrations = async () => {
            try {
                const response = await axios.get('/registrationData');
                console.log('Get registrations successfully');
                console.log('Response:', response.data);
                setRegistrationList(response.data);
                setIsLoaded(true);
            } catch (error) {
                console.error('Error fetching registrations:', error);
            }
        };

        fetchRegistrations();
    }, []);

    return (
        <>
            <div className='bg-secondary'>
                <div>
                    <u className='btn btn-dark' style={{ marginTop: '10vh', width: '40vh' }}>
                        Event Registration Details
                    </u>
                    <br />
                    <br />
                </div>
                <div className='row me-lg-3 ms-lg-3 mx-auto'>
                    {isLoaded &&
                        registrationList.map((item, index) => (
                            <div key={index} className='col-lg-3 col-sm-12 m-sm-0 pb-4 box'>
                                <Card className='card-animation m-2'>
                                    <Card.Body>
                                        <b>{item.event}</b>
                                        <br />
                                        Leader Name : {item.leaderName}
                                        <br />
                                        Leader User ID : {item.leaderUserID}
                                        <br />
                                        College : {item.collegeName}
                                        <br />
                                        Phone Number : {item.mobileNo1}
                                        <br />
                                        <b style={{ color: 'red' }}>Member Details</b>
                                            {item.memberNameAndUserID.map((member, memberIndex) => (
                                                <li key={memberIndex}>
                                                    {member.userId}
                                                </li>
                                            ))}
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
}

export default Registration;
