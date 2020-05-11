/*eslint-disable*/
import React from 'react';

// reactstrap components
import { Container } from 'reactstrap';

// core components

function DefaultFooter() {
  return (
    <>
      <footer className='footer footer-default'>
        <Container>
          <nav>
            <ul>
              <li>
                <a
                  href='https://www.creative-tim.com?ref=nukr-default-footer'
                  target='_blank'
                >
                  Gann Aviation
                </a>
              </li>
            </ul>
          </nav>
          <div className='copyright' id='copyright'>
            © {new Date().getFullYear()}.
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
