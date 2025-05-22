import { useEffect, useState } from 'react'
import './index.css'

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/books')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setBooks(data.payload)
      })
  }, [])

  return (
    <>
      {books.map(book => {
        return (
          <div key={book._id}>
            <h3>{book.title}</h3>
            <a href={`http://localhost:3000/books/${book._id}`}>Ver detalle</a>
          </div>
        )
      })}
    </>
  )
}

export default App
