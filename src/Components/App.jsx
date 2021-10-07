import { useEffect, useState } from "react";
import axios from "axios"
import Postas from "./Postas";
import NaujasPostas from "./NaujasPostas";


function App() {

    const [postai, setPostai] = useState([]);
    const [postuKeitimoLaikas, setPostuKeitimoLaikas] = useState(Date.now());

    useEffect(() => {
        axios.get('http://localhost:3002/postai')
        .then(function (response) {
            setPostai(response.data)
        })
        .catch(function (error) {
          console.log(error);
        })
    }, [postuKeitimoLaikas])
    
    const trinimas = (id) => {
        axios.delete("http://localhost:3002/postai/" + id)
        .then(function (response) {
        setPostuKeitimoLaikas(Date.now())    
        })
        .catch(function (error) {
            console.log(error);
          })
    }

    const crud = {
        delete: trinimas,
    }

    const prideti = (data) => {
        axios.post("http://localhost:3002/postai/", {data} 
        )
        .then(function (response) {
            setPostuKeitimoLaikas(Date.now())
        })
        .catch(function (error) {
            console.log(error);
          })

    }
 
    return (
    <>
              <NaujasPostas prideti={prideti} ></NaujasPostas>

            <div className="postu-container" >
                {postai.map(postas=> <Postas key={postas.id} data={postas} crud={crud} ></Postas>  )}
            </div>
    </>

    )
}

export default App