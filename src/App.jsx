import './App.css'
import Header from './componentes/header'
import ScorePicker from './componentes/score-picker'
import ButonSubmit from './componentes/butonSubmit'
import ThankYouImage from './componentes/thankYouImage'
import DynamicText from './componentes/dynamicText'
function App() {
  

  return (
    <>
      <div className="father">
        <div className="main" id="index" >
            <Header />
            <ScorePicker />
            <ButonSubmit />
        </div>
        <div className="main" id="success" >
            <ThankYouImage />
            <DynamicText />
        </div>
      </div>
    </>
  )
}

export default App
