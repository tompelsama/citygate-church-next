import React, { useEffect, useRef, useState } from 'react'
import "./TextRevealAnimation.scss"
import parse from 'html-react-parser';

const TextReveal = ({splitText}) => {

    useEffect(() => {
        let spans = [...document.querySelectorAll('.split-text')]
    
        function revealSpans() {
            for(let i = 0; i < spans.length; i++) {
                if(spans[i].parentElement.getBoundingClientRect().top < window.innerHeight / 2 + 50) {
                    let {left, top} = spans[i].getBoundingClientRect()
                    //Set the trigger point from the top of the window
                    top = top - (window.innerHeight * .5)

                    let opacityValue = 1 - ((top * 0.1) + (left * 0.001)) < 0.2 ? 0.2 : 1 - ((top * .01) + (left * 0.001)).toFixed(3)
                    
                    opacityValue = opacityValue > 1 ? 1 : opacityValue.toFixed(3)
                    spans[i].style.opacity = opacityValue
                }
            }
        }

        window.addEventListener('scroll', () => {
            revealSpans()
        })

        revealSpans()
    }, [splitText])

    return parse(splitText)
}

const TextRevealAnimation = ({text, align = "left"}) => {
    const textRevealRef = useRef()
    const [splitText, setSplitText] = useState('')

    useEffect(() => {
        let htmlString = ''
        let pArray = text.split('');
        
        for(let i = 0; i < pArray.length; i++) {
            htmlString += `<span class="split-text">${pArray[i]}</span>`
        }

        setSplitText(htmlString)
    }, [text])

    return <div className="text-reveal">
        <div className="container">
            <p ref={textRevealRef} style={{
                justifySelf: (align === 'right') ? "flex-end" : "flex-start",
                textAlign: (align === 'right') ? "right" : "left",
                marginRight: (align === 'right') ? 0 : "auto",
                marginLeft: (align !== 'right') ? 0 : "auto",
            }}>{splitText && <TextReveal splitText={splitText} />}</p>
        </div>
    </div>
}

export default TextRevealAnimation