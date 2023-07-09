import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { ConfigContext } from '../ConfigProvider'

function ButtonSubmit (){
    const navigate = useNavigate()
    const { value } = useContext(ConfigContext)
    function handleSubmit(){
        if (value){
        navigate("/scoreCheck")
        }
    }
    return(
        <div className="submit">
        <button className="btn--submit" onClick={handleSubmit}>SUBMIT</button>
        </div>
    )
}

export default ButtonSubmit