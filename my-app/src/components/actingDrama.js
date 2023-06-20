//Acting Drama card model create.

import Card from 'react-bootstrap/Card'
import React from 'react';
import '../css/popup.css';
import Data from './data';
import MyVerticallyCenteredModal from './modal';
import '../css/cardAnimation.css'


function Events() {

  const [modalData, setModalData] = React.useState({
    show: false,
    data: {}
  });
  
  return (
    <>
      <div className='bg-secondary'>
        <div >
          <b className='btn btn-dark' style={{ marginTop: '10vh', width: '40vh' }}>Event List of Acting & Drama</b>
          <br></br>
          <br></br>
        </div>

        < div className='row me-lg-3 ms-lg-3  '>
          {
            Data.actingDrama.map((item, index) => {

              return (<>

                <div className="col-lg-3 col-sm-12  pb-5 mx-auto " style={{padding:'40px'}}>
                  <Card className="card-animation card-border" onClick={() => { setModalData(prevstate => ({ ...prevstate, show: true, data: item })) }}>
                    <Card.Img variant="top" src={item.imgSrc}  style={{ height: '38vh' }}  />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                    </Card.Body>
                  </Card>
                </div>
              </>
              )
            })}





        </div>




        <MyVerticallyCenteredModal
          show={modalData.show}
          data={modalData.data}
          onHide={() => setModalData(prevstate => ({ ...prevstate, show: false }))}
        />
      </div>
    </>
  );
}

export default Events;

