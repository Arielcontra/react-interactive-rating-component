import { useNavigate } from 'react-router-dom'

function ButtonSubmit (){
    const navigate = useNavigate()
    function handleSubmit(){
        navigate("/scoreCheck")
    }
    return(
        <div className="submit">
        <button className="btn--submit" onClick={handleSubmit}>SUBMIT</button>
        </div>
    )
}

export default ButtonSubmit