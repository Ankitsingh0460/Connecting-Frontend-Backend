import axios from "axios";
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    axios.get("/api/quotes")
      .then((response) => {
        setQuotes(response.data)
      })
      .catch((error) => {
        console.log(error)
      })


  })


  return (
    <>
      <h1>Daily Quotes Page</h1>
      <p>Quotes :{quotes.length}</p>

      {quotes.map((quote) => (
        <div key={quote.id}>
          <h2>{quote.author}</h2>
          <h3>{quote.quote}</h3>



        </div>

      ))}

    </>
  )
}

export default App
