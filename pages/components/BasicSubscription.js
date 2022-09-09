import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function BasicSubscription() {

    const pros = [
                {text: 'Napredni dashboard/statistika'},
                {text: 'Neograničen broj poslovnica'},
                {text: 'Ankete, baneri i još puno toga!'}
            ]

    return(
        <div className='m-card shadow ebecee-border'>
            <p className="fw600-fs14 mt-20 as-cnt">Trenutno aktivni paket</p>
            <div className="sub-button as-cnt">BASIC</div>
            <div className="horizontal-border mt-15-5"></div>
            <p className="fw600-fs14 mt-15-5">Želite Business paket?</p>
            <div className="premium-pros-container">
                {
                    pros.map((p) => (
                        <div className="pros-container m-0">
                            <img className="support-icon m-0" alt='' src="/assets/supportmark.svg" />
                            <div className="pros-text">
                                {p.text}
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="basic-sub-upg-button">
                <h3 className="f-16">Nadogradi</h3>
                <FontAwesomeIcon icon={faLongArrowRight} className='pros-arrow' />
            </div>
        </div>
    )
}