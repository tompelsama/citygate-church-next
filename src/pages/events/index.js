import dynamic from 'next/dynamic'
import HeaderContentSection from '@/components/HeaderContentSection/HeaderContentSection';
import { BASE_URL } from '@/constants';
import React from 'react'
import "./index.scss"

const DynamicEvent = dynamic(() => import('@/components/EventList/EventList'), {
    loading: () => <p>Loading...</p>,
    ssr: false
})

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

const eventData = await getEvents()
 
const index = () => {
    return <section className="events">
        <HeaderContentSection 
			titleStart={"Ev"} 
			titleMid={"en"} 
			titleEnd={"ts"} 
			img={"/img/event-header.jpg"}
			imgSize={"65%"}
			fontSize={"min(28rem, 23vw)"}
		/>
        <div className="events-article">
            <div className="container">
                <ul className="events-article__list">
                    {
                        eventData.events && eventData.events.event.reverse().map((event, index) => {
                            return <DynamicEvent key={index} event={event} />
                        })  
                    }
                </ul>
            </div>
        </div>
        
    </section>
}

export default index