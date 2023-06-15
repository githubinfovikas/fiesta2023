import '../App.css'
import '../css/mainPage.css'
import { Card } from 'react-bootstrap';
import logoJunoon from '../photo/sponce.png'
function SponseredBy() {
    return (
        <>
            <div className='row ' style={{ height: '60vh' }}>
                <div className='col-lg-12 col-sm-4 mx-auto'>
                    <Card style={{ borderRadius: '50%' }} >
                        <Card.Img variant="top" src={logoJunoon} style={{ height: '60vh' }} />
                    </Card>
                </div>

            </div>
        </>
    )
}

export default SponseredBy;