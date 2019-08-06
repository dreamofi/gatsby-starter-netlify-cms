import React from 'react';
import 'tachyons';
import MyForm from '../components/datepicker.js';

const GForm = () => {
  return (
    <div id="myForm">
      <h3 className="has-text-weight-semibold is-size-2 is-block">
        Đặt lịch hẹn
      </h3>
      <div class="columns is-desktop row-reverse">
        <div className="column is-desktop">
          <h4>Chúng tôi luôn đảm bảo mọi dịch vụ</h4>
          <p>Đừng ngần ngại liên hệ với chúng tôi</p>
        </div>
        <form
          action="https://docs.google.com/forms/d/e/1FAIpQLSc3Y1qlhC9B-aUl1eMISQ3vNf2ncCDOLuGiEcMpsOdzpsQrCQ/formResponse"
          method="post"
          className="field column is-desktop"
          target="_blank">
          <fieldset className="control">
            <div className="field">
              <label className="label" for="name">
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
              <label className="label" for="email">
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
              <label className="label" for="phone">
                Điện thoại*
              </label>
              <div className="control">
                <input
                  id="phone"
                  className="input"
                  type="text"
                  placeholder="Xin nhập số điện thoại"
                  name="entry.1166974658"
                  requỉred
                />
              </div>
            </div>
            <div className="field">
              <label className="label" for="address">
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
              <label className="label">Nội dung liên hệ</label>
              <div className="control">
                <div className="select is-block">
                  <select id="contactChoice" name="entry.316572342">
                    <option value="Đặt lịch đánh giá" selected="selected">
                      Đặt lịch đánh giá
                    </option>
                    <option value="Nội dung khác">Nội dung khác</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="field">
              <label className="label is-block is-expanded">
                Chọn ngày hẹn
              </label>
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

            <button type="submit" className="button is-medium is-fullwidth">
              GỬI
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default GForm;
