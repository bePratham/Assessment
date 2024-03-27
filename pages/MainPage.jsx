import React from 'react'
import AboveCards from './AboveCards'
import BelowCards from './BelowCards'
const MainPage = (currentTheme) => {
  return (
    <div>
        <AboveCards currentTheme={currentTheme}/>
        <BelowCards currentTheme={currentTheme}/>
    </div>
  )
}

export default MainPage