import React, { Fragment } from 'react'

import { GlobalStyle } from './globalStyles'

import ChampionCooldownComponent from './components/ChampionCooldownComponent'
import ReactionComponent from './components/ReactionComponent'



function App() {
  return (
      //<ThemeProvider theme={theme}>
      <Fragment>
          <GlobalStyle />
          <ChampionCooldownComponent></ChampionCooldownComponent>
          <ReactionComponent></ReactionComponent>
      </Fragment>
      // </ThemeProvider>
  )
}

export default App
