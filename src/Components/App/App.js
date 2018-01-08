import React, { Component } from 'react';
import SVG from 'react-inlinesvg';

import Stat from '../Stat/Stat';
import Chart from '../Chart/Chart';

import { USD_EXCHANGE_TRADE_VOLUME, BITCOINS_IN_CIRCULATION, MARKET_PRICE_USD, MARKET_CAPITALIZATION } from '../../mock-api-data.js';
import logo from '../../logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <SVG className="logo" src={logo}/>
        </header>
        <div className="popular-stats">
          <Stat title='Market Price (USD)' currency={true} decimal={true} number={13518.53}/>
          <Stat title='Average Block Size' decimal={true} number={1.04}/>
          <Stat title='Transactions per Day' number={250498}/>
          <Stat title='Mempool Size' number={119571967}/>
        </div>
        <div className="charts">
          <Chart title='Bitcoins in Circulation' yaxis={true} data={BITCOINS_IN_CIRCULATION}/>
          <Chart title='Market Price (USD)' data={MARKET_PRICE_USD}/>
          <Chart title='Market Capitalization' data={MARKET_CAPITALIZATION}/>
          <Chart title='USD Exchange Trade Volume' data={USD_EXCHANGE_TRADE_VOLUME} dataKey='USD'/>
        </div>
      </div>
    );
  }
}

export default App;
