import { CssBaseline, ThemeProvider } from '@mui/material'

import Topbar from './scenes/global/Topbar'
import { ColorModeContext, useMode } from './theme'
const App: React.FC = () => {
  const [theme, colorMode] = useMode()
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <main className='content'>
            <Topbar />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
