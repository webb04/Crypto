import React, { Component } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label } from 'recharts';
import PropTypes from 'prop-types';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth
              || document.documentElement.clientWidth
              || document.body.clientWidth
        }
        this.updateWidth = this.updateWidth.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateWidth);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWidth);
    }

    componentWillMount() {
        this.updateWidth();
    }

    getWidth() {
        return window.innerWidth
          || document.documentElement.clientWidth
          || document.body.clientWidth;
    }

    updateWidth() {
        this.setState({
          width: window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth
        });
    }

    render() {
      const { yaxis, data, dataKey, title } = this.props;
      const { width } = this.state;
      const widthValue = width < 800 ? `90%` : `25%`;
        return (
            <ResponsiveContainer width={widthValue} height="20%" aspect={4.0/3.0}>
                <AreaChart data={data} margin={{top: 10, right: 20, left: 20, bottom: 0}}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <XAxis>
                        <Label className="label-title" value={title} />
                    </XAxis>
                    {
                      yaxis
                        ? <YAxis domain={["dataMin", "dataMax"]} hide={true}/>
                        : null
                    }
                    <Area type='monotone' dataKey={dataKey} stroke='rgba(1, 56, 94, 0.98)' fill='rgba(0, 74, 124, 0.98)' />
                </AreaChart>
            </ResponsiveContainer>
        )
    }
}

Chart.propTypes = {
    yaxis: PropTypes.bool,
    data: PropTypes.array,
    dataKey: PropTypes.string,
    title: PropTypes.string
};

Chart.defaultProps = {
    yaxis: false,
    data: [],
    dataKey: 'USD',
    title: ''
};

export default Chart;
