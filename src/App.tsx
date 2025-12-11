import Parent from './components/Parent'
import './App.css'
import CountProvider from './providers/CountProvider'

function App() {

  return (
    <>
    <CountProvider>
      <Parent/>
    </CountProvider>
    </>
  )
}

export default App
