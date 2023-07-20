import '../css/footer.css';
import React from 'react';
import MyVerticallyCenteredModal from './Admin/adminModel';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Footer() {


    const [modalData, setModalData] = React.useState({
        show: false,
        data: {}
    });

    return (
        <div className='footer '>
            <marquee behavior="scroll" direction="left" scrollamount="7">
                <h5 className="ms-3 mb-4 pt-2">Muzaffarpur Institute of Technology, Muzaffarpur</h5> <br></br>
            </marquee>
            <br></br>
            <br></br>
            <div className="row">
                <div className="col-lg-4 col-sm-12 mb-3">
                    <h5 className="bol">Any query regarding Fiesta'23 <br></br> Contact Us</h5>
                    <h6>Komal Rani : +91-9508074078</h6>
                    <h6>Nikhil : +91-7739602094</h6>
                    <h6>Vikas  : +91-9798525268 </h6>

                </div>

                <div className="col-lg-4 col-sm-12 mb-3" >

                    <NavDropdown title={<span className="text-white my-auto fw-bold "><span class="hower">Helpful Link</span></span>} id="basic-nav-dropdown">
                        <NavDropdown.Item className="navbg" href="/sponser">Presentation</NavDropdown.Item>
                        <NavDropdown.Item className='navbg' href='/form-fill'>How to fill form </NavDropdown.Item>
                    </NavDropdown>

                    <div className='p-4'>
                        <u className='row  btn btn-info navbg ' onClick={() => { setModalData(prevstate => ({ ...prevstate, show: true })) }} style={{ textDecoration: 'none' }} ><b>Admin</b></u>
                    </div>
                </div>



                <div className="col-lg-4 col-sm-12 mb-3">
                    <h5 className="bol">CONNECT WITH US</h5> <br></br>

                    <h6>

                        <a href="https://instagram.com/junoon_mit?igshid=YmMyMTA2M2Y=" target='blank'>
                            <i className="fa-brands fa-square-instagram white p-1 fa-2x fa-beat iconAnimation " style={{ color: "#41d2a7" }}></i>
                        </a>


                        <a href="https://www.facebook.com/junoonmit" target='blank'>
                            <i className="fa-brands fa-square-facebook white ms-4 p-1 fa-beat fa-2x" style={{ color: "#41d2a7", }} > </i>

                        </a>


                        <a href="https://youtube.com/@junoonmit2022" target='blank'>
                            <i class="fa-brands fa-square-youtube white ms-4 p-1 fa-beat fa-2x " style={{ color: "#41d2a7", }}></i>
                        </a>

                        <a href="https://t.me/fiesta_mitmuzaffarpur" target='blank'>
                            <i class="fa-brands fa-telegram white ms-4 p-1 fa-beat fa-2x " style={{ color: "#41d2a7", }}></i>
                        </a>



                    </h6>

                    <h6 className='mt-5 '>JUNOONMIT@GMAIL.COM</h6>



                </div>


                <div>
                    <div>
                        <h6>Muzaffarpur Institute of Technology
                            Muzaffarpur, Bihar, India
                            Pin - 842003
                        </h6>
                        <div className='d-flex auto' style={{justifyContent:'center'}}>
                            <i class="fa-solid fa-location-dot fa-1x p-1 fa-beat" ></i>
                            <a href='https://maps.app.goo.gl/8aHjw4T6mwS4brQA8' target='blank'  style={{textDecoration:'none',color:'white',marginBottom:'2vh',marginLeft:'-2vh',fontWeight:'600'}}><span className='hower'>Main Campus</span></a>
                        </div>
                    </div>
                    <div ><h3><a href='/tech-team'><b>Tech team</b></a></h3></div>
                </div>

            </div>
            <MyVerticallyCenteredModal
                show={modalData.show}
                data={modalData.data}
                onHide={() => setModalData(prevstate => ({ ...prevstate, show: false }))}
            />
        </div>





    )
}

export default Footer;


















