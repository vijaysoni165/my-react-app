import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation  from './component/Navigation';
import IndividualIntervalsExample from './component/Carousal';
import FlushExample from './component/Accordian';
// import ShowHideRadio from './component/ShowHideRadio';
import Alert from './component/Alert';
import ActiveClass from './component/ActiveClass';
import { Container } from 'react-bootstrap';
import Student from './component/Student';
import { useState } from 'react';
import StudentNew from './component/StudentNew';
import Menuselectedlink from './component/MenuSelectedLink';
import Restorent from './component/Basics/restoent';

 







function App() {
  const [name, setName] = useState("Anil");
  function apple(propsalert){
    alert(
      "HEllo"
    )
  }

  return (
    <>
    
    
    <Navigation />
    <IndividualIntervalsExample />
    <Container>
    
    <div className='mt-2'>
      <FlushExample />
    </div>
    <Alert />
    <ActiveClass />
    <Menuselectedlink />
    <Student name={name} />
    {/* <Student name="mangesh" email={'mangesh@gmail.com'} other={{Address: 'mumba', Mob: '26'}} />
    <Student name="peter" email={'peter@gmail.com'}  other={{Address: 'banglo', Mob: '462'}} />     */}
    <button onClick={()=> setName('Sidhu')} >Update Button</button>
    <button onClick={()=> apple()} >Update Button</button>

    <StudentNew name1={"Anil"} />
    

    </Container>
    {/* <div className='mt-2'>
      <ShowHideRadio />
    </div> */}


    <Restorent/>

    </>

  );
}


export default App;
