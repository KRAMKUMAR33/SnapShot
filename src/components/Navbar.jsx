import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <br /><br /><br />

   <div id='log'>
   <h1 id='logs' >SnapShot</h1>
   </div>
<br />
<div className='row'>
  <div className='offset-4 col-6'>
    <div className='col-sm-6 ms-5'>
    <div  className="input-group  ">
  <input   className="form-control " aria-describedby="inputGroupFileAddon04" aria-label="Upload"/>
  <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">search</button>
</div>
</div>
</div>
</div>
<br /><br />
     
     <div className='content'>
      
      <div></div>
      <div >
      <Link to={'/'} className='pad'>Mountain</Link>
        <Link to={'/birds'} className='pad'>Birds</Link>
        <Link to={'/food'} className='pad'>Food</Link>
        <Link to={'/beach'} className='pad'>Beaches</Link>

      </div>
      <div></div>


     </div>
      
    </div>
  )
}

export default Navbar
