import React, { Fragment, useState } from 'react'

import styled from 'styled-components'

import ChampionAbility from './ChampionAbility'

function ChampionElement({
    championSelected,
    summonerSpell,
    
    cooldownValues,
}) {
    
    return (
        <ChampionDetailsContainer>
            <ChampionDetailsIcon
                theme={{
                    img: championSelected + '.png',
                }}
            ></ChampionDetailsIcon>
            <ChampionAbilititesContainer>
                <Fragment>
                    <ChampionAbility
                        image={championSelected + 'Q.png'}
                        cooldownValue={cooldownValues.q}
                        sizes={'45px'}
                    ></ChampionAbility>
                    <ChampionAbility
                        image={championSelected + 'W.png'}
                        cooldownValue={cooldownValues.w}
                        sizes={'45px'}
                    ></ChampionAbility>
                    <ChampionAbility
                        image={championSelected + 'E.png'}
                        cooldownValue={cooldownValues.e}
                        sizes={'45px'}
                    ></ChampionAbility>
                    <ChampionAbility
                        image={championSelected + 'R.png'}
                        cooldownValue={cooldownValues.r}
                        sizes={'45px'}
                    ></ChampionAbility>
                    <ChampionAbility
                        image={summonerSpell + '.webp'}
                        cooldownValue={cooldownValues.d}
                        sizes={'45px'}
                    ></ChampionAbility>
                    <ChampionAbility
                        image={'Flash.webp'}
                        cooldownValue={cooldownValues.f}
                        sizes={'45px'}
                    ></ChampionAbility>
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
const SummonerSpellDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

export default ChampionElement
