import { Routes, Route } from 'react-router-dom'
import {Home, NotFound, ScoreCheck, Template } from './components/index'
import './App.css'
import './estilos/reset.css'


const App = () => (
  <Routes>
    <Route path="/" element={<Template />}>
      <Route index element={<Home />} />
      <Route path="/scoreCheck" element={<ScoreCheck />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
)

export default App
