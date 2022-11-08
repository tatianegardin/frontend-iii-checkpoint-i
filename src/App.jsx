
// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente

import { useState } from "react"
import { Card } from "./Card"
import "./style.scss"

function App() {
  // Aqui você irá criar os Estados para manipular os Inputs
  const [inputName, setInputName] = useState("")
  const [inputColor, setInputColor] = useState("")
  const [allColors, setAllColors] = useState([])



  function registerColor(event) {
    event.preventDefault()
    let color = {
      name: inputName,
      color: inputColor
    }
    console.log(color)

    setAllColors([...allColors, color])

    console.log(allColors)
  }

  return (
    <main className="App">
      <div className="form">
        <form onSubmit={ event => registerColor(event)}>
          <h1>Adicionar nova cor</h1>
          <div>
            <label htmlFor="name">Nome</label>
            <input id="name" type="text" name="cor" value= {inputName} onChange= { event => setInputName(event.target.value) } ></input>
          </div>
          <div>
            <label htmlFor="color">Cor</label>
            <input id="color" type="text" name="cor" value= {inputColor} onChange= { event => setInputColor(event.target.value) }  ></input>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
      <section className="cards">
        <h1>Cores favoritas</h1>
        { allColors.map(color => {
            return (<Card card = {color}/>) }
          ) }
      </section>
    </main>
  )
}

export default App