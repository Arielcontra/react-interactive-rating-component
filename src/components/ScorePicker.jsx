import { useContext } from 'react'
import { ConfigContext } from '../ConfigProvider'

function ScorePicker(){

    const { value, setValue } = useContext(ConfigContext)
    
    const handleClick = buttonId => {
        setValue(buttonId)
    }

    return(
        <>
            <div className="btn">
                <button onClick={() =>handleClick(1)} className={value === 1 ? 'selected' : 'button'}>
                    1
                </button>
                <button onClick={() =>handleClick(2)} className={value === 2 ? 'selected' : 'button'}>
                    2
                </button>
                <button onClick={() =>handleClick(3)} className={value === 3 ? 'selected' : 'button'}>
                    3
                </button>
                <button onClick={() =>handleClick(4)} className={value === 4 ? 'selected' : 'button'}>
                    4
                </button>
                <button onClick={() =>handleClick(5)} className={value === 5 ? 'selected' : 'button'}>
                    5
                </button>
            </div>
        </>
    )
}

export default ScorePicker