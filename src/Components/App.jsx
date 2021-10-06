import { useEffect, useState } from "react";
import axios from "axios"
import Postas from "./Postas";
import NaujasPostas from "./NaujasPostas";


function App() {

    const [postai, setPostai] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3002/postai')
        .then(function (response) {
            console.log(response.data)
            setPostai(response.data)
        })
        .catch(function (error) {
          console.log(error);
        })
    }, [])
    
    const trinimas = (id) => {
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

    const prideti = (data) => {
        axios.post("https://jsonplaceholder.typicode.com/posts/", {data} 
        )
        .then(function (response) {
        })
        .catch(function (error) {
            console.log(error);
          })

    }
 
    return (
        <div className="main-container">
              <NaujasPostas prideti={prideti} ></NaujasPostas>

            <div className="postu-container" >
                {postai.map(postas=> <Postas key={postas.id} data={postas} crud={crud} ></Postas>  )}
            </div>
        </div>
    )
}

export default App