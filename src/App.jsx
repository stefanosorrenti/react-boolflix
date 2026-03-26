import AppHeader from "./components/AppHeader"
import AppMain from "./components/AppMain"
import { GlobalProvider } from "./contexts/GlobalContext"

function App() {


  return (
    <GlobalProvider>

      <AppHeader />
      <AppMain />

    </GlobalProvider>
  )
}

export default App
