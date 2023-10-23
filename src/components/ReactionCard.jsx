import React from 'react'
import styled from 'styled-components'

function ReactionCard({image, sizes, display, setDisplay, interval, number}) {
    
  return (
      <ChampionAbilitiesContainer
          theme={{
              img: image,
              size: sizes,
          }}
      ></ChampionAbilitiesContainer>
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

export default ReactionCard