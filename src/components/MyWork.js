import React, { Fragment } from 'react'
import { GrPrevious, GrNext } from 'react-icons/gr';
import { BsLaptop } from 'react-icons/bs';
import { AiFillGithub, AiOutlineVideoCamera } from 'react-icons/ai';

function MyWork() {
  return (
    <Fragment>
      <div className='col p-4'>
        <div className='p-4 slide-in-top'>
          <div className='row'>
            <div className='col-6'>
              <h2 className='ff-jose fw-bold ls-2'>Something I've Built</h2>
            </div>
          </div>
          <hr></hr>
          <div className='row'>
            <div className='p-2 col-md-4 text-center my-2'>
              <div
                id='carouselExampleControls1'
                className='carousel slide my-1'
                data-bs-ride='carousel'
              >
                <div className='carousel-inner'>
                  <div className='carousel-item active'>
                    <img
                      src='./assets/portfolio-images/mac_1.png'
                      className='p-3 d-block w-100'
                      alt='...'
                    />
                  </div>
                  <div className='carousel-item'>
                    <img
                      src='./assets/portfolio-images/mac_2.png'
                      className=' p-3 d-block w-100'
                      alt='...'
                    />
                  </div>
                  <div className='carousel-item'>
                    <img
                      src='./assets/portfolio-images/mac_3.png'
                      className='p-3 d-block w-100'
                      alt='...'
                    />
                  </div>
                  <div className='carousel-item'>
                    <img
                      src='./assets/portfolio-images/mac_4.png'
                      className='p-3 d-block w-100'
                      alt='...'
                    />
                  </div>
                  <div className='carousel-item'>
                    <img
                      src='./assets/portfolio-images/mac_5.png'
                      className='p-3 d-block w-100'
                      alt='...'
                    />
                  </div>
                  <div className='carousel-item'>
                    <img
                      src='./assets/portfolio-images/mac_6.png'
                      className='p-3 d-block w-100'
                      alt='...'
                    />
                  </div>
                  <div className='carousel-item'>
                    <img
                      src='./assets/portfolio-images/mac_7.png'
                      className='p-3 d-block w-100'
                      alt='...'
                    />
                  </div>
                  <div className='carousel-item'>
                    <img
                      src='./assets/portfolio-images/mac_8.png'
                      className='p-3 d-block w-100'
                      alt='...'
                    />
                  </div>
                  <div className='carousel-item'>
                    <img
                      src='./assets/portfolio-images/mac_9.png'
                      className='p-3 d-block w-100'
                      alt='...'
                    />
                  </div>
                </div>
                <button
                  className='carousel-control-prev'
                  type='button'
                  data-bs-target='#carouselExampleControls1'
                  data-bs-slide='prev'
                >
                  <GrPrevious />
                  <span className='visually-hidden'>Previous</span>
                </button>
                <button
                  className='carousel-control-next'
                  type='button'
                  data-bs-target='#carouselExampleControls1'
                  data-bs-slide='next'
                >
                  <GrNext />
                  <span className='visually-hidden'>Next</span>
                </button>
              </div>
              <h5 className='ff-jose my-1'>Mac Os Clone</h5>
              <div className='row d-flex justify-content-center'>
                <a
                  href='https://arpitmaurya-mac-os-clone.netlify.app/'
                  className='col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded'
                  target='_blank'
                >
                  <BsLaptop /> Watch Live
                </a>
                <a
                  href='https://github.com/arpitmaurya/macOsClone'
                  className='col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded'
                  target='_blank'
                >
                  <AiFillGithub /> Source Code
                </a>
              </div>
            </div>

            <div className='p-2 col-md-4 text-center my-2'>
              <div
                id='carouselExampleControls3'
                className='carousel slide my-1'
                data-bs-ride='carousel'
              >
                <div className='carousel-inner'>
                  <div className='carousel-item active'>
                    <img
                      src='./assets/portfolio-images/d1.png'
                      className='p-3 d-block w-100'
                      alt='...'
                    />
                  </div>
                  <div className='carousel-item'>
                    <img
                      src='./assets/portfolio-images/d2.png'
                      className='p-3 d-block w-100'
                      alt='...'
                    />
                  </div>
                  <div className='carousel-item'>
                    <img
                      src='./assets/portfolio-images/d3.png'
                      className='p-3 d-block w-100'
                      alt='...'
                    />
                  </div>
                  <div className='carousel-item'>
                    <img
                      src='./assets/portfolio-images/d4.png'
                      className='p-3 d-block w-100'
                      alt='...'
                    />
                  </div>
                  <div className='carousel-item'>
                    <img
                      src='./assets/portfolio-images/d5.png'
                      className='p-3 d-block w-100'
                      alt='...'
                    />
                  </div>
                </div>
                <button
                  className='carousel-control-prev'
                  type='button'
                  data-bs-target='#carouselExampleControls3'
                  data-bs-slide='prev'
                >
                  <GrPrevious />
                  <span className='visually-hidden'>Previous</span>
                </button>
                <button
                  className='carousel-control-next'
                  type='button'
                  data-bs-target='#carouselExampleControls3'
                  data-bs-slide='next'
                >
                  <GrNext />
                  <span className='visually-hidden'>Next</span>
                </button>
              </div>
              <h5 className='ff-jose my-1'>Disney Plus Clone</h5>
              <div className='row d-flex justify-content-center'>
                <a
                  href='https://arpitmaurya-disneypluscl-2a1b1.web.app/'
                  className='col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded'
                  target='_blank'
                >
                  <BsLaptop /> Watch Live
                </a>
                <a
                  href='https://github.com/arpitmaurya/DisneyPlus-CLone'
                  className='col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded'
                  target='_blank'
                >
                  <AiFillGithub /> Source Code
                </a>
              </div>
            </div>

            <div className='p-2  col-md-4 text-center my-2'>
              <div
                id='carouselExampleControls4'
                className='carousel slide my-1'
                data-bs-ride='carousel'
              >
                <div className='carousel-inner'>
                  <div className='carousel-item active'>
                    <img
                      src='./assets/portfolio-images/i1.png'
                      className='p-3 d-block w-100'
                      alt='...'
                    />
                  </div>
                  <div className='carousel-item'>
                    <img
                      src='./assets/portfolio-images/i2.png'
                      className='p-3  d-block w-100'
                      alt='...'
                    />
                  </div>
                  <div className='carousel-item'>
                    <img
                      src='./assets/portfolio-images/i3.png'
                      className='p-3  d-block w-100'
                      alt='...'
                    />
                  </div>
                  <div className='carousel-item'>
                    <img
                      src='./assets/portfolio-images/i4.png'
                      className='d-block p-3 w-100'
                      alt='...'
                    />
                  </div>
                </div>
                <button
                  className='carousel-control-prev'
                  type='button'
                  data-bs-target='#carouselExampleControls4'
                  data-bs-slide='prev'
                >
                  <GrPrevious />
                  <span className='visually-hidden'>Previous</span>
                </button>
                <button
                  className='carousel-control-next'
                  type='button'
                  data-bs-target='#carouselExampleControls4'
                  data-bs-slide='next'
                >
                  <GrNext />
                  <span className='visually-hidden'>Next</span>
                </button>
              </div>
              <h5 className='ff-jose my-1'>Instagram Clone</h5>
              <div className='row d-flex justify-content-center'>
                <a
                  href='https://arpitmaurya-instagram.web.app/login'
                  className='col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded'
                  target='_blank'
                >
                  <BsLaptop /> Watch Live
                </a>
                <a
                  href='https://github.com/arpitmaurya/instagram-clone'
                  className='col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded'
                  target='_blank'
                >
                  <AiFillGithub /> Source Code
                </a>
              </div>
            </div>

            <div className='p-2  col-md-4 text-center my-2'>
              <div
                id='carouselExampleControls5'
                className='carousel slide my-1'
                data-bs-ride='carousel'
              >
                <div className='carousel-inner'>
                  <div className='carousel-item active'>
                    <img
                      src='./assets/portfolio-images/w1.png'
                      className='p-3 d-block w-100'
                      alt='...'
                    />
                  </div>
                  <div className='carousel-item'>
                    <img
                      src='./assets/portfolio-images/w2.png'
                      className='p-3  d-block w-100'
                      alt='...'
                    />
                  </div>
                  <div className='carousel-item'>
                    <img
                      src='./assets/portfolio-images/w3.png'
                      className='p-3  d-block w-100'
                      alt='...'
                    />
                  </div>
                  <div className='carousel-item'>
                    <img
                      src='./assets/portfolio-images/w4.png'
                      className='d-block p-3 w-100'
                      alt='...'
                    />
                  </div>
                </div>
                <button
                  className='carousel-control-prev'
                  type='button'
                  data-bs-target='#carouselExampleControls5'
                  data-bs-slide='prev'
                >
                  <GrPrevious />
                  <span className='visually-hidden'>Previous</span>
                </button>
                <button
                  className='carousel-control-next'
                  type='button'
                  data-bs-target='#carouselExampleControls5'
                  data-bs-slide='next'
                >
                  <GrNext />
                  <span className='visually-hidden'>Next</span>
                </button>
              </div>
              <h5 className='ff-jose my-1'>Windows 11 Clone</h5>
              <div className='row d-flex justify-content-center'>
                <a
                  href='https://www.linkedin.com/posts/arpitmaurya_golangdeveloper-golang-fyne-activity-6858064196400136193-g350?utm_source=share&utm_medium=member_desktop'
                  className='col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded'
                  target='_blank'
                >
                  <AiOutlineVideoCamera /> Watch Video
                </a>
                <a
                  href='https://github.com/arpitmaurya/Windows-11-Clone-'
                  className='col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded'
                  target='_blank'
                >
                  <AiFillGithub /> Source Code
                </a>
              </div>
            </div>
            <div className='p-2  col-md-4 text-center my-2'>
              <div
                id='carouselExampleControls6'
                className='carousel slide my-1'
                data-bs-ride='carousel'
              >
                <div className='carousel-inner'>
                  <div className='carousel-item active'>
                    <img
                      src='./assets/portfolio-images/q1.png'
                      className='p-3 d-block w-100'
                      alt='...'
                    />
                  </div>
                  <div className='carousel-item'>
                    <img
                      src='./assets/portfolio-images/q2.png'
                      className='p-3  d-block w-100'
                      alt='...'
                    />
                  </div>
                  <div className='carousel-item'>
                    <img
                      src='./assets/portfolio-images/q3.png'
                      className='p-3  d-block w-100'
                      alt='...'
                    />
                  </div>
                  <div className='carousel-item'>
                    <img
                      src='./assets/portfolio-images/q4.png'
                      className='d-block p-3 w-100'
                      alt='...'
                    />
                  </div>
                </div>
                <button
                  className='carousel-control-prev'
                  type='button'
                  data-bs-target='#carouselExampleControls6'
                  data-bs-slide='prev'
                >
                  <GrPrevious />
                  <span className='visually-hidden'>Previous</span>
                </button>
                <button
                  className='carousel-control-next'
                  type='button'
                  data-bs-target='#carouselExampleControls6'
                  data-bs-slide='next'
                >
                  <GrNext />
                  <span className='visually-hidden'>Next</span>
                </button>
              </div>
              <h5 className='ff-jose my-1'>Question Finder</h5>
              <div className='row d-flex justify-content-center'>
                <a
                  href='https://www.linkedin.com/posts/arpitmaurya_connections-puppeteer-nodejs-activity-6816775204849668096-lrcd?utm_source=share&utm_medium=member_desktop'
                  className='col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded'
                  target='_blank'
                >
                  <AiOutlineVideoCamera /> Watch Video
                </a>
                <a
                  href='https://github.com/arpitmaurya/questionsFinder'
                  className='col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded'
                  target='_blank'
                >
                  <AiFillGithub /> Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default MyWork