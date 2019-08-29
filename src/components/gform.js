import React, {useState} from 'react';
import 'tachyons';
import MyForm from '../components/datepicker.js';

const GForm = () => {
  const [displayToggle, toggleState] = useState('db');
  return (
    <div id="myForm" className="bg-orange">
      <div className="w-90 w-80-l pv5 center">
        <h2 className="f2 lh-copy helvetica tc white">Đặt lịch hẹn</h2>
        <div className="h1 mb3">
          <div className="h-25 w4 bg-near-white center"></div>
        </div>

        <div className="flex flex-wrap flex-row-reverse-l pv3 white">
          <div className="w-100 w-30-l f3 pa3 tc tl-l">
            <h4>Chúng tôi luôn đảm bảo mọi dịch vụ</h4>
            <p>Đừng ngần ngại liên hệ với chúng tôi</p>
          </div>

          <div className="w-100 w-70-l pa3">
            <form
              action="https://docs.google.com/forms/d/e/1FAIpQLSc3Y1qlhC9B-aUl1eMISQ3vNf2ncCDOLuGiEcMpsOdzpsQrCQ/formResponse"
              method="post"
              className="center mw-6 black"
              target="_blank">
              <fieldset className="center mw6 bg-light-gray">
                <div className="db w-100 wm-100">
                  <label className="f4 db pv2" htmlFor="name">
                    Họ tên*
                  </label>
                  <div className="control">
                    <input
                      id="name"
                      className="h2 w-100 "
                      type="text"
                      placeholder="Xin vui lòng nhập tên của bạn"
                      name="entry.2005620554"
                      required
                    />
                  </div>
                </div>

                <div className="db w-100">
                  <label className="f4 db pv2" htmlFor="email">
                    Email*
                  </label>
                  <div className="control">
                    <input
                      id="email"
                      className="h2 w-100 "
                      type="email"
                      placeholder="Xin hãy nhập địa chỉ Email"
                      name="entry.1045781291"
                    />
                  </div>
                </div>

                <div className="db w-100 wm-100">
                  <label className="f4 db pv2" htmlFor="phone">
                    Điện thoại*
                  </label>
                  <div className="">
                    <input
                      id="phone"
                      className="h2 w-100 "
                      type="text"
                      placeholder="Xin nhập số điện thoại"
                      name="entry.1166974658"
                      required
                    />
                  </div>
                </div>
                <div className="db w-100 wm-100">
                  <label className="f4 db pv2" htmlFor="address">
                    Địa chỉ
                  </label>
                  <div className="control">
                    <input
                      id="address"
                      className="h2 w-100 "
                      type="text"
                      placeholder="Xin nhập địa chỉ"
                      name="entry.1065046570"
                    />
                  </div>
                </div>

                <div className="db w-100 wm-100">
                  <label className="f4 db pv2">Nội dung liên hệ</label>
                  <div className="control">
                    <div className="db">
                      <select
                        id="contactChoice"
                        name="entry.316572342"
                        defaultValue="Đặt lịch đánh giá"
                        className="db bg-white h2 w-100 ">
                        <option
                          value="Đặt lịch đánh giá"
                          onClick={() => toggleState('db')}>
                          Đặt lịch đánh giá
                        </option>
                        <option
                          value="Nội dung khác"
                          onClick={() => toggleState('dn')}>
                          Nội dung khác
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className={`${displayToggle}`}>
                  <label className="f4 db pv2">Chọn ngày hẹn</label>
                  <div className="control date-picker pv2">
                    <MyForm />
                  </div>
                </div>

                <div className="db w-100">
                  <label className="f4 db pv2">Lời nhắn</label>
                  <div className="db w-100 ">
                    <textarea
                      rows="5"
                      className="db border-box w-100 ba pa2 mb2 "
                      placeholder="Xin hãy để lại lời nhắn"
                      name="entry.839337160"></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-100 bg-blue white bg-animate hover-bg-white hover-blue pa3 br3 b ba bw2 b--blue">
                  GỬI
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GForm;
