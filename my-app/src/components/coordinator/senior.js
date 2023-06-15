import React from 'react'
import Data from './data';
import Card from 'react-bootstrap/Card';
function Senior() {
    return (
        <div className='bg-secondary'>

            <div>
                <u className='btn btn-dark ' style={{ marginTop: '10vh', width: '40vh' }}>Senior Coordinator</u>
                <br></br>
                <br></br>
            </div>
            <div className="row me-lg-3 ms-lg-3 mx-auto" style={{ justifyContent: 'space-between' }}>
                {
                    Data.senior.map((item, index) => {
                        return (
                            <>
                                <div className='col-lg-3 col-sm-12 m-sm-0 p-5'>
                                    <Card className="card-animation">
                                        <Card.Img variant="top" src={item.imgSrc}  />
                                        <Card.Body>
                                            <Card.Title><div style={{ fontSize: '2vh',fontStyle:'italic' }}>{item.title}</div></Card.Title>
                                            <Card.Title><div style={{ fontSize: '2vh',fontStyle:'italic' }}>{item.about}</div></Card.Title>
                                        </Card.Body>
                                    </Card>
                                </div>


                            </>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Senior;
