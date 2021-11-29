import React from "react";
import DatePicker from "react-datepicker";
import style from "react-datepicker/dist/react-datepicker.css";

class OrderOptionDate extends React.Component {

    state = {
        startDate: new Date()
    }
    handleChange = date => {
        this.setState({
          startDate: date
        });
      };
     
      render() {
        return (
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            className={style}
          />
        );
      }
}

export default OrderOptionDate;