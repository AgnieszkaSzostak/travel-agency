import React from 'react';
import PropTypes from 'prop-types';
// import styles from './OrderForm.module.scss';
import OrderSummary from '../OrderSummary/OrderSummary.js';

import {Row, Col} from 'react-flexbox-grid';

class OrderForm extends React.Component {
    
    render(){
        const {tripCost, options} = this.props;
        return(
            <div >
                <Row>
                    <Col xs={12}>
                        <OrderSummary cost={tripCost} options={options}></OrderSummary>
                    </Col>
                </Row>
            </div>
        )
    }
}
OrderForm.propTypes = {
    tripCost: PropTypes.number,
    options: PropTypes.node
}

export default OrderForm;