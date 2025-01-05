import './App.css'
import options from './assets/options.json'
import Radio from './components/Radio.jsx'
import React from 'react'

function App() {
  const [slide,setSlide] = React.useState(0);
  const handleClick = () => {
    if (slide >= options.length) return; 
    setSlide(s => s + 1);
  }
  const handleChange = (e) => {
    options.map(o => {
      if(o.id === e.target.name){
        if(o.resposta === e.target.value) {
          o.resultado = "green";
        }
      }
    });
  }
  const exibeResultado = () => {
    return (
      <div>
        {
          options.map(r => (
            <p key={r.id} style={{'color':r.resultado?r.resultado:'red'}}>{r.resposta}</p>
          ))
        }
      </div>
    )
  }
  return (
    <>
      {
        options.map((option, index) => (
          <Radio key={option.id} id={option.id} pergunta={option.pergunta} active={slide==index} options={option.options} onChange={handleChange} />
        ))
      }
      {
        (slide<4?
          <button onClick={handleClick}>Próxima</button>
          :
          <div>
          {exibeResultado()}
          </div>
        )
      }
    </>
  )
}

export default App
