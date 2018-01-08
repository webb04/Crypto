import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import PropTypes from 'prop-types';

class AnimatedNumber extends Component {
    render() {
        let { number, decimal, currency } = this.props;
        const countupPrice = number * 0.75;
        const settings = [60, 26];

        return (
            <Motion defaultStyle={{x: countupPrice}} style={{x: spring(number, settings)}}>
                {value => <span>{
                  decimal
                    ? `${currency ? '$' : ''}${value.x.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
                    : `${currency ? '$' : ''}${value.x.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
                }</span>}
            </Motion>
        )
    }
}

AnimatedNumber.propTypes = {
    number: PropTypes.number.isRequired,
    decimal: PropTypes.bool,
    currency: PropTypes.bool
};

AnimatedNumber.defaultProps = {
    number: 0,
    decimal: false,
    currency: false
};

export default AnimatedNumber;
