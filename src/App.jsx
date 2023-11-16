import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Terms from './components/Terms/Terms';
import Privacy from './components/Privacy/Privacy';
import Single from './components/Single/SIngle';
import SingleHy from './components/SingleHy/SingleHy';





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
    <Routes>
      
    <Route path="/" element={<Layout />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/single" element={<Single />} />
      <Route path="/singlehy" element={<SingleHy />} />
     
    </Routes>
  </BrowserRouter>
 
    </>
  )
}

export default App
