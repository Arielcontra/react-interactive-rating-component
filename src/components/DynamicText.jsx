import { useContext } from 'react'
import { ConfigContext } from '../ConfigProvider'


const DynamicText = () => {

    const { value } = useContext(ConfigContext)

    return(
        <>
            <div className="dynamicText" id="dynamicText">
                <p>You selected { value } out of 5</p>
            </div>
            <div className="text2">
                <h1>Thank you!</h1>
                <p className= "p2">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
            </div>
        </>
    )
}

export default DynamicText