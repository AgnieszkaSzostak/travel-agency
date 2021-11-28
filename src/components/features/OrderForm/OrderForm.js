import React from 'react';
import PropTypes from 'prop-types';
// import styles from './OrderForm.module.scss';
import OrderSummary from '../OrderSummary/OrderSummary.js';
import OrderOption from '../OrderOption/OrderOption.js';
import pricing from '../../../data/pricing.json';
import {Row, Col} from 'react-flexbox-grid';

class OrderForm extends React.Component {
    
    render(){
        const {tripCost, options} = this.props;
        return(
            <Row>
                {pricing.map((pricingOption) => (
                    <Col md={4} key={pricingOption.id}>
                        <OrderOption>{{...pricingOption}}</OrderOption>
                    </Col>
                ))}
                <Col xs={12}>
                    <OrderSummary cost={tripCost} options={options}></OrderSummary>
                </Col>
            </Row>
        )
    }
}
OrderForm.propTypes = {
    tripCost: PropTypes.string,
    options: PropTypes.object
}

export default OrderForm;