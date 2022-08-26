import React, { Fragment } from 'react'

function Skills() {
  return (
    <Fragment>
      <div className='col py-3 d-flex align-items-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-12 col-sm-12 d-flex align-items-center'>
              <div>
                <h1 className='font-big text-red slide-in-top'>
                  Technologies I know
                </h1>
                <hr></hr>

                <div className='row my-2'>
                  <div className='col-lg-3 col-md-3 py-3 col-sm-4 col-6 d-flex justify-content-center'>
                    <img
                      className='technology-image  slide-in-bottom-technology'
                      src='./assets/images/React.png'
                      alt='React'
                    ></img>
                  </div>
                  <div className='col-lg-3 col-md-3 py-3 col-sm-4 col-6 d-flex justify-content-center'>
                    <img
                      className='technology-image  slide-in-bottom-technology'
                      src='./assets/images/js.png'
                      alt='Java Script'
                    ></img>
                  </div>
                  <div className='col-lg-3 col-md-3 py-3 col-sm-4 col-6 d-flex justify-content-center'>
                    <img
                      className='technology-image  slide-in-bottom-technology'
                      src='./assets/images/html.png'
                      alt='Html'
                    ></img>
                  </div>
                  <div className='col-lg-3 col-md-3 py-3 col-sm-4 col-6 d-flex justify-content-center'>
                    <img
                      className='technology-image  slide-in-bottom-technology'
                      src='./assets/images/css.png'
                      alt='Css'
                    ></img>
                  </div>
                  <div className='col-lg-3 col-md-3 py-3 col-sm-4 col-6 d-flex justify-content-center'>
                    <img
                      className='technology-image  slide-in-bottom-technology'
                      src='./assets/images/bootstrap.png'
                      alt='Bootstrap'
                    ></img>
                  </div>
                  <div className='col-lg-3 col-md-3 py-3 col-sm-4 col-6 d-flex justify-content-center'>
                    <img
                      className='technology-image  slide-in-bottom-technology'
                      src='./assets/images/mongodb.png'
                      alt='MongoDb'
                    ></img>
                  </div>
                  <div className='col-lg-3 col-md-3 py-3 col-sm-4 col-6 d-flex justify-content-center'>
                    <img
                      className='technology-image  slide-in-bottom-technology'
                      src='./assets/images/firebase.png'
                      alt='MongoDb'
                    ></img>
                  </div>
                  <div className='col-lg-3 col-md-3 py-3 col-sm-4 col-6 d-flex justify-content-center'>
                    <img
                      className='technology-image  slide-in-bottom-technology'
                      src='./assets/images/tailwind.png'
                      alt='Tailwind'
                    ></img>
                  </div>
                  <div className='col-lg-3 col-md-3 py-3 col-sm-4 col-6 d-flex justify-content-center'>
                    <img
                      className='technology-image  slide-in-bottom-technology'
                      src='./assets/images/socket.png'
                      alt='Tailwind'
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <img
                className='img-fluid'
                src='./assets/images/Development-pana.png'
                alt='...'
              ></img>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Skills