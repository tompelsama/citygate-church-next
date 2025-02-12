import dynamic from 'next/dynamic'
import HeaderContentSection from '@/components/HeaderContentSection/HeaderContentSection';
import { BASE_URL } from '@/constants';
import React from 'react'
import "./index.scss"

const DynamicEvent = dynamic(() => import('@/components/EventList/EventList'), {
    loading: () => <p>Loading...</p>,
    ssr: false
})

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
        console.log(error)
        return { props: {data: null}}
    }
}
 
const index = ({data}) => {

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
                        data ? data.events.event.reverse().map((event, index) => {
                            return <DynamicEvent key={index} event={event} />
                        }) : <p className="error">Something wrong with the data. Please try again later.</p>
                    }
                </ul>
            </div>
        </div>
        
    </section>
}

export default index