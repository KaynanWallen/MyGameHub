import { useState } from 'react'
import ContentLeft from './components/ContentLeft'
import GameList from './components/GameList'
import GameUser from './components/GamesUser'
import Header from './components/Header'
import MainBanner from './components/MainBanner'
import Social from './components/Social'
import { StyledApp } from './styled'
import { Titleh3 } from './styles/typography'
import SocialMsg from './components/SocialMsg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <StyledApp className='App'>
      <ContentLeft />
      <div className='AllContent'>
        <Header />
        <div className='Content'>
          <div className='MainContent'>
            <MainBanner />
            <Titleh3>Os Mais Jogados</Titleh3>
            <GameList />
            <GameUser />
          </div>
          <div className='Socialall'>
            <Social />
            <SocialMsg />
          </div>
        </div>
      </div>
    </StyledApp>
  )
}

export default App
