import React from 'react'
import "./index.css"
import NavBar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const MainLayout = ({children}) => {
    return <main className="app">
        <NavBar />
            <main>{children}</main>
        <Footer />
    </main>
}

export default MainLayout