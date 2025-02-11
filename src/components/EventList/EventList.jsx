import BentoTilt from '@/components/BentoTilt/BentoTilt';
import parse from 'html-react-parser';
import { formatDateFromString, getTimeFromString, isSameDateFromStrings } from '@/helper';
import Button from '../Button/Button';
import "./EventList.scss"

const EventList = ({event}) => {
    return <li className="events-article__list__info">
        <div className="events-article__list__info__thumbnail">
            <BentoTilt className="bento-tilt_2">
                <img src={event.picture} alt="" />
            </BentoTilt>
        </div>
        <div className="events-article__list__info__desc">
            <h2>{event.name}</h2>
            {
                event.admin_notes && parse(event.admin_notes)
            }
            {
                isSameDateFromStrings(event.start_date, event.end_date) ? <p>When: {formatDateFromString(event.start_date) + " until " + getTimeFromString(event.end_date)}</p> : <p>When: {formatDateFromString(event.start_date) + " until " + formatDateFromString(event.end_date)}</p>             
            }
            <p>Location: {event.where}</p>
            <Button title={"Read more"} url={`/events/${event.id}`} containerClass={"events-article__list__info__desc__btn"} />
        </div>
    </li>
}

export default EventList