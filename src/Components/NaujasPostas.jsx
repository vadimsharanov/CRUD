import { useState } from "react"

function NaujasPostas({prideti}) {


        const [userId, setUserId] = useState("")
        const [title, setTitle] =   useState("")
        const [body, setBody] =     useState("")

        const controller = (event, inputValue) => {
            console.log(inputValue)
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

        const pridetiNauja = () => {
            const data = {
                userId:userId,
                title:title,
                body:body,

            }
            prideti(data)
        }

    return (
        <div className="naujas-postas-container"  >
        <div className="form">
                        <span className="input-label" >User ID</span>
                        <div className="form-row">
                           <input onChange={(e)=> controller(e,"userId")} value={userId} type="text"/>
                        </div>
                        <span className="input-label" >Title</span>
                        <div className="form-row">
                           <input onChange={(e)=> controller(e,"title")} value={title} type="text" />
                        </div>
                        <span className="input-label" >Body</span>
                        <div className="form-row">
                            <textarea onChange={(e)=> controller(e,"body")} value={body} placeholder="Message..."></textarea>
                        </div>
                        <div className="form-row">
                            <button onClick={pridetiNauja} className="save" >Add!</button>
                        </div>
                    </div>
                    </div>
    )
}

export default NaujasPostas 