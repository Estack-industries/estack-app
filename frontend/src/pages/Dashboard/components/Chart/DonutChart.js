import React from 'react';
import CanvasJSReact from './canvasjs.react';
var Component = React.Component;
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class DonutChart extends Component {
  render() {
    const options = {
      animationEnabled: true,
      title: {
        text: "Perpetual"
      },

      data: [{
        type: "doughnut",
        startAngle: 120,
        indexLabel: "{label} - {y} users",
        toolTipContent: "<b>{label}:</b> {y}",
				dataPoints: [
					{ y: 3124213, label: "Google.com Inc" },
					{ y: 1523151, label: "Recommended Flow" },
					{ y: 948213, label: "Other" },
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
