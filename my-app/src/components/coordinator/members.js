import React from 'react';
import '../../css/footer.css';

import vi from '../../photo/vi.jpg'         //facilty    
import shweta from '../../photo/shweta.jpg'
import ashish from '../../photo/ashish.jpg'

import aditya from '../../photo/aditya.jpg';
import komal from '../../photo/komal.jpg';
import jahanvi from '../../photo/jahanvi.jpg';  
import saqib from '../../photo/saqib.jpg';
import akash from '../../photo/akash.jpg'
import saurabh from '../../photo/saurabh.jpg'



import vinay from '../../photo/vinay.jpg';
import shivam from '../../photo/shivam.jpg';
import ved from '../../photo/ved.jpg';
import ravi from '../../photo/ravi.jpg';


const Members = () => {

    return (
        <>
            <div className='bg-secondary' style={{ fontStyle: 'italic' }}>

                <div className='text-center '  >
                    <div>
                        <u className='btn btn-dark' style={{ marginTop: '10vh', width: '40vh' }}>Faculty Coordinator</u>
                    </div>
                    <div className="row p-4" style={{ justifyContent: 'space-between' }} >
                        <div className="col-lg-2 col-sm-12 me-lg-3 ms-lg-3 mb-4 text-center card-animation ">
                            <div className="card" >
                                <img src={vi} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Prof. R.P Gupta (EE) <br></br>Chairman</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-sm-12 me-lg-3 ms-lg-3 mb-4 text-center card-animation ">
                            <div className="card" >
                                <img src={ashish} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Prof. Ashish Kumar (CE) <br></br>Music & Dance</p>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-2 col-sm-12 me-lg-3 ms-lg-3 mb-4  text-center card-animation">
                            <div className="card" >
                                <img src={vi} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Dr. Shail Bala (ASHD) <br></br> Literature & Debate</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-12 me-lg-3 ms-lg-3 mb-4 text-center card-animation">
                            <div className="card " >
                                <img src={vi} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Prof. Rakesh Kumar (ECE) <br></br> Acting & Drama</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-sm-12 me-lg-3 ms-lg-3 mb-4 text-center card-animation">
                            <div className="card " >
                                <img src={shweta} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Prof. Shweta Kumari (IT) <br></br> Fine Arts</p>
                                </div>
                            </div>
                        </div>
                        <div className='p-3 fa-beat'>
                            <br></br>
                            <a href='/facilityCoordinator' className='hower  navbg' style={{ textDecoration: 'none' }}><h5>More</h5></a>
                            <br></br>
                        </div>

                    </div>
                </div>

                <div className='text-center '>
                    <div>
                        <u className='btn btn-dark ' style={{ width: '40vh' }}>Core Coordinator</u>
                    </div>
                    <div className="row p-4" style={{ justifyContent: 'space-between' }} >


                        <div className=" col-lg-3 col-sm-12 me-lg-3 ms-lg-3 mb-4 text-center card-animation ">
                            <div className="card" >
                                <img src={aditya} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Aditya Ashwini <br></br></p>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-3 col-sm-12 me-lg-3 ms-lg-3 mb-4 text-center card-animation">
                            <div className="card" >
                                <img src={komal} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Komal Rani<br></br></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-12 me-lg-3 ms-lg-3 mb-4 text-center card-animation">
                            <div className="card " >
                                <img src={saurabh} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Saurabh <br></br></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-12 me-lg-3 ms-lg-3 mb-4 text-center card-animation">
                            <div className="card " >
                                <img src={saqib} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Md Saquib Alam <br></br></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-12 me-lg-3 ms-lg-3 mb-4 text-center card-animation">
                            <div className="card " >
                                <img src={akash} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Akash Kumar<br></br></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-12 me-lg-3 ms-lg-3 mb-4 text-center card-animation">
                            <div className="card " >
                                <img src={jahanvi} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Jahanvi Kumari <br></br></p>
                                </div>
                            </div>
                        </div>
                        <div className='p-3 fa-beat'>
                            <br></br>
                            <a href=' /coreCoordinator' className=' hower navbg' style={{ textDecoration: 'none' }}><h5>More</h5></a>
                            <br></br>
                        </div>

                    </div>
                </div>


                <div className='text-center'>
                    <div>
                        <u className='btn btn-dark ' style={{ width: '40vh' }}>Senior Coordinator</u>
                    </div>
                    <div className="row p-4" style={{ justifyContent: 'space-between' }} >


                        <div className="col-lg-2 col-sm-12 me-lg-3 ms-lg-3 mb-4  text-center card-animation ">
                            <div className="card" >
                                <img src={vinay} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Vinay kumar <br></br>Music & Dance </p>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-2 col-sm-12 me-lg-3 ms-lg-3 mb-4  text-center card-animation">
                            <div className="card" >
                                <img src={shivam} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Shivam Kumar <br></br>Literature & Debate</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-12 me-lg-3 ms-lg-3 mb-4 text-center card-animation">
                            <div className="card " >
                                <img src={ved} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Ved Prakash <br></br> Fine Arts</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-sm-12 me-lg-3 ms-lg-3 mb-4 text-center card-animation">
                            <div className="card " >
                                <img src={ravi} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Ravi Jaiswal <br></br> Acting & Drama</p>
                                </div>
                            </div>
                        </div>
                        <div className='p-3 fa-beat'>
                            <br></br>
                            <a href='/seniorCoordinator' className='hower navbg' style={{ textDecoration: 'none' }}><h5>More</h5></a>
                            <br></br>
                        </div>

                    </div>
                </div>


                <div className='text-center '  >
                    <div>
                        <u className='btn btn-dark' style={{ width: '40vh' }}>Coordinator</u>
                    </div>
                    <div className="row p-4" style={{ justifyContent: 'space-between' }} >


                        <div className="col-lg-2 col-sm-12 me-lg-3 ms-lg-3 mb-4  text-center card-animation ">
                            <div className="card" >
                                <div className="card-body">
                                    <p className="card-text">Shivam Kumar Pathak<br></br>Music & Dance</p>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-2 col-sm-12 me-lg-3 ms-lg-3 mb-4  text-center card-animation">
                            <div className="card" >
                                <div className="card-body">
                                    <p className="card-text">Ashutosh Kumar <br></br>Literature & Debate</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-12 me-lg-3 ms-lg-3 mb-4 text-center card-animation">
                            <div className="card " >
                                <div className="card-body">
                                    <p className="card-text">Ashutosh Kumar <br></br> Fine & Arts</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-sm-12 me-lg-3 ms-lg-3 mb-4  text-center card-animation">
                            <div className="card " >
                                <div className="card-body">
                                    <p className="card-text">Sonali Kumari <br></br> Acting & Drama</p>
                                </div>

                            </div>
                        </div>
                        <div className='p-3 fa-beat'>
                            <br></br>
                            <a href='/juniorCoordinator' className='hower navbg ' style={{ textDecoration: 'none' }}><h5>More</h5></a>
                            <br></br>
                        </div>

                    </div>
                </div>


            </div>
        </>

    );
}

export default Members;

