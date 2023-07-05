import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import ScoreCheck from './ScoreCheck'

const NotFound = () => (<h1>Not found!😒</h1>)

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
      <Route path="ScoreCheck" element={<ScoreCheck />} />
      <Route path="*" element={<NotFound />} />
    {/* </Route> */}
  </Routes>
)

export default App
