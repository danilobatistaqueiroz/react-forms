import { useState } from 'react'
import './App.css'
import options from './assets/options.json'

function App() {
  const [count, setCount] = useState(0)
  {
    return (
      <div>ola
      {
        options.map((option) => {
          return (
            <>
              <fieldset style={{padding: '2rem',marginBottom: '1rem',border: '2px solid #eee',}}>
                <legend>{option.pergunta}</legend>
                  {
                    option.options.map((opt) => (
                      <label key={opt} style={{ marginBottom: '1rem', fontFamily: 'monospace' }}>
                        <input id={option.id} type="radio" value={opt} />
                        {opt}
                      </label>

                    ))
                  }
              </fieldset>
            </>
          )
        })
      }
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    )
  }
}

export default App
