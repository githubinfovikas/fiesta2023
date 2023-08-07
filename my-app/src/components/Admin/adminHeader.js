import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import maskLogo from '../../photo/fiesta mask final logo.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../css/header.css';
import '../../css/navAnimation.css';


function AdminHeader() {

  

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
              <div style={{ color: 'white' }}>
                <NavDropdown title={<span className="text-white my-auto fw-bold "><span class="hower">Admin</span></span>} id="basic-nav-dropdown">
                  <NavDropdown.Item className="navbg" href="/aksdfjl/adsfjlkasd/akjfdlkajflskd/aslkdjflkasjf/akfjdsklsdoruoi/vikasmit/shavi/vikas/shavivikasmit/shavi/vikas/shavivikasmit/shavi/vikas/shavi/vikas/kumar/yadav/kumar.in">Registration</NavDropdown.Item>
                  <NavDropdown.Item className="navbg" href="/akjlfdl/kjadljire/junoon/4389823/fiesta/akldfkj3/event/lvikas/uweoeowi/eopwukdf/2023/jls/mit/akdfj/vivikas/kumar/kumar/dfafd/adf/adfasd/fasdf/fas/f/asdfa/fdasdf/asdf/d.in">Event</NavDropdown.Item>
                </NavDropdown>
              </div>

              
            </Nav>
            <div className='d-flex'>
              <Nav.Link href="/userId-reg" className='text-light nav-animation ' variant='outline-success'><b className='btn btn-danger hower' style={{width:'30vh'}}>Register</b></Nav.Link>

            </div>
          </Navbar.Collapse>
        </Container>
        
      </Navbar>

    
    </>
  )
}
export default AdminHeader;








