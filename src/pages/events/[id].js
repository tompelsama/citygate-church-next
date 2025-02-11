import { BASE_URL } from '@/constants';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import parse from 'html-react-parser';
import "./index.scss"

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    try {
        const res = await fetch(BASE_URL + "/api/elvanto?q=59n0rr4m5v", {
            next: {
                revalidate: 3600
            }
        })

        const data = await res.json()
        // Pass data to the page via props
        return { props: { data } }
    } catch (error) {
        console.error(error);
    }
}

const Page = ({data}) => {
    const router = useRouter()

    const [event, setEvent] = useState(null)

    useEffect(() => {
        if(!router.isReady) return;

        if(data) {
            const eventData = data.events.event.find((item) => {
                return item.id === router.query.id
            })
            setEvent(eventData)
        }

    }, [data, router.isReady])

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