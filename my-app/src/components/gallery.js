import React from 'react';
import Data from './data';
import Card from 'react-bootstrap/Card';
import '../css/cardAnimation.css';

const Gallery = () => {
  return (
    <>
      <div className='bg-secondary'>
        <div>
          <u className='btn btn-dark' style={{ marginTop: '10vh', width: '40vh' }}>Memories</u>
          <br />
          <br />
        </div>
        <div className="row me-lg-3 ms-lg-3 mx-auto " >
          {Data.galleryData.map((item, index) => {
            return (
              <div key={index} className='col-lg-3 col-sm-12 m-sm-0 pb-4 box'>
                <Card className="card-animation m-2">
                  <Card.Img variant="top" src={item.imgSrc} style={{ height: '50vh' }} />
                  <Card.Body></Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Gallery;
