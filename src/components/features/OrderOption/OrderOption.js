import React from 'react';
// import PropTypes from 'prop-types';
import styles from './OrderOption.module.scss';

class OrderOption extends React.Component {
    
    render(){
       
        return(
            <div className={styles.component}>
                <h3 className={styles.title}>"Car Rental"</h3>
            </div>
        )
    }
}
// OrderOption.propTypes = {

// }

export default OrderOption;