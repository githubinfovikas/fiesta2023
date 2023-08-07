import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import maskLogo from '../photo/fiesta mask final logo.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../css/header.css';
import '../css/navAnimation.css';
import Registration from './Admin/registrationApi';


function Header() {



  return (
    <>
      <Navbar bg="black" className="fixed-top " expand="lg" style={{ fontSize: '17px', height: '9vh' }}>
        <Container >
          <Navbar.Brand href="/mainPage">
            <img src={maskLogo} className="d-inline-block align-top " alt="My Logo" style={{ height: '50px', width: '70px', marginBottom: '3px' }} />
          </Navbar.Brand>
          <Navbar.Toggle className="custom-toggler" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navbg ">
              <Nav.Link href="/gallery" className='text-light nav-animation  '><b><span className="hower ">Gallery</span></b></Nav.Link>
              <Nav.Link href="/members" className='text-light nav-animation'><b><span className="hower">Members</span></b></Nav.Link>
              <div style={{ color: 'white' }}>
                <NavDropdown title={<span className="text-white my-auto fw-bold "><span class="hower">Event</span></span>} id="basic-nav-dropdown">
                  <NavDropdown.Item className="navbg" href="/acting-drama">Acting & Drama</NavDropdown.Item>
                  <NavDropdown.Item className="navbg" href="/music-dance">Music & Dance</NavDropdown.Item>
                  <NavDropdown.Item className="navbg" href="/literature-debate">Literature & Debate</NavDropdown.Item>
                  <NavDropdown.Item className="navbg" href="/fine-arts">Fine Arts</NavDropdown.Item>
                </NavDropdown>
              </div>
              <Nav.Link href="/details" className='text-light nav-animation'><b><span className="hower ">Accommodation</span></b></Nav.Link>
              <div style={{ color: 'white' }}>
                <NavDropdown title={<span className="text-white my-auto fw-bold "><span class="hower">Notification</span></span>} id="basic-nav-dropdown">
                  <NavDropdown.Item className="navbg" href="/onlineEventReg">Online Event Registration</NavDropdown.Item>
                  <NavDropdown.Item className="navbg" href="https://youtu.be/yvYg_nf2GUg">How to register
                    <i className="fa-brands fa-square-youtube white fa-beat m-2" style={{ color: "#41d2a7" }} > </i>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="navbg" href="/sponser">Presentation Video</NavDropdown.Item>
                  <NavDropdown.Item className="navbg" target='blank' href="https://drive.google.com/file/d/10XvbRMR6iSnC1lrXZvJfpYkq68_8QC7Q/view?usp=sharing">Acting Drama Rulebook</NavDropdown.Item>
                  <NavDropdown.Item className="navbg" target='blank' href="https://drive.google.com/file/d/10W_3AnqToQnIZJTmU1SM908DC5m3BdyQ/view?usp=sharing">Music Dance Rulebook</NavDropdown.Item>
                  <NavDropdown.Item className="navbg" target='blank' href="https://drive.google.com/file/d/10OqG4c72oS1C_oDpYPonAk9MsCGKJRC8/view?usp=sharing">Literature Debate Rulebook</NavDropdown.Item>
                  <NavDropdown.Item className="navbg" target='blank' href="https://drive.google.com/file/d/10JOwgKtclDDwqFmRWG2f9suxzu8UlkQc/view?usp=sharing">Fine arts Rulebook</NavDropdown.Item>

                </NavDropdown>
              </div>

              <Nav.Link href="/OurGuest" className="text-light nav-animation"> <b><span className="hower">Our Guest</span></b></Nav.Link>
            </Nav>
            <div className='d-flex'>
              <Nav.Link href="/userId-reg" className='text-light nav-animation ' variant='outline-success'><b className='btn btn-danger hower' style={{ width: '30vh' }}>Register</b></Nav.Link>

            </div>
          </Navbar.Collapse>
        </Container>

      </Navbar>


    </>
  )
}
export default Header;








