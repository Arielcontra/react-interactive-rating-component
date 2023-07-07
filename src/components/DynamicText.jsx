function DynamicText(){
    return(
        <>
            <div className="dynamicText" id="dynamicText">
                <p>You selected <span id="select"></span> out of 5</p>
            </div>
            <div className="text2">
                <h1>Thank you!</h1>
                <p className= "p2">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
            </div>
        </>
    )
}
export default DynamicText