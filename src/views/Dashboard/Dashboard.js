import { Animation, ValueScale } from '@devexpress/dx-react-chart';
import {
  ArgumentAxis,
  BarSeries,
  Chart,
  Legend,
  SplineSeries,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import Paper from '@material-ui/core/Paper';
import React from 'react';

const sales = {
  2017: [
    { month: `Jan`, sale: 50, total: 987 },
    { month: `Feb`, sale: 100, total: 3000 },
    { month: `Mar`, sale: 30, total: 1100 },
    { month: `Apr`, sale: 107, total: 7100 },
    { month: `May`, sale: 95, total: 4300 },
    { month: `Jun`, sale: 150, total: 7500 },
    { month: `Jul`, sale: 120, total: 5300 },
    { month: `Aug`, sale: 110, total: 2500 },
    { month: `Sep`, sale: 54, total: 2300 },
    { month: `Oct`, sale: 129, total: 2600 },
    { month: `Nov`, sale: 48, total: 3400 },
    { month: `Dec`, sale: 43, total: 3200 },
  ],
  2018: [
    { month: `Jan`, sale: 100, total: 1000 },
    { month: `Feb`, sale: 200, total: 4300 },
    { month: `Mar`, sale: 50, total: 1200 },
    { month: `Apr`, sale: 127, total: 7150 },
    { month: `May`, sale: 105, total: 4340 },
    { month: `Jun`, sale: 180, total: 7520 },
    { month: `Jul`, sale: 150, total: 5380 },
    { month: `Aug`, sale: 120, total: 2590 },
    { month: `Sep`, sale: 59, total: 2700 },
    { month: `Oct`, sale: 139, total: 2800 },
    { month: `Nov`, sale: 66, total: 3450 },
    { month: `Dec`, sale: 55, total: 3260 },
  ],
  2019: [
    { month: `Jan`, sale: 170, total: 856 },
    { month: `Feb`, sale: 150, total: 3574 },
    { month: `Mar`, sale: 10, total: 1198 },
    { month: `Apr`, sale: 33, total: 6150 },
    { month: `May`, sale: 84, total: 3340 },
    { month: `Jun`, sale: 120, total: 5520 },
    { month: `Jul`, sale: 110, total: 3380 },
    { month: `Aug`, sale: 90, total: 1890 },
    { month: `Sep`, sale: 29, total: 1900 },
    { month: `Oct`, sale: 118, total: 2300 },
    { month: `Nov`, sale: 48, total: 3198 },
    { month: `Dec`, sale: 12, total: 2410 },
  ],
};

const option = [2017, 2018, 2019];

export default class Dashboard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: sales[2017],
    };
    this.changeData = this.changeData.bind(this);
    this.id = undefined;
    this.index = 1;
  }

  componentDidMount() {
    const selectElement = document.getElementById(`select`);
    this.id = setInterval(() => {
      selectElement.selectedIndex = this.index;
      this.setState({ data: sales[option[this.index]] });
      if (this.index === 2) {
        this.index = 0;
      } else {
        this.index += 1;
      }
    }, 4000);
  }

  componentWillUnmount() {
    clearTimeout(this.id);
  }

  changeData(e) {
    this.setState({ data: sales[e.target.value] });
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart data={chartData}>
          <ValueScale name="sale" />
          <ValueScale name="total" />

          <ArgumentAxis />
          <ValueAxis scaleName="sale" showGrid={false} showLine showTicks />
          <ValueAxis
            position="right"
            scaleName="total"
            showGrid={false}
            showLine
            showTicks
          />

          <BarSeries
            argumentField="month"
            name="Units Sold"
            scaleName="sale"
            valueField="sale"
          />

          <SplineSeries
            argumentField="month"
            name="Total Transactions"
            scaleName="total"
            valueField="total"
          />
          <Animation />
          <Legend />
        </Chart>
        <select
          id="select"
          onChange={this.changeData}
          style={{ width: `100px`, margin: `10px` }}
        >
          <option>{option[0]}</option>
          <option>{option[1]}</option>
          <option>{option[2]}</option>
        </select>
      </Paper>
    );
  }
}
