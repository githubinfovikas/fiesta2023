import Modal from 'react-bootstrap/Modal';
import '../css/myModal.css';
import Nav from 'react-bootstrap/Nav';

function MyVerticallyCenteredModal(props) {

  return (
    <>

      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='modal'
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className='modalTitle'>

            {props.data.title}

          </Modal.Title>
        </Modal.Header>

        <Modal.Body className='modalBody' style={{ backgroundColor: "black" }}  >

          <img src={props.data.imgSrc} alt="" style={{ borderRadius: '3vh', height: '20vh', display: 'flex', justifyContent: 'center' }} />
          <br></br>
          <p style={{ color: 'white',margin:'-2vh'}}> 
            {props.data.about}
          </p>

        </Modal.Body>

        <Modal.Footer>
          <Nav.Link target='blank' href={props.data.rulebook} className='text-light nav-animation ' variant='outline-success'><b className='btn btn-danger hower'>Rulebook</b></Nav.Link>
          <span></span>
          <Nav.Link href={props.data.registraionLink} className='text-light nav-animation ' variant='outline-success'><b className='btn btn-danger hower'>Event Register</b></Nav.Link>
          
        </Modal.Footer>
      </Modal>
    </>
  );

}

export default MyVerticallyCenteredModal;
