import React from 'react'
import Search from './Component/Search'
import Results from './Component/Results'
import { useState } from 'react';
import axios from 'axios';
import Popup from './Component/Popup';
const App = () => {
  const [state, setState] = useState(
    {
      s: "",
      results: [],
      selected: {}
    }
  )
  const apiurl = "http://www.omdbapi.com/?apikey=dfe6d885";
  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s)
        .then(({ data }) => {
          let results = data.Search;
          setState(preState => {
            return { ...preState, results: results }
          })
        })
    }
  }
  const handelInput = (e) => {
    let s = e.target.value;
    setState(preState => {
      return { ...preState, s: s }
    });
    // console.log(state.s)
  }
  const openPopup = id => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      setState(preState => {
        return { ...preState, selected: result }
      })
    })
  }

const closePopup=()=>{
  setState(preState=>{
    return {...preState,selected:{}}
  });
}



  return (
    <div className='App'>
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handelInput={handelInput} search={search} />
        <Results results={state.results} openPopup={openPopup} />
        {(typeof state.selected.Title !=="undefined")? <Popup selected={state.selected} closePopup={closePopup}/> :false}
      </main>
    </div>
  )
}

export default App

