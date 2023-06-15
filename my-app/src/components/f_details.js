//Accommodation part 
import '../App.css'
import '../css/mainPage.css'
import Card from 'react-bootstrap/Card';
import fd1 from '../photo/Fiesta memory.jpg'
import fd2 from '../photo/Fiestgallery.jpg'
function F_details() {
    return (
        <div className="row " style={{ margin: '10vh' }}>
            <div className="col-lg-6 col-sm-12  m-0 p-0  ">

                <Card >
                    <Card.Img variant="top" src={fd1} />
                </Card>
                <Card >
                    <Card.Img variant="top" src={fd2} />
                </Card>
            </div>
            <div className="col-lg-6 col-sm-12 bl"  >
                <h3 className='my-3 ' style={{ fontSize: '5vh' }}>Location</h3> <br></br>
                <p>Audition-AVH</p>
                <p>New Examination Hall - Area A</p>
                <p>Main Ground Stage - Open Area B</p>
                <p>Location is accessible and step-free.</p>
                <br></br>
                <h5 className='my-1 ' style={{ fontSize: '5vh' }}>Dates</h5> <br></br>
                <p>July 9 to July 11,</p>
                <p>Sunday to Tuesday</p>
                ............

                <h5 className='mt-5  ' style={{ fontSize: '5vh' }} >Times</h5> <br></br>
                <p>Gates open at 5:00 pm</p>
                <p>Performances from</p>
                <p>6:00 pm to 11:00 pm</p>
            </div>


        </div>






    )
}

export default F_details;