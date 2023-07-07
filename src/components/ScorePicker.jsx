import {useState} from "react"
function ScorePicker(){
    const [selectedButton, setSelectedButton] = useState(null)
    const handleClick = buttonId => {
        setSelectedButton(buttonId)
    }
    return(
        <>
            <div className="btn">
                <button onClick={() =>handleClick(1)} className={selectedButton === 1 ? 'selected' : 'button'}>1</button>
                <button onClick={() =>handleClick(2)} className={selectedButton === 2 ? 'selected' : 'button'}>2</button>
                <button onClick={() =>handleClick(3)} className={selectedButton === 3 ? 'selected' : 'button'}>3</button>
                <button onClick={() =>handleClick(4)} className={selectedButton === 4 ? 'selected' : 'button'}>4</button>
                <button onClick={() =>handleClick(5)} className={selectedButton === 5 ? 'selected' : 'button'}>5</button>
            </div>
        </>
    )
}

export default ScorePicker
