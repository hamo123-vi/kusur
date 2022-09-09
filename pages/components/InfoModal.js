import { sidebarToggler } from "../../js/sidebarToggler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function InfoModal() {
    return(
        <div id='i-modal' className="modal-outer">
            <div className="modal-inner">
                <div className="modal-close-button-container">
                    <FontAwesomeIcon onClick={() => sidebarToggler('i-modal')} icon={faX} className='modal-close-button' />
                </div>
                <div className="modal-content-container">
                    <div className="info-app-container">
                        <h1 className="modal-info-title">Bee Coinz mobile app</h1>
                        <div className="qr-left-container">
                            <div className="qr-container">
                                <img className="qr-image" alt='' src='/assets/qr.png' />
                                <img className="app-image" alt='' src='/assets/appstore.png' />
                            </div>
                            <div className="qr-container">
                                <img className="qr-image" alt='' src='/assets/qr.png' />
                                <img className="app-image" alt='' src='/assets/gplay.png' />
                            </div>
                        </div>
                    </div>
                    <div className="vertical-border"></div>
                    <div className="info-app-container">
                        <h1 className="modal-info-title">Tenant QR</h1>
                        <div className="qr-container">
                            <img className="qr-image" alt='' src='/assets/qr.png' />
                            <div>
                                <input type='number' value="1234" className="info-modal-input" />
                                <div className="help-div">
                                    <div className="info-modal-input-label">Moj PIN</div>
                                    <img className="copy-icon" alt='' src='/assets/copy-regular.svg' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="dl-button">Download</button>
            </div>
        </div>
    )
}