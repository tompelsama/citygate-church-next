import { BASE_URL } from '@/constants';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import parse from 'html-react-parser';
import "./index.scss"

async function getEvents() {
    try {
        const res = await fetch(BASE_URL + "/api/elvanto?q=59n0rr4m5v", {
            next: {
                revalidate: 3600
            }
        })

        return res.json()
    } catch (error) {
        console.error(error);
    }
}

const eventsData = await getEvents()

// console.log(eventsData)

const Page = () => {
    const router = useRouter()

    const [event, setEvent] = useState(null)

    useEffect(() => {
        if(!router.isReady) return;

        if(eventsData) {
            const eventData = eventsData.events.event.find((item) => {
                return item.id === router.query.id
            })
            setEvent(eventData)
        }

    }, [eventsData, router.isReady])

    return <section className="event">
        <div className="container event-container">
            {
                event ? <div>
                    {
                        parse(event.description)
                    }
                </div> : <div>
                    <p>Something wrong when loading the data. Please try again later.</p>
                </div>
            }
        </div>
    </section>
}

export default Page