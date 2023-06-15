import React from 'react';
import { Container } from 'react-bootstrap';

function Video() {
    return (
        <div>
            <Container>


                <div className='row justify-content-center' >
                    <div className='col-lg-6 col-sm-12 p-5 d-flex justify-content-center align-items-center'>
                        <iframe style={{ height: '45vh', width: '70vh' }} src='https://www.youtube.com/embed/fdPcu18a3zU' title='#'></iframe>

                    </div>

                    <div className='col-lg-6 col-sm-12 p-5 d-flex justify-content-center align-items-center'>
                        <iframe style={{ height: '45vh', width: '70vh' }} width="853" height="480" src="https://www.youtube.com/embed/Ycc1iT5ieYo?list=PLZjTxy2HfIS1CbQpaGgFaEnW2luRS0Pjv" title="MIT JUNOON FIESTA&#39;18 || Dhunki girls || Pragya &amp; Ashmita 2k17"></iframe>
                    </div>

                    <div className='col-lg-6 col-sm-12 p-5 d-flex justify-content-center align-items-center'>
                        <iframe style={{ height: '45vh', width: '70vh' }} width="853" height="480" src="https://www.youtube.com/embed/EWacRibimz8?list=PLZjTxy2HfIS1CbQpaGgFaEnW2luRS0Pjv" title="MIT JUNOON PRESENTS NUKKAD NATAK ON MEGA FESTIVAL OF DEMOCRACY  @DRB MALL MUZAFFARPUR" ></iframe>

                    </div>

                    <div className='col-lg-6 col-sm-12 p-5 d-flex justify-content-center align-items-center'>
                        <iframe style={{ height: '45vh', width: '70vh' }} src='https://www.youtube.com/embed/W1cG2U3rgl4' title='#'></iframe>
                    </div>

                    <div>
                        <a href='https://youtube.com/@junoonmit2022' className='btn btn-primary hower m-5 fa-beat'>View more... </a>
                    </div>

                </div>


            </Container>
        </div>
    );
}

export default Video;
