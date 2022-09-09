import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Pie } from 'react-chartjs-2';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';

export default function GenderPie(props) {

    const men = props.men;
    const women = props.women;
    const other = props.other

    ChartJS.register(ArcElement, Tooltip);
    ChartJS.register(ChartDataLabels)
  const options = {
    plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false
        },
        datalabels: {
          display: true,
        color: '#fff',
        borderRadius: 3,
        font: {
          size: 16,
        }
        }
      },
  }

  const data = {
  datasets: [
    {
      data: [men, women, other],
      backgroundColor: [
        '#206DC5',
        '#20C54C',
        '#747474'
      ],
      borderColor: [
        '#fff',
        '#fff',
        '#fff'
      ],
      borderWidth: 2,
    },
  ],
};

    return(
        <div className="m-card plus ebecee-border ptl-20">
            <h3 className="fw600-fs14">Spol korisnika</h3>
            <div className="gender-pie-container">
                <div>
                    <Pie options={options} className='gender-pie' data={data} />
                    <div className='gender-pie-ring'>{Number(men) + Number(women) + Number(other)}</div>
                </div>
                <div className='stat-container'>
                    <div className='stat-2-container'>
                        <div className='little-ring bg-20C54C'></div>
                        <div className='stat-3-container'>
                            <div className='stat-title'>Žene</div>
                            <div className='gender-pie-ring pos-un h42'>{women}</div>
                        </div>
                    </div>
                    <div className='stat-2-container'>
                        <div className='little-ring bg-206DC5'></div>
                        <div className='stat-3-container'>
                            <div className='stat-title'>Muškarci</div>
                            <div className='gender-pie-ring pos-un h42'>{men}</div>
                        </div>
                    </div>
                    <div className='stat-2-container'>
                        <div className='little-ring bg-gr'></div>
                        <div className='stat-3-container'>
                            <div className='stat-title'>Ostali</div>
                            <div className='gender-pie-ring pos-un h42'>{other}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}