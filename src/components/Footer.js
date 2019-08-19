import React from 'react';
import {Link} from 'gatsby';
import logoAkari from '../img/logoAkari.svg';
import facebook from '../img/social/facebook.svg';
import phone from '../img/social/phone.svg';
import map from '../img/map.jpg';
import home from '../img/social/home.svg';
import email from '../img/social/email.svg';
import 'tachyons';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="bg-dark-gray tc" id="footer">
        <div className="pa4">
          <img
            src={logoAkari}
            alt="Akari"
            style={{width: '14em', height: '10em'}}
          />
        </div>

        <div className="flex flex-wrap pa4">
          <div className="mv1 w-100 w-40-l pa2">
            <div className="white mh1">
              <div className="mv3 tc f4">
                HỘI KHOA HỌC TÂM LÝ - GIÁO DỤC VIỆT NAM
              </div>

              <div className="mv4 tc f3">
                TRUNG TÂM GIÁO DỤC KỸ NĂNG CHO TRẺ CÓ NHU CẦU ĐẶC BIỆT AKARI
              </div>

              <div className="f4 db">
                <div className="tc tl-l mv2 db">
                  <span className="dib v-mid">
                    <img
                      src={home}
                      alt="home"
                      className="mr1"
                      style={{width: '1.25em', height: '1.25em'}}
                    />
                  </span>
                  61/22/445 Lạc Long Quân, Tây Hồ, Hà Nội
                </div>

                <div className="db v-mid tc tl-l mv2">
                  <span className="dib v-mid">
                    <img
                      src={phone}
                      alt="Phone"
                      className="mr1"
                      style={{width: '1.25em', height: '1.25em'}}
                    />
                  </span>

                  <a
                    href="tel:0967126614"
                    className="dib link white hover-orange">
                    0967126614
                  </a>

                  <a
                    href="tel:0989208185"
                    className="dib ml1 link white hover-orange">
                    - 0989208185
                  </a>
                </div>

                <div className="tc tl-l mv2">
                  <a
                    title="facebook"
                    href="https://facebook.com/classroom.akari"
                    target="_blank"
                    className="dib v-mid link white hover-orange">
                    <img
                      src={facebook}
                      alt="Facebook"
                      style={{width: '1.25em', height: '1.25em'}}
                      className="dib v-mid mr1"
                    />
                    <span className="dib v-mid">
                      facebook.com/classroom.akari
                    </span>
                  </a>
                </div>

                <div className="tc tl-l mv2">
                  <a
                    title="email"
                    href="mailto: lophocdacbietakari@gmail.com"
                    className="dib v-mid link white hover-orange">
                    <img
                      src={email}
                      alt="Email"
                      style={{width: '1.25em', height: '1.25em'}}
                      className="dib v-mid mr1"
                    />
                    <span className="dib v-mid">
                      lophocdacbietakari@gmail.com
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-100 w-60-l pa4 shadow-1">
            <a
              href="https://www.openstreetmap.org/#map=19/21.05935/105.80739&layers=N"
              target="_blank">
              <img src={map} alt="map" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
