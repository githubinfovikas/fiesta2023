import Navabar from './components/mainPage';
import ActingDrama from './components/actingDrama';
import LiteratureDebate from './components/literatureDebate';
import FineArts from './components/fineArts';
import MusicDance from './components/musicDance';
import {Routes, Route} from "react-router-dom";
import Tech from './components/tech';
import Footer from './components/footer';
import Gallery from './components/gallery';
import Header from './components/header';
import Members from './components/coordinator/members';
import EventsReg from './components/eventsReg';
import UserIdReg from './components/UserIdReg';
import Details from './components/f_details';
// import SponseredBy from './components/sponseredBy';
import Animation from './components/animation';
import Faculty from './components/coordinator/Faculty';
import Core from './components/coordinator/core';
import Senior from './components/coordinator/senior';
import Junior from './components/coordinator/junior'
import Video from './components/video';
import './App.css';
import FormFill from './components/help/formFill';
import Sponser from './components/help/sponser';
import Admin from './components/Admin/admin'
import Registration from './components/Admin/registrationApi';
import AdminHeader from './components/Admin/adminHeader';
import OnlineEventReg from './components/onlineEventReg';
import OurGuest from './components/ourGuest';
function App() {

  return (
    <div className="App">
    
     <Routes>
          <Route path='/' element = {<div><Animation/></div>}></Route>
</Routes>


          <Routes>

          <Route path='/mainPage' element = {<div><Header/><Navabar/><Video/><Footer/></div>}/>                            
          <Route path='acting-drama' element={<div><Header/><ActingDrama/><Footer/></div>}/>
          <Route path='literature-debate' element={<div><Header/><LiteratureDebate/><Footer/></div>}/>
          <Route path='music-dance' element={<div><Header/><MusicDance/><Footer/></div>}/>
          <Route path='fine-arts' element={<div><Header/><FineArts/><Footer/></div>}/>
          <Route path='tech-team' element={<div><Header/><Tech/><Footer/></div>}/>
          <Route path='members' element={<div><Header/><Members/><Footer/></div>}/>
          <Route path='gallery' element={<div><Header/><Gallery/><Footer/></div>}/> 
          <Route path='event-reg' element={<div><Header/><EventsReg/></div>}/> 
          <Route path='onlineEventReg' element={<div><Header/><OnlineEventReg/></div>} />
          <Route path='userId-reg' element={<div><Header/><UserIdReg/><Footer/></div>}/> 
          <Route path='details' element={<div><Header/><Details/><Footer/></div>}/> 
          <Route path='facilityCoordinator' element={<div><Header/><Faculty/><Footer/></div>}/>
          <Route path='coreCoordinator' element={<div><Header/><Core/><Footer/></div>}/>
          <Route path='seniorCoordinator' element={<div><Header/><Senior/><Footer/></div>}/>
          <Route path='juniorCoordinator' element={<div><Header/><Junior/><Footer/></div>}/>
          <Route path='form-fill' element={<div><Header/><FormFill/></div>}/>
          <Route path='sponser' element={<div><Header/><Sponser/></div>}/>
          <Route path='/aksdfjl/adsfjlkasd/akjfdlkajflskd/aslkdjflkasjf/akfjdsklsdoruoi/vikasmit/shavi/vikas/shavivikasmit/shavi/vikas/shavivikasmit/shavi/vikas/shavi/vikas/kumar/yadav/kumar.in' element={<div><AdminHeader/><Admin/></div>}/>
          <Route path='/akjlfdl/kjadljire/junoon/4389823/fiesta/akldfkj3/event/lvikas/uweoeowi/eopwukdf/2023/jls/mit/akdfj/vivikas/kumar/kumar/dfafd/adf/adfasd/fasdf/fas/f/asdfa/fdasdf/asdf/d.in' element={<div><AdminHeader/><Registration/></div>}/>
          <Route path='ourGuest' element={<div><Header/><OurGuest/><Footer/></div>}/>

          </Routes>

      
    </div>
  );
}

export default App;
