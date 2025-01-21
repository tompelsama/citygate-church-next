"use client"

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ReactLenis } from 'lenis/react'
import 'lenis/dist/lenis.css'
 
export default function SmoothScrolling({ children }) {
    const lenisRef = useRef()
  
    useEffect(() => {
        function update(time) {
        lenisRef.current?.lenis?.raf(time * 1000)
        }
    
        gsap.ticker.add(update)
    
        return () => gsap.ticker.remove(update)
    }, [])

    return <ReactLenis options={{ autoRaf: false }} ref={lenisRef} root>
        {children}
    </ReactLenis>
}