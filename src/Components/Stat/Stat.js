import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AnimatedNumber from '../AnimatedNumber/AnimatedNumber';

import './Stat.css';

class Stat extends Component {
    render() {
        const { title, number, currency, decimal } = this.props;
            return (
                <div className="stat">
                    <p>{title}</p>
                    <AnimatedNumber currency={currency} decimal={decimal} number={number}/>
                </div>
        )
    }
}

Stat.propTypes = {
    title: PropTypes.string,
    number: PropTypes.number,
    currency: PropTypes.bool,
    decimal: PropTypes.bool
};

Stat.defaultProps = {
    title: '',
    number: 0,
    currency: false,
    decimal: false
};

export default Stat;
