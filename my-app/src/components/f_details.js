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
                <h3 className='my-5 ' style={{ fontSize: '5vh' }}>Location</h3> <br></br>
                <p>Audition-AVH</p>
                <p>New Examination Hall - Area A</p>
                <p>Main Ground Stage - Open Area B</p>
                <p>Location is accessible and step-free.</p>
                <br></br>
                <h5 className='my-1 ' style={{ fontSize: '5vh' }}>Dates</h5> <br></br>
                <b style={{ color: 'orange', fontSize: '4vh', fontWeight: '800', textShadow: '2px 2px 5px red' }}><pre>10<sup>th</sup> TO 12<sup>th</sup> AUGUST</pre></b>

                <p>Thursday to Saturday</p>
                
            </div>


        </div>






    )
}

export default F_details;