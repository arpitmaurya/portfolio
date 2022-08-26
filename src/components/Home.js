import React, { Fragment } from 'react';
import { GrPrevious, GrNext } from 'react-icons/gr';
import { BsLaptop } from 'react-icons/bs';
import { AiFillGithub, AiOutlineVideoCamera } from 'react-icons/ai';

function Home() {
  return (
    <Fragment>
      <div className='col py-3 flex align-items-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-12 col-sm-12 d-flex align-items-center'>
              <div>
                <h1 className='m-0 font-big slide-in-top'>Hi,</h1>
                <h1 className='m-0 font-big animate-charcter'>
                  I'm Arpit Maurya,
                </h1>
                <p className='ls-2 mt-2 slide-in-bottom'>Frontend Developer</p>
              </div>
            </div>

            <div className='col-lg-6 col-md-12 col-sm-12'>
              <img
                className='img-fluid'
                src='./assets/images/nomad-bro.png'
                alt='...'
              ></img>
            </div>
          </div>
        </div>
        <div class='container'>
          <h1 className='m-2 font-big animate-charcter'>My Project's</h1>

          <div class='timeline'>
            <div class='timeline-row'>
              <div class='timeline-time'>
                Mac Os clone
                <small>Aug 26, 2021</small>
              </div>
              <div class='timeline-content'>
                <i class='icon-attachment'></i>
                <h6>Click on arrow to see next image </h6>
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
                <div className='row d-flex justify-content-center'>
                  <a
                    href='https://arpitmaurya-mac-os-clone.netlify.app/'
                    className='portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded'
                    target='_blank'
                  >
                    <BsLaptop /> Watch Live
                  </a>
                  <a
                    href='https://github.com/arpitmaurya/macOsClone'
                    className=' portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded'
                    target='_blank'
                  >
                    <AiFillGithub /> Source Code
                  </a>
                </div>
              </div>
            </div>

            <div class='timeline-row'>
              <div class='timeline-time'>
                Windows 11 Clone <small>Nov 7, 2021</small>
              </div>
              <div class='timeline-content'>
                <i class='icon-attachment'></i>
                <h6>Click on arrow to see next image </h6>
                <div
                  id='carouselExampleControls2'
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
                    data-bs-target='#carouselExampleControls2'
                    data-bs-slide='prev'
                  >
                    <GrPrevious />
                    <span className='visually-hidden'>Previous</span>
                  </button>
                  <button
                    className='carousel-control-next'
                    type='button'
                    data-bs-target='#carouselExampleControls2'
                    data-bs-slide='next'
                  >
                    <GrNext />
                    <span className='visually-hidden'>Next</span>
                  </button>
                </div>
                <div className='row d-flex justify-content-center'>
                  <a
                    href='https://www.linkedin.com/posts/arpitmaurya_golangdeveloper-golang-fyne-activity-6858064196400136193-g350?utm_source=share&utm_medium=member_desktop'
                    className='portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded'
                    target='_blank'
                  >
                    <BsLaptop /> Watch Video
                  </a>
                  <a
                    href='https://github.com/arpitmaurya/Windows-11-Clone-'
                    className=' portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded'
                    target='_blank'
                  >
                    <AiFillGithub /> Source Code
                  </a>
                </div>
              </div>
            </div>

            <div class='timeline-row'>
              <div class='timeline-time'>
                Disney Plus UI <small>May 5, 2022</small>
              </div>
              <div class='timeline-content'>
                <i class='icon-attachment'></i>
                <h6>Click on arrow to see next image </h6>
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
                <div className='row d-flex justify-content-center'>
                  <a
                    href='https://arpitmaurya-disneypluscl-2a1b1.web.app/'
                    className='portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded'
                    target='_blank'
                  >
                    <BsLaptop /> Watch Live
                  </a>
                  <a
                    href='https://github.com/arpitmaurya/DisneyPlus-CLone'
                    className=' portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded'
                    target='_blank'
                  >
                    <AiFillGithub /> Source Code
                  </a>
                </div>
              </div>
            </div>

            <div class='timeline-row'>
              <div class='timeline-time'>
                Instagram Clone<small>Jun 16, 2022</small>
              </div>
              <div class='timeline-content'>
                <i class='icon-attachment'></i>
                <h6>Click on arrow to see next image </h6>
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
                <div className='row d-flex justify-content-center'>
                  <a
                    href='https://arpitmaurya-instagram.web.app/login'
                    className='portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded'
                    target='_blank'
                  >
                    <BsLaptop /> Watch Live
                  </a>
                  <a
                    href='https://github.com/arpitmaurya/instagram-clone'
                    className=' portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded'
                    target='_blank'
                  >
                    <AiFillGithub /> Source Code
                  </a>
                </div>
              </div>
            </div>
            <div class='timeline-row'>
              <div class='timeline-time'>
                Question Finder<small>Jul 16, 2021</small>
              </div>
              <div class='timeline-content'>
                <i class='icon-attachment'></i>
                <h6>Click on arrow to see next image </h6>
                <div
                  id='carouselExampleControls5'
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
                <div className='row d-flex justify-content-center'>
                  <a
                    href='https://www.linkedin.com/posts/arpitmaurya_connections-puppeteer-nodejs-activity-6816775204849668096-lrcd?utm_source=share&utm_medium=member_desktop'
                    className='portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded'
                    target='_blank'
                  >
                    <BsLaptop /> Watch Video
                  </a>
                  <a
                    href='https://github.com/arpitmaurya/questionsFinder'
                    className=' portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded'
                    target='_blank'
                  >
                    <AiFillGithub /> Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
