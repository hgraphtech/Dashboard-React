import React from 'react';
import tabledata from './data';

class Table extends React.Component {
    constructor(props) {
      super(props);
      this.state = {tabledata: tabledata};
    }
  
    render() {
      const tablehead = <tr><th>Commodity</th><th>Price</th><th>1m</th><th>6m</th></tr>;
      const tablebody = tabledata.map((d) =>
        <tr>
          <td>{d.commodity}</td>
          <td>{d.price}</td>
          <td>{d.om}</td>
          <td>{d.sm}</td>
        </tr>
      );
      const fulltable = <table class="table table-striped table-sm"><thead>{tablehead}</thead><tbody>{tablebody}</tbody></table>;
      const component = (
        <div class="col">
          <div class="card">
            <div class="card-header">
              Commodities
            </div>
            <div class="card-body">
              {fulltable}
            </div>
          </div>
        </div>
      );
      
      return component;
    }
  }

  export default Table;