import React from 'react'

function Alert(prop) {
    
    const capitalize =(word)=>{
        const lower=word.toLowerCase() 
        return lower.charAt(0).toUpperCase()+lower.slice(1)

    }

    return (
        prop.alert && <div>
            <div className={`alert alert-${prop.alert.type} alert-dismissible fade show`} role="alert">
            <strong> {capitalize( prop.alert.type)}</strong> : {prop.alert.msg}
               
            </div>
        </div>
    )
}




export default Alert
