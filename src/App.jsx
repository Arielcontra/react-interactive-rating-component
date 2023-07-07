import { Routes, Route } from 'react-router-dom'
import * as Screen from './components'
import './App.css'
import './estilos/reset.css'


const App = () => (
  <Routes>
    <Route path="/" element={<Screen.Template />}>
      <Route index element={<Screen.Home />} />
      <Route path="/scoreCheck" element={<Screen.ScoreCheck />} />
      <Route path="*" element={<Screen.NotFound />} />
    </Route>
  </Routes>
)

export default App
