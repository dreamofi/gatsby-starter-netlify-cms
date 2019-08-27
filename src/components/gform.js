import React, {useState} from 'react';
import 'tachyons';
import MyForm from '../components/datepicker.js';

const GForm = () => {
  const [displayToggle, toggleState] = useState('show');
  return (
    <div id="myForm">
      <div className="w-90 w-80-l pt3 center">
        <h2 className="f2 lh-copy helvetica tc">Đặt lịch hẹn</h2>
        <div className="h1 mb3">
          <div className="h-25 w4 bg-orange center"></div>
        </div>

        <div className="flex flex-wrap flex-row-reverse-l pv3">
          <div className="w-third-l f4 pa3">
            <h4>Chúng tôi luôn đảm bảo mọi dịch vụ</h4>
            <p>Đừng ngần ngại liên hệ với chúng tôi</p>
          </div>

          <form
            action="https://docs.google.com/forms/d/e/1FAIpQLSc3Y1qlhC9B-aUl1eMISQ3vNf2ncCDOLuGiEcMpsOdzpsQrCQ/formResponse"
            method="post"
            className="w-two-thirds-l pa3"
            target="_blank">
            <fieldset className="control">
              <div className="field">
                <label className="f4 db pv2" htmlFor="name">
                  Họ tên*
                </label>
                <div className="control">
                  <input
                    id="name"
                    className="input is-expanded"
                    type="text"
                    placeholder="Xin vui lòng nhập tên của bạn"
                    name="entry.2005620554"
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label className="f4 db pv2" htmlFor="email">
                  Email*
                </label>
                <div className="control">
                  <input
                    id="email"
                    className="input"
                    type="email"
                    placeholder="Xin hãy nhập địa chỉ Email"
                    name="entry.1045781291"
                  />
                </div>
              </div>
              <div className="field">
                <label className="f4 db pv2" htmlFor="phone">
                  Điện thoại*
                </label>
                <div className="control">
                  <input
                    id="phone"
                    className="input"
                    type="text"
                    placeholder="Xin nhập số điện thoại"
                    name="entry.1166974658"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="f4 db pv2" htmlFor="address">
                  Địa chỉ
                </label>
                <div className="control">
                  <input
                    id="address"
                    className="input is-expanded"
                    type="text"
                    placeholder="Xin nhập địa chỉ"
                    name="entry.1065046570"
                  />
                </div>
              </div>

              <div className="field">
                <label className="f4 db pv2">Nội dung liên hệ</label>
                <div className="control">
                  <div className="select is-block">
                    <select
                      id="contactChoice"
                      name="entry.316572342"
                      defaultValue="Đặt lịch đánh giá">
                      <option
                        value="Đặt lịch đánh giá"
                        onClick={() => toggleState('show')}>
                        Đặt lịch đánh giá
                      </option>
                      <option
                        value="Nội dung khác"
                        onClick={() => toggleState('hide')}>
                        Nội dung khác
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className={`field ${displayToggle}`}>
                <label className="f4 db pv2">Chọn ngày hẹn</label>
                <div className="control date-picker">
                  <MyForm />
                </div>
              </div>

              <div className="field">
                <label className="label">Lời nhắn</label>
                <div className="control">
                  <textarea
                    rows="5"
                    className="textarea"
                    placeholder="Xin hãy để lại lời nhắn"
                    name="entry.839337160"></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="button is-medium is-fullwidth is-success">
                GỬI
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GForm;
