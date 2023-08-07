import '../App.css'
import '../css/mainPage.css'
import { Card } from 'react-bootstrap';
import mitmaai from '../photo/mitmaai.png'
function SponseredBy() {
    return (
        <>
            <div className='row sponserbody'>
                <p style={{ fontFamily: '800', fontSize: '6vh', textDecoration: 'underline' }}>Title Sponsor</p>
                <div className='col-lg-12 col-sm-12 mx-auto align-items-center justify-content-center d-flex '>

                    <Card  >
                        <Card.Img variant="top" src={mitmaai} style={{ height: '50vh', width: '50vh' }} className='d-flex' />
                    </Card>

                </div>

               

            </div>
        </>
    )
}

export default SponseredBy;