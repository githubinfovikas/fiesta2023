import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MyVerticallyCenteredModal from './dataUpdateModel';


function Admin() {
    const [imageList, setImageList] = useState([]);
    const [isLoaded, setIsLoaded] = useState([]);
    const [baseUrl, setBaseUrl] = useState("");
    useEffect(() => {
        const headers = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        };
        axios.get(`/all`, { headers })
            .then(response => {
                console.log('get images successfully');
                console.log('Response:', response.data);
                imageList.push(response.data);
                imageList[0].forEach(element => {
                    console.log(element.image);
                });
                setIsLoaded(true);
            })
            .catch(error => {
                console.error('Error creating post:', error);
            });

    }, []);


    const [modalData, setModalData] = React.useState({
        show: false,
        data: {}
    });
    useEffect(() => {
        const getBaseUrl = () => {
            const { protocol, host } = window.location;
            const baseUrl = `${protocol}//${host}`;
            setBaseUrl(baseUrl);
        };

        getBaseUrl();
    }, []);
    return (
        <>
            <div className='bg-secondary'>
                <div>
                    <u className='btn btn-dark' style={{ marginTop: '10vh', width: '40vh' }}>Registration User Data</u>
                    <br />
                    <br />
                </div>
                <div className="row me-lg-3 ms-lg-3 mx-auto " >
                    {!Array.isArray(imageList[0]) ? imageList.map((item, index) => {
                        return (
                            <div key={index} className='col-lg-3 col-sm-12 m-sm-0 pb-4 box'>
                                <Card className="card-animation m-2">
                                    <Card.Img variant="top" src={item} style={{ height: '50vh' }} />
                                    <Card.Body></Card.Body>
                                </Card>
                            </div>
                        );
                    }) : imageList[0].map((item, index) => {
                        return (
                            <div key={index} className='col-lg-3 col-sm-12 m-sm-0 pb-4 box'>
                                <Card className="card-animation m-2" onClick={() => { setModalData(prevstate => ({ ...prevstate, show: true, data: item })) }}>
                                    <Card.Img variant="top" src={item.image} style={{ height: '50vh' }} />
                                    <Card.Body>
                                        {item.collegeName} <br></br>
                                        {item.name}   <br></br>
                                        {item.email} <br></br>
                                        {item.document} : {item.documentID} <br></br>
                                        {item.userID}<br></br>
                                        T-Shirt Size: {item.tshirt}<br></br>
                                        Tr. ID:{item.trID}<br></br>
                                        <b style={{ color: "green" }}>{item.paidOnlineEvent ? "Online Event Paid : true" : <b style={{ color: 'red' }}>Online Event Paid : false</b>}</b> <br></br>
                                        <b style={{ color: "green" }}>{item.paid ? "Paid : true" : <b style={{ color: 'red' }}>Paid : false</b>}</b> <br></br>
                                    </Card.Body>

                                </Card>
                            </div>
                        );
                    })}
                </div>
            </div>
            <MyVerticallyCenteredModal
                show={modalData.show}
                data={modalData.data}
                onHide={() => setModalData(prevstate => ({ ...prevstate, show: false }))}
            />
        </>
    )
}

export default Admin;
