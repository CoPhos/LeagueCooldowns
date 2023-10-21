import React, { Fragment, useState, useEffect } from 'react'

import styled from 'styled-components'

function ChampionElement({
    championSelected,
    summonerSpell,
    start,
    cooldownValues,
}) {
    const [display, setDisplay] = useState(true)
    let time = 0
    let number

    setInterval(() => {
        number = Math.floor(Math.random() * (10 - 1) + 1)
        console.log(number)
    }, 1000);

  useEffect(() => {
      let interval = null
      if (start) {
          
              if (number < 4) {
                  console.log('in')
                  setDisplay(!display)
              }
          
          
      }
  }, [number])


    return (
        <ChampionDetailsContainer>
            <ChampionDetailsIcon
                theme={{
                    img: championSelected + '.png',
                }}
            ></ChampionDetailsIcon>
            <ChampionAbilititesContainer>
                <Fragment>
                    <div>
                        {display && (
                            <ChampionAbilitiesContainer
                                key={championSelected + 1}
                                theme={{
                                    img: championSelected + 'Q.png',
                                }}
                            ></ChampionAbilitiesContainer>
                        )}
                    </div>
                    <div>
                        {display && (
                            <ChampionAbilitiesContainer
                                key={championSelected + 2}
                                theme={{
                                    img: championSelected + 'W.png',
                                }}
                            ></ChampionAbilitiesContainer>
                        )}
                    </div>
                    <div>
                        {display && (
                            <ChampionAbilitiesContainer
                                key={championSelected + 3}
                                theme={{
                                    img: championSelected + 'E.png',
                                }}
                            ></ChampionAbilitiesContainer>
                        )}
                    </div>
                    <div>
                        {display && (
                            <ChampionAbilitiesContainer
                                key={championSelected + 4}
                                theme={{
                                    img: championSelected + 'R.png',
                                }}
                            ></ChampionAbilitiesContainer>
                        )}
                    </div>
                    {display && (
                        <ChampionAbilitiesContainer
                            key={championSelected + 5}
                            theme={{
                                img: summonerSpell + '.webp',
                            }}
                        ></ChampionAbilitiesContainer>
                    )}
                    <div>
                        {display && (
                            <ChampionAbilitiesContainer
                                key={championSelected + 6}
                                theme={{
                                    img: 'Flash.webp',
                                }}
                            ></ChampionAbilitiesContainer>
                        )}
                    </div>
                </Fragment>
            </ChampionAbilititesContainer>
        </ChampionDetailsContainer>
    )
}

const ChampionDetailsContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    justify-content: space-evenly;
    align-items: flex-start;
    margin-right: 32px;
`

const ChampionDetailsIcon = styled.div`
    min-width: 45px;
    min-height: 45px;
    max-width: 45px;
    max-height: 45px;
    background-image: url(http://localhost:3000/Icons/${(props) =>
        props.theme.img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: normal;
`
const ChampionAbilititesContainer = styled.div`
    width: 70%
    height: 200px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
`

const ChampionAbilitiesContainer = styled.div`
    min-width: 45px;
    min-height: 45px;
    max-width: 45px;
    max-height: 45px;
    background-image: url(http://localhost:3000/Abilities/${(props) =>
        props.theme.img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: normal;
`
const SummonerSpellDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

export default ChampionElement
