import React, { Fragment } from 'react'

import { GlobalStyle } from './globalStyles'

import ChampionCooldownComponent from './components/ChampionCooldownComponent'



function App() {
  return (
      //<ThemeProvider theme={theme}>
      <Fragment>
          <GlobalStyle />
          <ChampionCooldownComponent></ChampionCooldownComponent>
      </Fragment>
      // </ThemeProvider>
  )
}

export default App
