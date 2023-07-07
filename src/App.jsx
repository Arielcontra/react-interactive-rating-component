import { Routes, Route } from 'react-router-dom'
import * as Screen from './components'
import './App.css'


const App = () => (
  <Routes>
    <Route path="/" element={<Screen.Template />}>
      <Route index element={<Screen.Home />} />
      <Route path="score-check" element={<Screen.ScoreCheck />} />
      <Route path="*" element={<Screen.NotFound />} />
    </Route>
  </Routes>
)

export default App
