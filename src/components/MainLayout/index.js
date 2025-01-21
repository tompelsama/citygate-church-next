import React from 'react'
import Head from 'next/head'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./index.css"
import NavBar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import SmoothScrolling from '../SmoothScrolling'

const MainLayout = ({children}) => {
    return <>
        <Head>
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <SmoothScrolling>
            <main className="app">
                <NavBar />
                    <main>{children}</main>
                <Footer />
            </main>
        </SmoothScrolling>
        <Analytics />
        <SpeedInsights />
    </>
}

export default MainLayout