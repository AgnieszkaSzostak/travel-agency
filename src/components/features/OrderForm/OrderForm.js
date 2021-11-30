import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderForm.module.scss';
import OrderSummary from '../OrderSummary/OrderSummary.js';
import OrderOption from '../OrderOption/OrderOption.js';
import pricing from '../../../data/pricing.json';
import {Row, Col} from 'react-flexbox-grid';

class OrderForm extends React.Component {
    
    render(){
        const {tripCost, options, setOrderOption} = this.props;
        return(
            <Row>
                {pricing.map((pricingOption) => (
                    <Col className={styles.col} md={4} key={pricingOption.id}>
                        <OrderOption {...pricingOption} currentValue={options[pricingOption.id]} setOrderOption={setOrderOption}/>
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
    options: PropTypes.object,
    setOrderOption: PropTypes.func,
}

export default OrderForm;