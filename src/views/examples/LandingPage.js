import React from 'react';

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from 'reactstrap';

// core components
import ExamplesNavbar from 'components/Navbars/ExamplesNavbar.js';
import LandingPageHeader from 'components/Headers/LandingPageHeader.js';
import DefaultFooter from 'components/Footers/DefaultFooter.js';

function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add('landing-page');
    document.body.classList.add('sidebar-collapse');
    document.documentElement.classList.remove('nav-open');
    return function cleanup() {
      document.body.classList.remove('landing-page');
      document.body.classList.remove('sidebar-collapse');
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <div className='wrapper'>
        <LandingPageHeader />
        <div className='section section-about-us'>
          <Container>
            <Row>
              <Col className='ml-auto mr-auto text-center' md='8'>
                <h2 className='title'>Your One Stop for Aircraft Services</h2>
                <h5 className='description'>
                  Whether you need a major engine overhaul, annual inspection,
                  avionics work or just minor maintenence, Gann Aviation has you
                  covered.
                </h5>
              </Col>
            </Row>
            <div className='separator separator-primary'></div>
            <div className='section-story-overview'>
              <Row>
                <Col md='6'>
                  <div
                    className='image-container image-left'
                    style={{
                      backgroundImage:
                        'url(' + require('assets/img/login.jpg') + ')',
                    }}
                  >
                    <p className='blockquote blockquote-info'>
                      "I’ve had several engines overhauled by Carlus and his
                      team over the past 20 years. Their work is top notch and
                      reasonable. Do not hesitate to contact them for engine or
                      hose work."<br></br>
                      <br></br>
                      <small>-R. Cullinan</small>
                    </p>
                  </div>
                  <div
                    className='image-container'
                    style={{
                      backgroundImage:
                        'url(' + require('assets/img/yellow.jpg') + ')',
                    }}
                  ></div>
                </Col>
                <Col md='5'>
                  <div
                    className='image-container image-right'
                    style={{
                      backgroundImage:
                        'url(' + require('assets/img/bg3.jpg') + ')',
                    }}
                  ></div>
                  <h3>About Gann Aviation</h3>
                  <p>
                    Gann Aviation is an FAA Approved Aircraft Component Repair
                    Station. We specialize in in the overhaul and repair of
                    engines, accessories, instruments, gyroscopes, and radio
                    equipment in both General Aviation and commercial
                    industries.
                  </p>
                  <p>
                    Our 30,000 square foot facility is located at 9A5, Lafayette
                    GA. With a shop full of advanced test equipment, specialized
                    tooling and a large inventory of OEM parts. We can turn most
                    jobs in less than a week!
                  </p>
                  <p>
                    Our true strength is in our staff of technicians with over
                    100 years of combined experience.
                  </p>
                  <p>FAA Approved Repair Station # GHVR840X</p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className='section section-team text-center'>
          <Container>
            <div className='team'>
              <Row>
                <Col md='3'>
                  <div className=''>
                    <img
                      alt='...'
                      className='rounded-circle img-fluid img-raised'
                      src={require('assets/img/enginerepair.jpg')}
                    ></img>
                    <h4 className='title'>Engine Repair</h4>
                    <p className='description'>
                      Anything from cylinder replacements to full reman, we can
                      take care of your powerplant and make it perfect.
                    </p>
                    <Button
                      color='info'
                      href='/enginerepair'
                      onClick={(e) => e.preventDefault()}
                    >
                      View More
                    </Button>
                  </div>
                </Col>
                <Col md='3'>
                  <div className=''>
                    <img
                      alt='...'
                      className='rounded-circle img-fluid img-raised'
                      src={require('assets/img/main.jpg')}
                    ></img>
                    <h4 className='title'>Airframe Maintainence</h4>
                    <p className='description'>
                      Our Maintenance Department is proud to offer a full range
                      of services to aircraft owners and operators
                    </p>
                    <Button
                      color='info'
                      href='/maintainence'
                      onClick={(e) => e.preventDefault()}
                    >
                      View More
                    </Button>
                  </div>
                </Col>{' '}
                <Col md='3'>
                  <div className=''>
                    <img
                      alt='...'
                      className='rounded-circle img-fluid img-raised'
                      src={require('assets/img/avionics.jpg')}
                    ></img>
                    <h4 className='title'>Avionics</h4>
                    <p className='description'>
                      We service, install, upgrade a multitude of avionics types
                      and manufacturers.
                    </p>
                    <Button
                      color='info'
                      href='/avionics'
                      onClick={(e) => e.preventDefault()}
                    >
                      View More
                    </Button>
                  </div>
                </Col>{' '}
                <Col md='3'>
                  <div className=''>
                    <img
                      alt='...'
                      className='rounded-circle img-fluid img-raised'
                      src={require('assets/img/hose.jpg')}
                    ></img>
                    <h4 className='title'>Hose Shop</h4>
                    <p className='description'></p>
                    <Button
                      color='info'
                      href='/hose'
                      onClick={(e) => e.preventDefault()}
                    >
                      View More
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className='section section-team text-center'>
          <Container>
            <h2 className='title'>Our team</h2>
            <div className='team'>
              <Row>
                <Col md='3'>
                  <div className='team-player'>
                    <img
                      alt='...'
                      className='rounded-circle img-fluid img-raised'
                      src={require('assets/img/carlus.jpg')}
                    ></img>
                    <h4 className='title'>Carlus Gann</h4>
                    <p className='category text-info'>Engine/Owner</p>
                  </div>
                </Col>
                <Col md='3'>
                  <div className='team-player'>
                    <img
                      alt='...'
                      className='rounded-circle img-fluid img-raised'
                      src={require('assets/img/placeholder.jpg')}
                    ></img>
                    <h4 className='title'>Rick Cason</h4>
                    <p className='category text-info'>Maintainence</p>
                  </div>
                </Col>
                <Col md='3'>
                  <div className='team-player'>
                    <img
                      alt='...'
                      className='rounded-circle img-fluid img-raised'
                      src={require('assets/img/placeholder.jpg')}
                    ></img>
                    <h4 className='title'>Ron Dorsey</h4>
                    <p className='category text-info'>Avionics</p>
                  </div>
                </Col>
                <Col md='3'>
                  <div className='team-player'>
                    <img
                      alt='...'
                      className='rounded-circle img-fluid img-raised'
                      src={require('assets/img/placeholder.jpg')}
                    ></img>
                    <h4 className='title'>Kevin Denny</h4>
                    <p className='category text-info'>Hose Shop</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default LandingPage;
