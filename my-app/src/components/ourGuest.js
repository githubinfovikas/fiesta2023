import '../css/cardAnimation.css'
function OurGuest() {
    return (
        <div className='bg-secondary'>


            <div>
                <b className='btn btn-dark ' style={{ marginTop: '10vh', width: '40vh' }}>Our Guest</b>
            </div>
            <div className='text-center d-flex' >
                <div className="row ">

                    <div className="col-lg-3 col-sm-12 p-5 text-center card-animation ">
                        <div className="card" >
                            <img src="https://imgur.com/YC2I9Ho.png" className="card-img-top" alt="Indian Idol" />
                            <div className="card-body">
                                <p className="card-text">Amarjeet Jaikar <br></br> Indian Idol</p>
                            </div>
                        </div>
                    </div>
                

                    <div className="col-lg-3 col-sm-12 p-5 text-center card-animation">
                        <div className="card" >
                            <img src="https://imgur.com/W09ZGZ7.png" className="card-img-top" alt="ekbihari" />
                            <div className="card-body">
                                <p className="card-text">Aishwarya Anand <br></br> ekbihari </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-12 p-5 text-center card-animation">
                        <div className="card " >
                            <img src="https://imgur.com/1pJHs16.png" className="card-img-top" alt="Amit Kumar Azad" />
                            <div className="card-body">
                                <p className="card-text">Amit Kumar Azad</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-12 p-5 text-center card-animation">
                        <div className="card " >
                            <img src="https://imgur.com/KUiT7T4.png" className="card-img-top" alt="Talk Show " />
                            <div className="card-body">
                                <p className="card-text">Ashish Kaushik <br></br>Talk Show </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-12 p-5 text-center card-animation mx-auto">
                        <div className="card " >
                            <img src="https://imgur.com/tfeG9sj.png" className="card-img-top" alt="Talk Show " />
                            <div className="card-body">
                                <p className="card-text">Antra Malik<br></br>Miss Bihar </p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default OurGuest;