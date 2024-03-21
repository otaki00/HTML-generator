import './App.css'
import AddElementSection from './components/sections/AddElementsSection/AddElementSection'
import { ComponentProvider } from './context/componentContext'

function App() {

  return (
    <>
    <ComponentProvider>
      <AddElementSection />
    </ComponentProvider>
    </>
  )
}

export default App
