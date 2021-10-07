function Postas({data, crud, redagavimoLangelis, uzdarytiLangeli}) {
    return (
        <>
        <div className="postas" >
            <div className="id-container" >
            <h3 className="id" >{data.id}</h3>
            <div className="title" >{data.title}</div>
            </div>
            <div className="body" >{data.body}</div>
            <div className="edit" >
                <button  onClick={()=> redagavimoLangelis(data.id)} >EDIT</button>
                <button onClick={uzdarytiLangeli} >Close</button>
                <div className="delete-button-container" >
                <button className="delete-button" onClick={() => crud.delete(data.id)} >Delete</button>
                </div>
            </div>

            
        </div>
        </>
    )
}

export default Postas