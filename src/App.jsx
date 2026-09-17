import './App.css'
import About from './components/about'
import CaseStudy from './components/caseStudy'
import ClientTest from './components/clientTest'
import Home from './components/home'
import NavBar from './components/navBar'
import Service from './components/service'


function App() {

  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Service/>
      <CaseStudy/>
      <ClientTest/>
      
    </div>
  )
}

export default App
