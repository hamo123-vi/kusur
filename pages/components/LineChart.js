import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { Line } from 'react-chartjs-2';
import faker from 'faker'

export default function LineChart() {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );

      ChartJS.register(ChartDataLabels)
      
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
                return 'Registrovanih korisnika'
              },

              label: (context) => {
                let label = context.dataset.label 
                return label
            }
            }
        },
          datalabels: {
          display: false
        }
        },
        scales: {
            y: {
                ticks: {
                    stepSize: 10,
                    padding: 5,
                    color: '#0F172E',
                    font: {
                        size: 12,
                        weight: 500
                    }
                },
                beginAtZero: true,
                max: 60
            },
            x: {
                ticks: {
                    stepSize: 1,
                    padding: 10,
                    font: {
                        size: 12,
                        weight: 600
                    },
                    
                }
            }
        },
        pointRadius: 3,
        pointBorderColor: '#3D44DB',
        pointBorderWidth: 2,
        pointBackgroundColor: '#fff',
        maintainAspectRatio: true
      };
      
      const labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '15', '20', '25', '30'];
      
      const data = {
        labels,
        datasets: [
          {
            data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
            borderColor: '#3d44db',
            backgroundColor: '#3d44db',
            tension: 0.4
          }
        ],
      };

    return(
        <div className='quarter-container plus bg-fff ebecee-border ptl-20'>
            <div className='dashboard-menu-buttons lc-mod'>
                <h3 className='fs-16'>Registrovanih korisnika</h3>
                <img className='dashboard-menu-icons' alt='' src='/assets/expandbig.svg' />
            </div>
            <div className='line-chart-wrapper'>
                <Line className='line-chart' width='576' height='166' options={options} data={data} />
            </div>
        </div>
    )
}