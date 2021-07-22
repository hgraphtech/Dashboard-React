import React from 'react';
import { Line } from 'react-chartjs-2';
import data from './data';



class Chart extends React.Component {
    constructor(props) {
      super(props);
      this.state = {data: data};
    }
  
    render() {
      const cdata = {
        labels: this.state.data.dates,
        datasets: [
          {
            data: this.state.data.prices[0].price_series,
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#007bff',
            borderWidth: 4,
            pointBackgroundColor: '#007bff',
          },
        ],
      };
      
      const options = {
        plugins:{
          legend: {
            display: false,
          },
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };

      const component = (
          <div className="col">
            <div className="card">
              <div className="card-header">
                Price Chart
              </div>
              <div className="card-body">
                <Line data={cdata} options={options} />
              </div>
            </div>
          </div>
      );

      return component;
    }
  }



export default Chart;