import React, { useEffect, useState } from "react";

function RedagavimoLangelis({id, uzdarytiLangeli, redaguoti,data}) {


    
    const [ redaguotiPosta, setRedaguotiPosta ] = ("");
    const [userId, setUserId] = useState("")
    const [title, setTitle] =   useState("")
    const [body, setBody] =     useState("")

    useEffect(() => {
        setTitle(data.title)
        setBody(data.body)
        
   
    }, [id])


    const controller = (event, inputValue) => {
        if ("userId" === inputValue) {
            setUserId(event.target.value)
        }
        else if ("title" === inputValue) {
            setTitle(event.target.value)
        }
        else if ("body" === inputValue) {
            setBody(event.target.value)
        }
    }



    const setRedaguotiInput = (e) => {
        setRedaguotiPosta(e.target.value);
        
    } 
    const postoRedagavimas = () => {
        const data = {
            userId:userId,
            title:title,
            body:body,
        }
        setTitle("");
        setBody("")
        redaguoti(data,id)
        uzdarytiLangeli()

    }
    

    
    return ( id ===0 ? null : 
        
        <div className="redagavimo-langelis"  >
            <div className="close-container" onClick={uzdarytiLangeli}>
            <div className="leftright"></div>
            <div className="rightleft"></div>
            </div>
            <span>Title</span>
            <input onChange={(e)=> controller(e,"title")} value={title} type="text" />
            <span>Body</span>
            <textarea onChange={(e)=> controller(e,"body")} value={body} type="text" />
            <div className="redagavimo-mygtukai" >
            <button onClick={postoRedagavimas} className="done-button" >Done!</button>
            {/* <button onClick={uzdarytiLangeli} className="close-button" >Close</button> */}
            </div>
        </div>
    )
}
    
    export default RedagavimoLangelis