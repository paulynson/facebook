import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import facebook from './image/facebook.png'
import { Button } from 'react-bootstrap';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


function Home() {
    return (
        <div>
            <header className="container d-flex justify-content-between aItems">
<div className="row">
<div className="col-lg-7 text-left text-center-md text-center-sm image">
<img src={facebook} alt="" className="img-fluid"/>
<p className="text-left text-center-md text-center-sm text-dark fText">Facebook helps you connect and share with the people in your life.</p>
</div>

<div className="col-lg-5 p-3">

<div className="shadow bg-white p-3 bRadius">
<form action="" className="form-group">
<input type="text" className="form-control mt-2" placeholder="Email address or phone number"/>
<input type="password" className="form-control mt-2" placeholder="Password"/>
<input type="submit" className="form-control mt-2 btn btn-primary" value="Log In"/>
</form>
<a href="#c" className="btn-link">Forgotten password?</a>
<hr />

{/* <Button className="btn-success mb-3">Create New Account</Button> */}

<Popup trigger={<Button className="btn-success mb-3"> Create New Account </Button>} position="left center" >
    <div className="bg-popup w-100">
    <div className="shadow bg-white p-5 w-100">
        
    <form action="" className="form-group">
<input type="text" className="form-control mt-2" placeholder="Email address or phone number"/>
<input type="password" className="form-control mt-2" placeholder="Password"/>
<input type="submit" className="form-control mt-2 btn btn-primary" value="Log In"/>
</form>

    </div>
    </div>
  </Popup>

</div>

<p className="text-dark pSmall mt-3"><a href="#c" className="btn-link tSmall" alt="">Create a Page</a> for a celebrity, band or business.</p>



</div>

</div>
</header>




  {/* <Popup trigger={<button>Trigger</button>} position="center">
    {close => (
      <div>
        Content here
        <a className="close" onClick={close}>
          &times;
        </a>
      </div>
    )}
  </Popup> */}



        </div>
    )
}

export default Home
