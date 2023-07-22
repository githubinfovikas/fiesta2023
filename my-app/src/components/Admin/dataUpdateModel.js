import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import '../../css/myModal.css'
import Nav from 'react-bootstrap/Nav';
import  axios  from 'axios';
import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function MyVerticallyCenteredModal(props) {
  let [email,setEmail] = useState("");
  let emailHandler = (event)=>{
    setEmail(event.target.value);

  }
  
  let paymentClickHandler = (event) => {
    event.preventDefault();
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      
    };
    const body = {
      email:email,
    }
    axios.put('/update',JSON.stringify(body), {headers} )
    .then(res => {
      console.log(res);
      toast.success('Success!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    })
    .catch(error => {
      console.error(error);
      toast.error('Error !', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    });
  

  }
  let imageClickHandler = (event) => {
    event.preventDefault();
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      
    };
    const body = {
      email:email,
    }
    axios.put('/removeImage',JSON.stringify(body), {headers} )
    .then(res =>{ console.log(res);
      toast.success('Paid update !', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    })
    .catch(error => {
      console.error(error);
      toast.error('Error !', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    });
  }



  let onlineEventClickHandler = (event) => {
    event.preventDefault();
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      
    };
    const body = {
      email:email,
    }
    axios.put('/OnlineEventUpdate',JSON.stringify(body), {headers} )
    .then(res => {
      console.log(res);
      toast.success('Online Event Payment Update', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    })
    .catch(error => {
      console.error(error);
      toast.error('Error !', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    });
  

  }


  return (
    <>
    <ToastContainer />
      <Modal
        {...props}
        size="m"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='modal'
      >

        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className='modalTitle'>

            <h1>Data Update</h1>

          </Modal.Title>
        </Modal.Header>

        <Modal.Body className='modalBody p-3'  >

          <p className='p-2'>This will permanently update to conform Email : <spam style={{color:'red'}}>{props.data.email}</spam> in the box below</p>
          <Form.Group  className='mb-5 d-flex' >
            <i className="fa-solid fa-envelope fa-2x p-1" ></i>
            <Form.Control type="email" placeholder="Enter email"   onChange={emailHandler} required />
          </Form.Group>


        </Modal.Body>

        <Modal.Footer>
          <span></span>
          <Nav.Link href="#" className='text-light nav-animation ' variant='dark' onClick={paymentClickHandler}><b className='btn btn-info hower'>Update Payment</b></Nav.Link>
          <Nav.Link href="#" className='text-light nav-animation ' variant='dark' onClick={imageClickHandler}><b className='btn btn-info hower' >Image Remove</b></Nav.Link>
          <Nav.Link href="#" className='text-light nav-animation ' variant='dark' onClick={onlineEventClickHandler}><b className='btn btn-info hower'>OnlineEvent Payment</b></Nav.Link>

        </Modal.Footer>
      </Modal>
    </>
  );

}

export default MyVerticallyCenteredModal;