import React from 'react';
import tabledata from './data';

class Chart extends React.Component {
    constructor(props) {
      super(props);
      this.state = {tabledata: tabledata};
    }
  
    render() {

        const component = (
            <div class="col">
              <div class="card">
                <div class="card-header">
                  Price Chart
                </div>
                <div class="card-body">
                  Placeholder for chart
                </div>
              </div>
            </div>
        );

      return component;
    }
  }

  export default Chart;