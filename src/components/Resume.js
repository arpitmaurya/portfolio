import React, { Fragment } from 'react'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

function Resume() {
  return (
    <Fragment>
      <div className='col p-4'>
        <div className='p-4 bg-dark slide-in-top'>
          <div className='row'>
            <div className='col-6'>
              <h2 className='ff-jose fw-bold ls-2'>Arpit Maurya</h2>
            </div>
          </div>
          <hr></hr>
          <div className='row'>
            <div className='col-md-6'>
              <h4 className='ff-jose ls-2'>EXPERIENCE</h4>
              <ul>
                <li>
                  <h4 className='ff-jose my-1 text-red'>
                    Product Engineer & Teaching Assistant
                  </h4>
                  <h6 className='blue-label px-2 py-1'>Nov 2021 - Present</h6>
                  <p className='m-0'>
                    PEPCODING EDUCATION PRIVATE LTD · Full-time
                  </p>
                  <p>Noida, India</p>
                </li>
              </ul>
            </div>
            <div className='col-md-6'>
              <h4 className='ff-jose ls-2'>EDUCATION</h4>
              <ul>
                <li>
                  <h4 className='ff-jose my-1 text-red'>
                    B.sc - Information Technology
                  </h4>
                  <h6 className='blue-label px-2 py-1'>2019 - 2022</h6>
                  <p className='m-0'>Viva College, Mumbai, India</p>
                  {/* <p>CGPA: 8.05</p> */}
                </li>
              </ul>
            </div>
          </div>

          <hr></hr>

          <div className='row'>
            <div className='col-md-6'>
              <h4 className='ff-jose ls-2'>PROFILE</h4>
              <h1>
                <a
                  href='https://github.com/arpitmaurya'
                  target='/blank'
                  className='text-white text-decoration-none mx-2'
                >
                  <FaGithubSquare className='zoom-on-hover' />
                </a>
                <a
                  href='https://www.linkedin.com/in/arpitmaurya/'
                  target='/blank'
                  className='text-white text-decoration-none mx-2'
                >
                  <FaLinkedin className='zoom-on-hover' />
                </a>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Resume