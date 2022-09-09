import Head from 'next/head';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SupportCard from './components/SupportCard';
import InfoModal from './components/InfoModal';

export default function Podrska() {

    const support_page_data = [
        {
            title: 'Grafička podrška',
            description: 'Nas graficki tim stoji vam na raspolaganju za izradu ' +
                            'grafickih materijala koji ce vasim kupcima ' +
                                'zaista ponuditi dodatni Kusur..',
            pros: [
                {text: 'Brendiranje objekata'},
                {text: 'Izrada grafičkog profila'},
                {text: 'Priprema kupona i banera'}
            ]
        },
        {
            title: 'Planiranje loyalty strategije',
            description: 'Niste sigurni kako privuci veci broj kupaca? '+
                            'Trebate pomoc pri implementaciji programa lojalnosti?' +
                                ' Naš konsultantski tim ce vam pomoci da sa Kusurom nudite vise u svakom trenutku.',
            pros: [
                {text: 'Analiza i uvid u vase trenutno stanje na trzistu'},
                {text: 'Marketing strategija'},
                {text: 'Podrska u implementaciji i realizaciji postavljenih ciljeva'},
                {text: 'Podrska u plasiranju i upravljanju programom lojalnosti'}
            ]
        }
    ]

    return(
        <div className='container'>

            <Head>
            <title>Kusur | Podrška</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>
    
            <Sidebar />
    
            <div className='content-container'>
    
            <Header icon='info' title='Podrška'/>
    
            <main className='support-main-container'>
                <SupportCard data={support_page_data}/>
            </main>

            <Footer />
    
            </div>

            <InfoModal />
  
        </div>
    )
}