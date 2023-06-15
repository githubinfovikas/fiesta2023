//First page animation create.
import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import '../css/animation.css'
import fiestalogo from '../photo/fiesta mask final logo.png'
import firstanimation from '../animation/fontpage.mp4'

function Footer() {
    return (


        <section >

            <div className='video-background-container  ' >
                <video autoPlay muted loop className="video-background">
                    <source src={firstanimation} type="video/mp4" />
                </video>

                <div className="row  " onload="myFunction()" >

                    <div className="col-lg-12 col-sm-12 "   >
                        <a href="/mainPage" >
                            <div class="ring"><div class='ring'><div class='ring'><div class='ring'><div class='ring'><div class='ring'><div class='ring'>
                                <div>

                                    <Card style={{ borderRadius: '50%' }} >
                                        <Card.Img variant="top" src={fiestalogo} style={{ borderRadius: '50%' }} />
                                    </Card>
                                </div>
                            </div></div> </div> </div></div></div></div>
                        </a>
                    </div>

                    <div className="col-lg-12 col-sm-12 mb-3" style={{ marginTop: '600px' }}>
                        <Button variant="danger" disabled>
                            <Spinner
                                as="span"
                                animation="border"
                                size="lg"
                                role="status"
                                aria-hidden="true"
                            />
                            <span className="visually-hidden">Loading...</span>
                        </Button>{' '}

                        <a href="/mainPage" >
                            <Button className="ereg" variant="danger" style={{ width: '80vw' }}   >
                            <marquee behavior="scroll" direction="left" scrollamount="10">
                                <Spinner
                                    as="span"
                                    animation="grow"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                                
                                    <b style={{ textDecoration: 'none' }} > Click Here..!</b>
                                </marquee>


                            </Button>
                        </a>


                    </div>


                </div>


            </div>




        </section>
    )
}




export default Footer;