import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBBtn
} from 'mdb-react-ui-kit';

/* make sure to run npm install ndb-react-ui-kit */
export default function App() {
  return (
    <MDBFooter className='text-center text-black' style={{ backgroundColor: '#ffd2a5' }}>
      <MDBContainer className='p-4 pb-0'>
        <section className=''>
          <p className='d-flex justify-content-center align-items-center'>
            <span className='me-3'>Register for our newsletter</span>
            <MDBBtn type='button' outline color="dark" rounded>
              Sign up!
            </MDBBtn>
          </p>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright:
        <a className='text-black' href='https://google.com/'>
           ExTech
        </a>
      </div>
    </MDBFooter>
  );
}