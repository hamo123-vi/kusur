export default function PremiumSubscription() {
    return(
        <div className='m-card shadow ebecee-border'>
            <p className="fw600-fs14 mt-20 as-cnt mt-67">Trenutno aktivni paket</p>
            <div className="sub-button as-cnt premium-button">
                <img src='/assets/premium.svg' className="premium-icon" alt='' />
                <div>PREMIUM</div>
            </div>
            <div className="horizontal-border mt-15-5 mt-67"></div>
            <p className="fw600-fs14 mt-15-5 as-cnt">Hvala na povjerenju! Kusur tim.</p>
            <p className="premium-expires as-cnt">Paket aktivan do 15. 10. 2022. 15:38</p>
        </div>
    )
}