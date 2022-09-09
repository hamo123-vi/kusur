import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function SupportCard(props) {
    const data_array = props.data
    return(
        <>
            {
                data_array.map((data) => (
                    <div className="support-card">
                        <h1 className="support-title">{data.title}</h1>
                        <p className="support-description">{data.description}</p>
                        {
                            data.pros.map((p) => (
                                <div className="pros-container">
                                    <img className="support-icon" alt='' src="/assets/supportmark.svg" />
                                    <div>
                                        {p.text}
                                    </div>

                                </div>
                            ))
                        }
                        <div className="pros-button">
                            <div>Kontaktirajte nas</div>
                            <FontAwesomeIcon icon={faLongArrowRight} className='pros-arrow' />
                        </div>
                    </div>
                ))
            }
        </>
    )
}