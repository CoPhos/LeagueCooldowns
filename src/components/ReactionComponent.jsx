import React, { useState, useContext, useEffect } from 'react'
import ReactionCard from './ReactionCard'

function ReactionComponent() {
    const [display, setDisplay] = useState(true)
    const [number, setnumber] = useState(5)
    const cards = [
        <ReactionCard
            image={'scimitar.webp'}
            sizes={'400px'}
            display={display}
            setDisplay={setDisplay}
            interval={interval}
            number={number}
        ></ReactionCard>,
        <ReactionCard
            image={'flashBig.webp'}
            sizes={'400px'}
            display={display}
            setDisplay={setDisplay}
            interval={interval}
            number={number}
        ></ReactionCard>,
        <ReactionCard
            image={'cleanse.webp'}
            sizes={'400px'}
            display={display}
            setDisplay={setDisplay}
            interval={interval}
            number={number}
        ></ReactionCard>,
        <ReactionCard
            image={'stopwatch.webp'}
            sizes={'400px'}
            display={display}
            setDisplay={setDisplay}
            interval={interval}
            number={number}
        ></ReactionCard>,
    ]
    var date1 = new Date()
    document.addEventListener('keypress', function (event) {
        let reactionTime
        if (event.key == '2' && number == 0) {
            let date2 = new Date()
            reactionTime = date2.getTime() - date1.getTime()
            console.log(reactionTime)
        } else if (event.key == '3' && number == 3) {
            let date2 = new Date()
            reactionTime = date2.getTime() - date1.getTime()
            console.log(reactionTime)
        } else if (event.key == 'f' && number == 1) {
            let date2 = new Date()
            reactionTime = date2.getTime() - date1.getTime()
            console.log(reactionTime)
        } else if (event.key == 'd' && number == 2) {
            let date2 = new Date()
            reactionTime = date2.getTime() - date1.getTime()
            console.log(reactionTime)
        }
        
    })


    let interval = setInterval(() => {
        let realNumber = Math.floor(Math.random() * (4 - 0) + 0)
        let prevNumber = number
        if (prevNumber != realNumber){
            clearInterval(interval)
            setnumber(realNumber)
            date1 = new Date()
        } 
    }, 4000)

    return <div>{cards[number]}</div>
}

export default ReactionComponent
