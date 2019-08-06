import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.state = {
      selectedDay: undefined,
    };
  }
  handleDayChange(day) {
    this.setState({selectedDay: day});
  }
  render() {
    const {selectedDay} = this.state;
    return (
      <div>
        {/* {selectedDay && <p>Day: {selectedDay.toLocaleDateString()}</p>} */}
        {/* {!selectedDay && <p>Choose a day</p>} */}
        <DayPickerInput
          classNames={{
            container: 'control',
          }}
          onDayChange={this.handleDayChange}
          inputProps={{
            name: 'entry.1752557180',
            type: 'text',
            placeholder: 'xin nhập ngày hẹn',
            class: 'input',
          }}
        />
      </div>
    );
  }
}
