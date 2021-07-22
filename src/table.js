import React from 'react';
import data from './data';

class Table extends React.Component {
    constructor(props) {
      super(props);
      this.state = {tabledata: data.table_data};
    }
  
    render() {
      const tablehead = <tr><th>Commodity</th><th>Price</th><th>1m</th><th>6m</th></tr>;
      const tablebody = this.state.tabledata.map((d) =>
        <tr>
          <td>{d.commodity}</td>
          <td>{d.price}</td>
          <td>{d.om}</td>
          <td>{d.sm}</td>
        </tr>
      );
      const fulltable = <table className="table table-striped table-sm"><thead>{tablehead}</thead><tbody>{tablebody}</tbody></table>;
      const component = (
        <div className="col">
          <div className="card">
            <div className="card-header">
              Commodities
            </div>
            <div className="card-body">
              {fulltable}
            </div>
          </div>
        </div>
      );
      
      return component;
    }
  }

  export default Table;