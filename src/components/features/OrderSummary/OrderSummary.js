import React from 'react';
// import PropTypes from 'prop-types';
import styles from './OrderSummary.module.scss';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';

class OrderSummary extends React.Component {
    render(){
        const {cost, options} = this.props;

        return(
        <h2 className={styles.component}>{formatPrice(calculateTotal(cost, options))}</h2>
        )
        
    }
}


export default OrderSummary;