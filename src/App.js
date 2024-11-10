import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Discover from './components/Discover'
import Services from './components/Service'
import Footer from './components/Footer'
import './App.css'
import Home from './components/Home'

const App = () => (
  <div className="app-container">
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/discover" element={<Discover />} />
        <Route exact path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  </div>
)

export default App
