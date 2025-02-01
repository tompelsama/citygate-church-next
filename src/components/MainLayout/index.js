import React from 'react'
import Head from 'next/head'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./index.css"
import Footer from '../Footer/Footer'
import SmoothScrolling from '../SmoothScrolling'
import StyledComponentsRegistry from '@/app/registry'
import dynamic from 'next/dynamic'

// Use dynamic to avoid flickering when reload especially on mobile
const NavBar = dynamic(() => import("../Navbar/Navbar"), {ssr: false})

const MainLayout = ({children}) => {
    return <>
        <Head>
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <StyledComponentsRegistry>
            <SmoothScrolling>
                <main className="app">
                    <NavBar />
                        <main>{children}</main>
                    <Footer />
                </main>
            </SmoothScrolling>
        </StyledComponentsRegistry>
        <Analytics />
        <SpeedInsights />
    </>
}

export default MainLayout