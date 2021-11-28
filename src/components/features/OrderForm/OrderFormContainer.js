import {connect} from 'react-redux';
import OrderForm from './OrderForm';
import {getOrderOptions} from '../../../redux/orderRedux';

const mapStateToProps = state => ({
    options: getOrderOptions,
});

export default connect(mapStateToProps)(OrderForm);