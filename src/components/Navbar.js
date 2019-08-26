import React from 'react';
import {Link} from 'gatsby';
import github from '../img/github-icon.svg';
import logoAkariHorizontal from '../img/logoAkariHorizontal.svg';
import burgerIcon from '../img/burger.svg';
import 'tachyons';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: 'dn',
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'dn',
            })
          : this.setState({
              navBarActiveClass: 'db',
            });
      },
    );
  };

  render() {
    return (
      <nav className="pv2" role="navigation" aria-label="main-navigation">
        <div className="flex-l db flex-row-l items-center h-100">
          <div className="flex h-100 items-center">
            <div className="flex items-center h-100">
              <Link to="/" className="ph4" title="Logo">
                <img src={logoAkariHorizontal} alt="AKARI" className="mw4" />
              </Link>
            </div>

            {/* Hamburger menu */}
            <div
              className={`h-100 w-100 dn-l`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}>
              <div className="flex items-center h-100 w-100 justify-end ba2 pr2">
                <img src={burgerIcon} alt="Burger icon" className="h2" />
              </div>
            </div>
          </div>

          <div
            id="navMenu"
            className={`flex-l ${this.state.navBarActiveClass} items-center h-100 w-100 mr3 justify-end `}>
            <div className="flex items-center tc h-100 f6 f5-l link">
              <Link
                className="link center mid-gray helvetica fw6 ttu w-100 pa3 ph3-l  hover-orange"
                to="/">
                Trang chủ
              </Link>
            </div>

            <div className="flex items-center tc h-100 f6 f5-l link">
              <Link
                className="link center mid-gray helvetica fw6 ttu w-100 pa3 ph3-l  hover-orange"
                to="/about">
                Về chúng tôi
              </Link>
            </div>

            <div className="flex items-center  tc h-100 f6 f5-l link">
              <Link
                className="link center mid-gray helvetica fw6 ttu w-100 pa3 ph3-l  hover-orange"
                to="/products">
                Dịch vụ
              </Link>
            </div>

            <div className="flex items-center  tc h-100 f6 f5-l link">
              <Link
                className="link center mid-gray helvetica fw6 ttu w-100 pa3 ph3-l  hover-orange"
                to="/blog">
                Blog
              </Link>
            </div>

            <div className="flex items-center  tc h-100 f6 f5-l link">
              <Link
                className="link center mid-gray helvetica fw6 ttu w-100 pa3 ph3-l  hover-orange"
                to="/#footer">
                Liên hệ
              </Link>
            </div>

            <div className="w1 dn db-l">
              <div className="bg-gray w-20 h2 mh2"></div>
            </div>

            <div className="flex items-center  tc h-100 f6 f5-l link pa3">
              <Link
                className="link center orange ba bw2 br4 bg-animate hover-bg-orange hover-white b--orange helvetica fw6 ttu w-100 ph3-l pa2"
                to="/#myForm">
                Đặt lịch hẹn
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
