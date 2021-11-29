import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.module.scss';
import OrderOptionDropdown from './OrderOptionDropdown.js';
import OrderOptionNumber from './OrderOptionNumber.js';
import OrderOptionIcons from './OrderOptionIcons.js';
import OrderOptionCheckboxes from './OrderOptionCheckboxes.js';
import OrderOptionText from './OrderOptionText.js';
import OrderOptionDate from './OrderOptionDate.js';


const optionTypes = {
    dropdown: OrderOptionDropdown,
    icons: OrderOptionIcons,
    checkboxes: OrderOptionCheckboxes,
    number: OrderOptionNumber,
    text: OrderOptionText,
    date: OrderOptionDate,
  };

  const OrderOption = ({name, type, id, setOrderOption, ...otherProps}) => {
    const OptionComponent = optionTypes[type];
    if(!OptionComponent){
      return null;
    } else {
      return (
        <div className={styles.component}>
          <h3 className={styles.title}>{name}</h3>
          <OptionComponent
            {...otherProps} setOptionValue={value => setOrderOption({[id]: value})}
          />
        </div>
      );
    }
  };

OrderOption.propTypes = {
    name: PropTypes.string,
}

export default OrderOption;