import React from 'react';
import {Link} from 'gatsby';
import logoAkari from '../img/logoAkari.svg';
import facebook from '../img/social/facebook.svg';
import map from '../img/map.jpg';
import email from '../img/social/email.svg';
import 'tachyons';

const Footer = class extends React.Component {
  render() {
    return (
      <footer
        className="bg-dark-gray tc sans-serif pa3 ph4-l pv5-l helvetica"
        id="footer">
        <div className="flex-l tc pa3">
          <div className="flex w-30-l pv3 pv0-l tc">
            <img
              src={logoAkari}
              alt="Akari"
              style={{width: '12em', height: '12em'}}
              className="bg-near-white pa2 ba bw3 br4 b--orange center"
            />
          </div>

          <div className="white db w-100 w-70-l ph5-l">
            <div className="tc f5 f4-l pa2 w-100 lh-copy">
              HỘI KHOA HỌC TÂM LÝ - GIÁO DỤC VIỆT NAM
            </div>

            <div className="tc f4 f3-l pa2 w-100 lh-copy">
              TRUNG TÂM GIÁO DỤC KỸ NĂNG CHO TRẺ CÓ NHU CẦU ĐẶC BIỆT AKARI
            </div>

            <div className="w-100">
              <div className="f6 f4-l db pa4-l tc-l">
                <div className="tl tc-ns mv2 db w-100 near-white">
                  61/22/445 Lạc Long Quân, Tây Hồ, Hà Nội
                </div>

                <div className="db w-100 v-mid tl tc-ns mv2">
                  <a
                    href="tel:0967126614"
                    className="dib link near-white hover-orange">
                    0967126614
                  </a>

                  <a
                    href="tel:0989208185"
                    className="dib ml1 link near-white hover-orange">
                    - 0989208185
                  </a>
                </div>

                <div className="db tl tc-ns w-100 mv2">
                  <a
                    title="facebook"
                    href="https://facebook.com/classroom.akari"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dib v-mid link near-white hover-orange">
                    <img
                      src={facebook}
                      alt="Facebook"
                      style={{width: '1.25em', height: '1.25em'}}
                      className="dib v-mid mr1"
                    />
                    <span className="dib v-mid">classroom.akari</span>
                  </a>
                </div>

                <div className="db w-100 tl tc-ns mv2">
                  <a
                    title="email"
                    href="mailto: lophocdacbietakari@gmail.com"
                    className="dib v-mid link near-white hover-orange">
                    <img
                      src={email}
                      alt="Facebook"
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
        </div>

        <div className="w-100 h1">
          <div className="h-25 bg-near-white w-90 center"></div>
        </div>

        <div className="flex flex-wrap pa5-l">
          <div className="mv1 mv0-l w-100 w-60-l ph4">
            <div>
              <a
                href="https://www.openstreetmap.org/#map=19/21.05935/105.80739&layers=N"
                rel="noopener noreferrer"
                target="_blank">
                <img src={map} alt="map" />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap flex-column-l w-100 w-40-l ph4">
            <div className="flex items-center tl tr-l f5 f3-l link">
              <Link
                className="link center near-white helvetica fw6 ttu w-100 pa3 ph3-l hover-yellow"
                to="/">
                Trang chủ
              </Link>
            </div>

            <div className="flex items-center tl tr-l f5 f3-l link">
              <Link
                className="link center near-white helvetica fw6 ttu w-100 pa3 ph3-l hover-yellow"
                to="/about">
                Về chúng tôi
              </Link>
            </div>

            <div className="flex items-center  tl tr-l f5 f3-l link">
              <Link
                className="link center near-white helvetica fw6 ttu w-100 pa3 ph3-l hover-yellow"
                to="/products">
                Dịch vụ
              </Link>
            </div>

            <div className="flex items-center  tl tr-l f5 f3-l link">
              <Link
                className="link center near-white helvetica fw6 ttu w-100 pa3 ph3-l hover-yellow"
                to="/blog">
                Blog
              </Link>
            </div>

            <div className="flex items-center  tl tr-l f5 f3-l link">
              <Link
                className="link center near-white helvetica fw6 ttu w-100 pa3 ph3-l hover-yellow"
                to="/#footer">
                Liên hệ
              </Link>
            </div>

            <div className="flex items-center  tl tr-l f5 f3-l link">
              <Link
                className="link orange hover-yellow helvetica fw6 ttu w-100 pa3 ph3-l tr"
                to="/#myForm">
                Đặt lịch hẹn
              </Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
