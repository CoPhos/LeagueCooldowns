import React, { useState, useContext, useEffect } from 'react'
import  Themecontext  from './ChampionSelect'

import styled from 'styled-components'

function ChampionAbility({ image, cooldownValue, sizes }) {
    const [display, setDisplay] = useState(true)
    const start = useContext(Themecontext)

    let number

    let interval = setInterval(() => {
        number = Math.floor(Math.random() * (10 - 1) + 1)
        console.log(number)
        if (number <= 5) {
            setDisplay(!display)
            clearInterval(interval)
        }
    }, cooldownValue * 1000)

    return (
        <div>
            {display && (
                <ChampionAbilitiesContainer
                    
                    theme={{
                        img: image,
                        size: sizes
                    }}
                ></ChampionAbilitiesContainer>
            )}
        </div>
    )
}



const ChampionAbilitiesContainer = styled.div`
    min-width: ${(props) => props.theme.size};
    min-height: ${(props) => props.theme.size};
    max-width: ${(props) => props.theme.size};
    max-height: ${(props) => props.theme.size};
    background-image: url(http://localhost:3000/Abilities/${(props) =>
        props.theme.img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: normal;
`

export default ChampionAbility
