import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels'
import faker from 'faker';

export default function AgeChart(props) {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
      );

      ChartJS.register(ChartDataLabels)
      
      var max = 0
      var labels = []
      var dt = []
      
      props.data.map((label) => {
        labels.push(label.name)
        dt.push(label.value)
      });

      max = Math.max(...dt)
      max = max + max * 0.25
      
      const options = {
        responsive: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            position: 'average',
            backgroundColor: '#fff',
            titleColor: '#000',
            labelColor: '#747474',
            footerColor: '#e4e4e4',
            padding: 20,
            displayColors: false,
            borderColor: '#fff',
            borderWidth: 0,
            callbacks: {
              beforeTitle: () => {
                return 'Godine korisnika'
              },

              label: (context) => {
                let label = context.dataset.label 
                return label
            }
            }
        },
          title: {
            display: false
          },
          datalabels: {
            display: false
          }
        },
        elements: {
          point: {
            hoverBackgroundColor: '#fff'
          }
        },
        scales: {
            y: {
                ticks: {
                    stepSize: labels.length,
                    padding: 5,
                    color: '#0F172E',
                    font: {
                        size: 12,
                        weight: 500
                    }
                },
                max: max,
                beginAtZero: true
            },
            x: {
                ticks: {
                    padding: 10,
                    font: {
                        size: 12,
                        weight: 600
                    },
                    
                }
            }
        },
        maxBarThickness: 10
      };


      
      const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: dt,
            backgroundColor: '#206DC5'
          }
        ],
      };

    return(
        <div className='m-card plus ebecee-border ptl-20'>
            <h3 className="fw600-fs14">Godine korisnika</h3>
            <Bar className='age-chart' options={options} data={data} />
        </div>
    )
}