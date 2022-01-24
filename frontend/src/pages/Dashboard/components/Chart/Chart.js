import React from 'react';
import CanvasJSReact from './canvasjs.react';
var Component = React.Component;
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class LineChart extends Component {
  render() {
    const options = {
      animationEnabled: true,
      title: {
        text: "Total Vists"
      },
      axisX: {
        title: "Date",
        interval: 5, 
        minimum: 0,
        maximum: 31
      },
      aixsY: {
        title: "Views",
        interval: 10
      },
      width: 1500,
      data: [{
        yValueFormatString: "##",
				xValueFormatString: "Views This Month",
				type: "spline",
				dataPoints: [
					{ x: 1, y: 14 },
					{ x: 5, y: 26 },
					{ x: 10, y: 48 },
					{ x: 15, y: 52 },
					{ x: 20, y: 63 },
					{ x: 25, y: 65 },
					{ x: 30, y: 70 }
				]
      }]
    }
    return (
      <div>
        <CanvasJSChart className="lc" options = {options} />
      </div>
    );
  }
}
