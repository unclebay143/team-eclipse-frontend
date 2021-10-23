import React from 'react';
import { Link } from 'react-router-dom';
import universalStyles from './../styles/universal.module.css';

export const Navbar = () => {
  return (
    <React.Fragment>
      <header className={universalStyles.bgPrimaryColor}>
        {/* Top Navigation */}
        <div className='collapse bg-white' id='navbarHeader'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-8 col-md-7 py-4'>
                <h4 className='text-dark'>Whistle Blower</h4>
                <p className='text-muted'>
                  <q>
                    A whistleblower is a person, usually an employee, who
                    exposes information or activity within a private, public, or
                    government organization that is deemed illegal, illicit,
                    unsafe, fraud, or abuse of taxpayer funds
                  </q>
                  -{' '}
                  <a
                    href='https://en.wikipedia.org/wiki/Whistleblower'
                    className='text-muted'
                  >
                    Wikipedia
                  </a>
                </p>
              </div>
              <div className='col-sm-4 offset-md-1 py-4'>
                <h4 className='text-dark'>Contact</h4>
                <ul className='list-unstyled'>
                  <li>
                    <a href='/' className=' text-muted'>
                      Follow on Twitter
                    </a>
                  </li>
                  <li>
                    <a href='/' className=' text-muted'>
                      Like on Facebook
                    </a>
                  </li>
                  <li>
                    <a href='/' className=' text-muted'>
                      Email me
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Navigation Bar */}
        <div
          className={`navbar navbar-dark shadow-sm ${universalStyles.primaryColor}`}
        >
          <div className='container'>
            <Link to='/' className='navbar-brand d-flex align-items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='25'
                height='25'
                fill='currentColor'
                className='bi bi-megaphone'
                viewBox='0 0 16 16'
              >
                <path d='M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49a68.14 68.14 0 0 0-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 74.663 74.663 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199V2.5zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0zm-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233c.18.01.359.022.537.036 2.568.189 5.093.744 7.463 1.993V3.85zm-9 6.215v-4.13a95.09 95.09 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A60.49 60.49 0 0 1 4 10.065zm-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68.019 68.019 0 0 0-1.722-.082z' />
              </svg>
              <strong className='px-3'>Whistle Blowers</strong>
            </Link>
            <div
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarHeader'
              aria-controls='navbarHeader'
              aria-expanded='false'
              aria-label='Toggle navigation'
              style={{ border: 'none' }}
            >
              <span className='navbar-toggler-icon' />
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};
