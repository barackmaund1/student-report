import React from 'react';
import './Chart.css';
import {Bar,Line,Pie} from 'react-chartjs-2';

const Chart = ({data}) => {

const chart=data.student_performance_over_time;
    console.log(chart)

    return (
      <div className="chart">
        <div className="chart__bar">
          <Bar
            data={{
              labels: chart.map((item) => item.exam_name),
              datasets: [
                {
                  data: chart.map((item) => item.avg_score),
                  label: "Average score",
                  backgroundColor: [
                    "rgb(0,0,255,0.5)",
                    "rgb(0,255,0,0.5)",
                    "rgb(255,0,0,0.5)",
                    "rgb(153,102,70,0.6)",
                    "rgb(255,159,64,0.6)",
                    "rgb(255,99,60,0.6)",
                  ],
                },
              ],
            }}
            options={{
              title: {
                display: true,
                text: "Student performance overtime",
                fontSize: 20,
              },
              legend: {
                display: true,
                position: "bottom",
                location: "School",
              },
            }}
          />
        </div>
        <div className="chart__line">
          <Line
            data={{
              labels: chart.map((item) => item.exam_name),
              datasets: [
                {
                  data: chart.map((item) => item.avg_score),
                  label: "Average score",
                  backgroundColor: ["rgba(255, 0, 234, 0.473)"],
                },
              ],
            }}
            options={{
              title: {
                display: true,
                text: "Student performance overtime",
                fontSize: 20,
              },
              legend: {
                display: true,
                position: "bottom",
                location: "School",
              },
            }}
          />
        </div>
      </div>
    );
}

export default Chart
