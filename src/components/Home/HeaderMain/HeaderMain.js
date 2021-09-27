import React from 'react';
import chair from '../../../images/HomePic1.png';

const HeaderMain = () => {
    return (
        <main className="row">
          <div className = "col-md-4 offset-md-1">
              <h1> Your smile :) Our Priority</h1>
              <p>lorem  something</p>
              <button class="btn btn-primary">Appointment</button>
              </div>  
         <div className="col-md-6">
             <img src={chair} alt="" className="img-fluid"/>
         </div>
        </main>
    );
};

export default HeaderMain;