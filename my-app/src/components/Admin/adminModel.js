import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import '../../css/myModal.css'
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyVerticallyCenteredModal(props) {

  let adminDetails = {
    email:"vikasdbg453@gmail.com",
    password:"vikas&shavi",
    
  }
  let navigate = useNavigate();
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let passwordChangeHandler = (event)=>{
    setPassword(event.target.value);
  }
  let emailHandler = (event)=>{
    setEmail(event.target.value);
  }

  let loginHandler = (event)=>{
    event.preventDefault();
    if(email===adminDetails.email && password === adminDetails.password){
      navigate('/aksdfjl/adsfjlkasd/akjfdlkajflskd/aslkdjflkasjf/akfjdsklsdoruoi/vikasmit/shavi/vikas/shavivikasmit/shavi/vikas/shavivikasmit/shavi/vikas/shavi/vikas/kumar/yadav/kumar.in');

    }else{
      toast.error('Wrong Credentials', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
    
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

            <b>Admin</b>

          </Modal.Title>
        </Modal.Header>

        <Modal.Body className='modalBody p-3'  >


          <Form.Group controlId="clgName" className='mb-5 d-flex' >
            <i className="fa-solid fa-envelope fa-2x p-1" ></i>
            <Form.Control type="email" placeholder="Enter email" val={email} onChange={emailHandler} required />
          </Form.Group>
          <Form.Group controlId="clgName" className='mb-2 d-flex' >
            <i className="fa-solid fa-lock fa-2x p-1"></i>
            <Form.Control type="password" placeholder="Enter password" val={password} onChange={passwordChangeHandler} required />
          </Form.Group>

        </Modal.Body>

        <Modal.Footer>
          <span></span>
          <Nav.Link className='text-light nav-animation ' variant='dark' onClick={loginHandler}><b className='btn btn-info hower'>Login</b></Nav.Link>

        </Modal.Footer>
      </Modal>
    </>
  );

}

export default MyVerticallyCenteredModal;