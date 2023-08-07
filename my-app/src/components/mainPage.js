import React from 'react';
import '../css/mainPage.css';
import '../css/cardAnimation.css';
import Card from 'react-bootstrap/Card';
import actingDrama from '../photo/acting_drama.jpg';
import musicDance from '../photo/music_dance.jpg';
import litreture from '../photo/literature_debate.jpg';
import fineArts from '../photo/fine_arts.jpg';
import logoFiesta from '../photo/fiesta-logo.png';

const MainPage = () => {

    return (

        <div>

            <div class="bg">
                <div class="star-field">
                    <div class="layer-stars"></div>
                    <div class="layer-stars"></div>
                    <div class="layer-stars"></div>


                    <div className="row">

                        <div className='mb-4 ' style={{ marginTop: '10vh' }}>
                            <b style={{ color: 'white', }}><spam>The Inter College Cultural Fest of MIT Muzaffarpur</spam></b><br></br><br></br>
                            <marquee behavior="scroll" direction="left" scrollamount="15">
                                <b style={{ color: 'orange', fontSize: '4vh', fontWeight: '800', textShadow: '2px 2px 5px red' }}><pre>10<sup>th</sup> TO 12<sup>th</sup> AUGUST</pre></b>

                            </marquee>
                            <p style={{ color: 'white', fontSize: '2vh' }}>Registration Fee : ₹ 900/-
                                <a href='https://drive.google.com/file/d/12OG20cmx0GkfhDwFMg9b0L6LtXuvWDmx/view?usp=sharing' style={{ fontWeight:'600',fontSize:'3vh',marginLeft:'2vh' }}  >See More </a><br/>
                            </p>
                            <p style={{ color: 'white', fontSize: '2vh' }}>
                                Registration open
                            </p>

                            <a href='/userId-reg' className='btn btn-primary hower mx-auto m-2' style={{ width: '30vh' }} >Register </a>
                        </div>
                        <div className="col-lg-12 col-sm-12" >

                            <img src={logoFiesta} alt={fineArts} style={{ width: '70vw',margin:'-5vh' }} />
                        </div>

                    </div>


                </div>
            </div>
            <div className='me-lg-5 ms-lg-5 '>


                <div className='mb-2'>
                    <h1 style={{ textAlign: 'center' }} > <span style={{ textShadow: '4px 2px 8px rgba(128, 0, 0, 1)', textDecorationLine: 'underline' }}></span><br></br><br></br></h1>
                </div>



                <div className='row mx-auto ' >
                    <div className="col-lg-3  col-sm-12 m-sm-0 pb-5 card-animation  "   >
                        <Card  >
                            <a href='/acting-drama'>
                                <Card.Img variant="top" src={actingDrama} />
                            </a>
                            <Card.Body >
                                <a href='/acting-drama' className='btn btn-primary hower mx-auto' style={{ width: '30vh' }}  > ACTING & DRAMA </a>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-lg-3 col-sm-12 m-sm-0 pb-5 card-animation">
                        <Card >
                            <a href='/music-dance'>
                                <Card.Img variant="top" src={musicDance} />
                            </a>
                            <Card.Body >
                                <a href='/music-dance' className='btn btn-primary hower mx-auto' style={{ width: '30vh' }} >MUSIC & DANCE </a>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-lg-3 col-sm-12 m-sm-0 pb-5 card-animation">
                        <Card >
                            <a href='/literature-debate'>
                                <Card.Img variant="top" src={litreture} />
                            </a>
                            <Card.Body>
                                <a href='/literature-debate' className='btn btn-primary hower mx-auto' style={{ width: '30vh' }}>LITERATURE & DEBATE</a>
                            </Card.Body>

                        </Card>
                    </div>
                    <div className="col-lg-3 col-sm-12 m-sm-0 pb-5 card-animation">
                        <Card>
                            <a href='/fine-arts'>
                                <Card.Img variant="top" src={fineArts} />
                            </a>
                            <Card.Body>
                                <a href='/fine-arts' className='btn btn-primary hower mx-auto' style={{ width: '30vh' }}>FINE ARTS</a>
                            </Card.Body>
                        </Card>
                    </div>



                </div>
            </div>

        </div>


    )

}

export default MainPage;






