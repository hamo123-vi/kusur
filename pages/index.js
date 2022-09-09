import Head from 'next/head';
import BasicSubscription from './components/BasicSubscription';
import Footer from './components/Footer';
import Header from './components/Header';
import InfoModal from './components/InfoModal';
import PremiumSubscription from './components/PremiumSubscription';
import Sidebar from './components/Sidebar';
import SmallCard from './components/SmallCard';
import LineChart from './components/LineChart';
import GenderPie from './components/GenderPie';
import AgeChart from './components/AgeChart';
import axios from 'axios';
import { useEffect, useState } from 'react';

export async function getStaticProps() {
  var test = {
    db: 'Prem',
   cad: [
      {
       "val": 3,
       "e4": 'str'
     }
     ]
   }

  const res = await fetch(process.env.API_URL, { headers: {
    'Authorization': process.env.TOKEN
  }});

  const data = await res.json(); 


  // axios.get(process.env.API_URL, { headers: {
  // 'Authorization': process.env.TOKEN
  // }}).then((res) => {
  //   data = res.data.payload;
  // })
    return {
      props: {
        data
      }
    }
}

export default function Home({data}) {

  const d = data.payload
  console.log(d);

  return (
    <div className='container'>

      <Head>
        <title>Kusur | Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar />

      <div className='content-container'>

      <Header icon='dashboard_dark' title='Dashboard'/>

      <main className='dashboard-main-container'>
        <div className='dashboard-topbar-container'>
          <h1 className='dashboard-title'>
            Dashboard statistics
          </h1>
          <div className='dashboard-menu-buttons-container'>
            <div className='dashboard-menu-buttons'>
                <div>Ovaj mjesec</div>
                <img className='dashboard-menu-icons' alt='' src='/assets/calendar.svg' />
            </div>
            <div className='dashboard-menu-buttons'>
                <div>Poslovnica X</div>
                <img className='dashboard-menu-icons' alt='' src='/assets/expandbig.svg' />
            </div>
          </div>
        </div>

        <div className='dasboard-topbar-border'></div>

        <div className='grid-container'>
          <div className='top'>
          <div className='quarter-container'>
             {
              d.dashboardType == 'Premium' ? <PremiumSubscription /> : <BasicSubscription />
            } 
             <div className='s-card-col-wraper'>
               <SmallCard icon='first' desc='Registrovanih korisnika' c_value={d.cards[0].value} this_week={d.cards[0].value}/>
              <SmallCard icon='second' desc='Konektovanih korisnika'  c_value={d.cards[1].value} this_week={d.cards[1].value}/> 
          </div>  
          </div>
          <div className='quarter-container'>
              <div className='s-card-col-wraper'>
              <SmallCard icon='third' desc='Korisnika koji su imali transakcije' c_value={d.cards[2].value} this_week={d.cards[2].value} />
              <SmallCard icon='fourth' desc='Standardnih/nagradnih kupona utrošeno' this_week={d.cards[3].value} c_value={d.cards[3].value} />
            </div>
            <div className='s-card-col-wraper'>
              <SmallCard icon='fifth' desc='Sakupljenih/potrošenih bodova' this_week={d.cards[4].value} c_value={d.cards[4].value} />
              <SmallCard icon='sixth' desc='Broj preuzimanja Android/iOS' this_week='235 / 164' c_value='820/580' />
            </div> 
          </div></div>
          <div className='top'>
          <LineChart />
          <div className='quarter-container'>
            <GenderPie men={d.graphs[0].graphValues[0].value}
                          women={d.graphs[0].graphValues[1].value} 
                          other={d.graphs[0].graphValues[2].value} />
            <AgeChart data = {d.graphs[1].graphValues } />
          </div>
          </div>
        </div>
        
      </main>

      <Footer />

      </div>

      <InfoModal />

    </div>

  )
}
