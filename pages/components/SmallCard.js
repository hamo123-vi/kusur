import { prettyNumber } from "../../js/prettyNumber"

export default function SmallCard(props) {
    return(
        <div className='s-card ebecee-border'>
            <img className="s-card-icon" alt='' src={'/assets/s_card_images/' + props.icon + '.png'} />
            <div className="s-card-data-container">
                <p className="fw600-fs14">{props.desc}</p>
                <h2 className="s-card-value">
                    {
                        prettyNumber(props.c_value)
                    }
                </h2>
                <h4 className="new-this-week">{'+' + props.this_week + ' ove sedmice'}</h4>
            </div>
        </div>
    )
}