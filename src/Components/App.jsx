import { useEffect, useState } from "react";
import axios from "axios"
import Postas from "./Postas";


function App() {

    const [postai, setPostai] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
            setPostai(response.data)
        })
        .catch(function (error) {
          console.log(error);
        })
    }, [])
    
    const trinimas = (id) => {
        console.log(id);
        axios.delete("https://jsonplaceholder.typicode.com/posts/" + id)
        .then(function (response) {
        })
        .catch(function (error) {
            console.log(error);
          })
    }

    const crud = {
        delete: trinimas,
    }
 
    return (
        <div className="postu-container" >
            {postai.map(postas=> <Postas key={postas.id} data={postas} crud={crud} ></Postas>  )}
        </div>
    )
}

export default App