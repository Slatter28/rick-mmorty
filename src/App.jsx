import { useState } from "react";
import "./App.css";
import Locations from "./components/Locations";
import { useEffect } from "react";
import axios from "axios";
import CardResident from "./components/CardResident";




function App() {

  const [location, setLocation] = useState()
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    let numberLocation
    if (searchInput === '') {
      numberLocation = Math.floor(Math.random() * (126 - 1) + 1);
    } else {
      numberLocation = searchInput
    }

    const URL = `https://rickandmortyapi.com/api/location/${numberLocation}`
    axios.get(URL)
      .then(res => setLocation(res.data))
      .catch(err => console.log(err))

  }, [searchInput])


  const handleSubmit = e => {
    e.preventDefault()
    setSearchInput(e.target.search.value)
  }
  // console.log(location?.residents)
  return (
    <div className="App">
      <div className="App__header">
        <div className="App_fondo">
          <img src="../img/fondo.png" alt="sss" />
        </div>
        <div className="App__searchs">
          <div className="logo">
            <img src="../img/logo.png" alt="sss" />
          </div>
          <form onSubmit={handleSubmit} className="search-bar" >
            <input type="text" id="search"  placeholder="search id 1 to 126"/>
            <button><img src="../img/search.png" alt="search" /></button>
          </form>
          <Locations location={location} />
        </div>

      </div>

      <div className="CardResidents">
        {
          location?.residents.map((url) => (
            // <CardResident key={url} url={url} />
            <CardResident key={url} url={url} />
          ))
        }
      </div>


    </div>
  );
}

export default App;