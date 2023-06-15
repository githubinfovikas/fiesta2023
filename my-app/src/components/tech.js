import vikas from '../photo/vikastech.png';
import gautam from '../photo/gautamtech.png';
import shalini from '../photo/shalinitech.jpg';
import randhir from '../photo/randhir.jpg';
import '../css/cardAnimation.css'
function Tech() {
    return (
        <div className='bg-secondary'>


            <div>
                <b className='btn btn-dark ' style={{ marginTop: '10vh', width: '40vh' }}>Tech Team</b>
            </div>
            <div className='text-center'>
                <div className="row ">

                    <div className="col-lg-3 col-sm-12 p-5 text-center card-animation ">
                        <div className="card" >
                            <img src={vikas} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Vikas Kumar <br></br> Information Technology</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-12 p-5 text-center card-animation">
                        <div className="card" >
                            <img src={gautam} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Gautam Pandey <br></br> Information Technology</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-12 p-5 text-center card-animation">
                        <div className="card " >
                            <img src={randhir} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Randhir Kumar <br></br>Information Technology</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-12 p-5 text-center card-animation">
                        <div className="card " >
                            <img src={shalini} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Shalini Jha<br></br>Information Technology</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Tech;