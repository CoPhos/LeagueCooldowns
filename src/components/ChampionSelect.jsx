import React, { Fragment, useState } from 'react'
import styled from 'styled-components'

import ChampionElement from './ChampionElement'

import {data} from '../../assets/championNames'

function ChampionSelect() {
    let cooldownInitialValues = {
        q: 0,
        w: 0,
        e: 0,
        r: 0,
        d: 0,
        f: 0,
        frequency: 'low',
    }
    const [championSelected, setChampionSelected] = useState('placeholder')
    const [summonerSpell, setSummonerSpell] = useState('Heal')
    const [cooldownValues, setCooldownValues] = useState(cooldownInitialValues)
    const [championList, setChampionList] = useState([])
    const [start, setStart] = useState(false)

    function listAllChampionIcons(championSelected, setState) {
        return (
            <ChampionIconContainer
                key={championSelected + 1}
                theme={{
                    img: championSelected + '.png',
                }}
                onClick={() => setState(championSelected)}
            ></ChampionIconContainer>
        )
    }

    function championDetails(){
        return (
            <Fragment>
                <ChampionDetailsIcon
                    theme={{
                        img: championSelected + '.png',
                    }}
                ></ChampionDetailsIcon>
                <ChampionAbilititesContainer>
                    {listAllChampionAbilities()}
                </ChampionAbilititesContainer>
            </Fragment>
        )
    }

    function listAllChampionAbilities() {
        return (
            <Fragment>
                <div>
                    <ChampionAbilitiesContainer
                        key={championSelected + 1}
                        theme={{
                            img: championSelected + 'Q.png',
                        }}
                    ></ChampionAbilitiesContainer>
                    <CooldownInput
                        type="number"
                        id="cooldownQ"
                        name="cooldownQ"
                        min="0"
                        value={cooldownValues.q}
                        onChange={(e) =>
                            setCooldownValues({ ...cooldownValues, q: e.currentTarget.value })
                        }
                    />
                </div>
                <div>
                    <ChampionAbilitiesContainer
                        key={championSelected + 2}
                        theme={{
                            img: championSelected + 'W.png',
                        }}
                    ></ChampionAbilitiesContainer>
                    <CooldownInput
                        type="number"
                        id="cooldownW"
                        name="cooldownW"
                        min="0"
                        value={cooldownValues.w}
                        onChange={(e) =>
                            setCooldownValues({ ...cooldownValues, w: e.currentTarget.value })
                        }
                    />
                </div>
                <div>
                    <ChampionAbilitiesContainer
                        key={championSelected + 3}
                        theme={{
                            img: championSelected + 'E.png',
                        }}
                    ></ChampionAbilitiesContainer>
                    <CooldownInput
                        type="number"
                        id="cooldownE"
                        name="cooldownE"
                        min="0"
                        value={cooldownValues.e}
                        onChange={(event) =>
                            setCooldownValues({
                                ...cooldownValues,
                                e: event.currentTarget.value,
                            })
                        }
                    />
                </div>
                <div>
                    <ChampionAbilitiesContainer
                        key={championSelected + 4}
                        theme={{
                            img: championSelected + 'R.png',
                        }}
                    ></ChampionAbilitiesContainer>
                    <CooldownInput
                        type="number"
                        id="cooldownR"
                        name="cooldownR"
                        min="0"
                        value={cooldownValues.r}
                        onChange={(e) =>
                            setCooldownValues({ ...cooldownValues, r: e.currentTarget.value })
                        }
                    />
                </div>
                <SummonerSpellDiv>
                    <ChampionAbilitiesContainer
                        key={championSelected + 5}
                        theme={{
                            img: summonerSpell + '.webp',
                        }}
                    ></ChampionAbilitiesContainer>

                    <select
                        id="summoners"
                        onChange={(e) =>
                            setSummonerSpell(e.currentTarget.value)
                        }
                        value={summonerSpell}
                    >
                        <option value="Heal">Heal</option>
                        <option value="Exhaust">Exhaust</option>
                        <option value="Cleanse">Cleanse</option>
                    </select>
                    <CooldownInput
                        type="number"
                        id="cooldownD"
                        name="cooldownD"
                        min="0"
                        value={cooldownValues.d}
                        onChange={(e) =>
                            setCooldownValues({ ...cooldownValues, d: e.currentTarget.value })
                        }
                    />
                </SummonerSpellDiv>
                <div>
                    <ChampionAbilitiesContainer
                        key={championSelected + 6}
                        theme={{
                            img: 'Flash.webp',
                        }}
                    ></ChampionAbilitiesContainer>
                    <CooldownInput
                        type="number"
                        id="cooldownF"
                        name="cooldownF"
                        min="0"
                        value={cooldownValues.f}
                        onChange={(e) =>
                            setCooldownValues({ ...cooldownValues, f: e.currentTarget.value })
                        }
                    />
                </div>
            </Fragment>
        )
    }

    function addChampion(e){
        if(championSelected == 'placeholder'){
            return
        }else{
            setSummonerSpell('Heal')
            setCooldownValues(cooldownInitialValues)
            setChampionSelected('placeholder')
            setChampionList([
                ...championList,
                <ChampionElement
                    key={championSelected}
                    championSelected={championSelected}
                    summonerSpell={summonerSpell}
                    start={start}
                    cooldownValues={cooldownValues}
                ></ChampionElement>,
            ])
        }
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
                    {console.log(start)}
                </ChampionDetailsWrapper>
                <AddChampionDiv>
                    <label htmlFor="frequency">
                        Choose abilities usage frequency:
                    </label>
                    <select
                        id="frequency"
                        onChange={(e) =>
                            setCooldownValues({
                                ...cooldownValues,
                                frequency: e.currentTarget.value,
                            })
                        }
                        value={cooldownValues.frequency}
                    >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                    <StyledButton
                        className="button1"
                        onClick={(e) => addChampion(e)}
                        theme={{ color: '#008cba' }}
                    >
                        Add champion
                    </StyledButton>
                </AddChampionDiv>
            </ChampionParametersWrapper>
            <ListDiv>
                {championList}
                <StartResetDiv>
                    <StyledButton
                        className="button1"
                        onClick={(e) => addChampion(e)}
                        theme={{ color: '#FF0000' }}
                    >
                        Reset
                    </StyledButton>
                    <StyledButton
                        className="button1"
                        onClick={(e) => setStart(true)}
                        theme={{ color: '#008cba' }}
                    >
                        Start
                    </StyledButton>
                </StartResetDiv>
            </ListDiv>
        </Fragment>
    )
}

const ListDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`
const StartResetDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    justify-content: space-evenly;
    align-items: center;
`

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
    
    justify-content: center;
    align-items: flex-end;
`
const ChampionDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 16px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`

const ChampionDetailsContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    justify-content: space-evenly;
    align-items: flex-start;
`
const StyledButton = styled.button`
    background-color: white;
    color: black;
    border: 2px solid ${(props) => props.theme.color};
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    &: hover {
        background-color: ${(props) => props.theme.color};
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
    height: 200px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
`
const CooldownInput = styled.input`
    width: 85px;
`

const SummonerSpellDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

const AddChampionDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify:content: start;
    gap: 16px;
`



export default ChampionSelect