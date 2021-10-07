import React, { useState } from "react";

function RedagavimoLangelis({id}) {
    const [ redaguotiPosta, SetRedaguotiPosta ] = ("");

    const setRedaguotiInput = (e) => {
        SetRedaguotiPosta(e.target.value)
    } 
    
    
    if ( id===0) {
        return null;
    }
    
    return (
        
        <div>
            <input type="text" />
            <input type="text" />

        </div>
    )
}
    
    export default RedagavimoLangelis