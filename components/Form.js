import React, {useState} from 'react';

function Form({location, setLocation}){
    const[typedLocation, setTypedLocation] = useState("");
    function handleSubmit(e){
        e.preventDefault()
        setLocation(typedLocation);
        setTypedLocation("");
    }

    return(
        <div className='form'>
           <form onSubmit={handleSubmit}>
            <label  className="City">
            <input type = "text" value={typedLocation} onChange={(event)=>setTypedLocation(event.target.value)}/>
            </label>
                <button type ="submit">Submit
                </button>
            
            </form> 
        </div>
    )
}

module.exports=Form;