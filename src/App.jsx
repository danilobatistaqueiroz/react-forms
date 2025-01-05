import './App.css'
import options from './assets/options.json'
import Radio from './components/Radio.jsx'
import React from 'react'

//*** é possível colocar os resultados no json e evitar de usar uma variável só para isso */

function App() {
  const [slide,setSlide] = React.useState(0);
  const handleClick = () => {
    if (slide >= options.length) return; 
    setSlide(s => s + 1);
  }
  const [respostas,setRespostas] = React.useState([]);
  const handleChange = (e) => {
    console.log('set',e.target.name,e.target.value);
    setRespostas(r => {
      r = r.filter(f => f.id !== e.target.name)
      if(!r) r=[];
      r.push({id:e.target.name,resposta:e.target.value,color:'red'})
      return r;
    });
  }
  const exibeResultado = () => {
    console.log('respostas',respostas);
    respostas.map(r => {
      options.forEach(o => {
        if(r.id == o.id && r.resposta == o.resposta){
          r.color = 'green'
        }
      });
    })
    return (
      <div>
        {
          respostas.map(r => (
            <p key={r.id} style={{'color':r.color}}>{r.resposta}</p>
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
