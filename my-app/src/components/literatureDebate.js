import Card from 'react-bootstrap/Card'
import React from 'react';
import '../css/popup.css';
import '../css/cardAnimation.css';
import Data from './data';
import MyVerticallyCenteredModal from './modal';


function LiteratureDebate() {
  const [modalData, setModalData] = React.useState({
    show: false,
    data: {}
  });

  return (
    <>
      <div className='bg-secondary'>
        <div>
          <u className='btn btn-dark' style={{ marginTop: '10vh', width: '40vh' }}>Event List of Literature & Debate</u>
          <br></br>
          <br></br>
        </div>


        < div className='row me-lg-3 ms-lg-3'>
          {
            Data.literatureDebate.map((item, index) => {

              return (<>

                <div className="col-lg-3 col-sm-12 m-sm-0 pb-5" style={{padding:'40px'}}>
                  <Card className="card-animation card-border" onClick={() => { setModalData(prevstate => ({ ...prevstate, show: true, data: item })) }}>
                    <Card.Img variant="top" src={item.imgSrc}  style={{ height: '38vh' }} />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>

                    </Card.Body>
                  </Card>

                </div>


              </>
              )
            }
            )
          }





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

export default LiteratureDebate;