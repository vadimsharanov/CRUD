import { useEffect, useRef, useState } from "react";
import axios from "axios"
import Postas from "./Postas";
import NaujasPostas from "./NaujasPostas";
import RedagavimoLangelis from "./RedagavimoLangelis";


function App() {

    const [postai, setPostai] = useState([]);
    const [postuKeitimoLaikas, setPostuKeitimoLaikas] = useState(Date.now());
    const [open, setOpen] = useState(0);
    const modalPost = useRef({title:"", body:""})

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
    const redaguoti = (data,id) => {
        axios.put("http://localhost:3002/postai/" + id, {data} 
        )
        .then(function (response) {
            setPostuKeitimoLaikas(Date.now())
        })
        .catch(function (error) {
            console.log(error);
          })
    }

    const openModal = (data) => {
        modalPost.current = {title:data.title, body:data.body}
        setOpen(data.id);
    }
    const closeModal = () => {
        setOpen(0);
    }

    return (
    <>
            <RedagavimoLangelis id={open} redaguoti={redaguoti} uzdarytiLangeli={closeModal} data={modalPost.current}  ></RedagavimoLangelis>
            <NaujasPostas   prideti={prideti} ></NaujasPostas>
            <div className="postu-container" >
                {postai.map(postas=>  <Postas redagavimoLangelis={openModal}  key={postas.id} data={postas} crud={crud} ></Postas>  )}
            </div>
    </>

    )
}

export default App