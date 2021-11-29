import React from 'react';
// import PropTypes from 'prop-types';
import styles from './OrderOption.module.scss';
import Icon from '../../common/Icon/Icon';
import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionIcons = ({values, required, currentValue, setOptionValue}) => (
    <div className={styles.icon}>
        {!required ? '' : (
        <div 
        onChange={event => setOptionValue(event.currentTarget.value)}
        value=''>
            <Icon name={"times-circle"}></Icon>
            none
        </div>
      )}
        {values.map((value) =>(
            <div className={
                styles.icon && styles.i} 
                key={value.id}
                onChange={event => setOptionValue(event.currentTarget.value)}>
                    <Icon name={value.icon}></Icon>
                    {value.name}
                    {formatPrice(value.price)}

            </div>
        ))}
    </div>
  
);


export default OrderOptionIcons;