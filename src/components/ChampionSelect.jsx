import React, { Fragment, useState } from 'react'
import styled from 'styled-components'

import {data} from '../../assets/championNames'

function ChampionSelect() {
    const [championSelected, setChampionSelected] = useState('placeholder')

    function championDetails(){
        return (
            <Fragment>
                <ChampionDetailsIcon
                    theme={{
                        img: championSelected + '.png',
                    }}
                ></ChampionDetailsIcon>
                <ChampionAbilititesContainer>
                    {listAllChampionAbilities(championSelected)}
                </ChampionAbilititesContainer>
            </Fragment>
        )
    }

    return (
        <Fragment>
            <ChampionsWrapper>
                {data.championNames.map((championName) => {
                    return listAllChampionIcons(
                        championName,
                        setChampionSelected
                    )
                })}
            </ChampionsWrapper>
            <ChampionParametersWrapper>
                <ChampionDetailsWrapper>
                    <ChampionDetailsContainer>
                        {championDetails()}
                    </ChampionDetailsContainer>
                </ChampionDetailsWrapper>
                <AddButton className="button1">Add champion</AddButton>
            </ChampionParametersWrapper>
        </Fragment>
    )
}

const ChampionsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    min-width: 100%;
    min-height: 35vw;
    max-width: 100%;
    max-height: 35vw;
    overflow-y: scroll;
    gap: 8px;
    justify-content: center;
`
const ChampionIconContainer = styled.button`
    min-width: 85px;
    min-height: 85px;
    max-width: 85px;
    max-height: 85px;
    background-image: url(http://localhost:3000/Icons/${(props) => props.theme.img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
`

const ChampionAbilitiesContainer = styled.div`
    min-width: 85px;
    min-height: 85px;
    max-width: 85px;
    max-height: 85px;
    background-image: url(http://localhost:3000/Abilities/${(props) =>
        props.theme.img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: normal;
`

const ChampionParametersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 16px;
    width: 70%;
    height: 300px;
    justify-content: center;
    align-items: flex-end;
    .button1 {
        background-color: white;
        color: black;
        border: 2px solid #008cba;
    }
`
const ChampionDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 16px;
    width: 100%;
    height: 250px;
    justify-content: space-between;
    align-items: center;
`

const ChampionDetailsContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
`
const AddButton = styled.button`
    background-color: #008cba;
    border: none;
    color: white;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    &: hover {
        background-color: #008cba;
        color: white;
    }
`

const ChampionDetailsIcon = styled.div`
    min-width: 85px;
    min-height: 85px;
    max-width: 85px;
    max-height: 85px;
    background-image: url(http://localhost:3000/Icons/${(props) =>
        props.theme.img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: normal;
`
const ChampionAbilititesContainer = styled.div`
    width: 70%
    height: 180px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
`

function listAllChampionIcons(championName, setState) {
    return (
        <ChampionIconContainer
            key={championName + 1}
            theme={{
                img: championName + '.png',
            }}
            onClick={() => setState(championName)}
        ></ChampionIconContainer>
    )
}

function listAllChampionAbilities(championName) {
    return (
        <Fragment>
            <ChampionAbilitiesContainer
                key={championName + 1}
                theme={{
                    img: championName + 'Q.png',
                }}
            ></ChampionAbilitiesContainer>
            <ChampionAbilitiesContainer
                key={championName + 2}
                theme={{
                    img: championName + 'W.png',
                }}
            ></ChampionAbilitiesContainer>
            <ChampionAbilitiesContainer
                key={championName + 3}
                theme={{
                    img: championName + 'E.png',
                }}
            ></ChampionAbilitiesContainer>
            <ChampionAbilitiesContainer
                key={championName + 4}
                theme={{
                    img: championName + 'R.png',
                }}
            ></ChampionAbilitiesContainer>
        </Fragment>
    )           
        
}



export default ChampionSelect