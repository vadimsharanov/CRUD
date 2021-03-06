function Postas({data, crud, redagavimoLangelis, index}) {
    return (
        <>
        <div className="postas" >
            <div className="id-container" >
            <h3 className="id" >{index + 1}</h3>
            <div className="title" >{data.title}</div>
            <div className="body" >{data.body}</div>
            </div>
            <div className="edit" >
                <button className="edit-button" onClick={()=> redagavimoLangelis(data)} >EDIT</button>
                <button className="delete-button" onClick={() => crud.delete(data.id)} >Delete</button>

            </div>

            
        </div>
        </>
    )
}

export default Postas