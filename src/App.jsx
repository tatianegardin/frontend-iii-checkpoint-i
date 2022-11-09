
// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente

import { useState } from "react"
import { Card } from "./Card"
import "./style.scss"

function App() {
  // Aqui você irá criar os Estados para manipular os Inputs
  const [inputName, setInputName] = useState("")
  const [inputColor, setInputColor] = useState("")
  const [allColors, setAllColors] = useState([])
  const [errorMessage, setErrorMessage] = useState("")
  const [errorClass, setErrorClass] = useState(false)



  function registerColor(event) {
    event.preventDefault()
    if(inputIsValid()){
      let color = {
        name: inputName.trim(),
        color: inputColor.trim()
      }
      setAllColors([...allColors, color])
      setErrorMessage("")
      setErrorClass(false)
    } else {
      setErrorMessage("Por favor, verifique os dados inseridos no formulário!")
      setErrorClass(true)
    }
  }

  function inputIsValid(){
    let color = inputColor.trim()
    let name = inputName.trim()
    let isValid = false

    if(color.includes("#") && color.length > 5 && name.length > 2){
      isValid = true
    }

    return isValid
  }



  return (
    <main className="App">
      <div className="form" >
        <form onSubmit={ event => registerColor(event)} >
          <fieldset className={errorClass ? 'error' : ''} >
            <h1 >Adicionar nova cor</h1>
            <section className="inputs">
              <div>
                <label htmlFor="name">Nome:</label>
                <input id="name" type="text" name="name" value= {inputName} onChange= { event => setInputName(event.target.value) } ></input>
              </div>
              <div>
                <label htmlFor="color">Cor:</label>
                <input id="color" type="text" name="color" value= {inputColor} onChange= { event => setInputColor(event.target.value) }  ></input>
              </div>
            </section>
            <button type="submit">Enviar</button>
            <p>{errorMessage}</p>
            </fieldset>

        </form>
      </div>
      <section className="section-cards">
        <h1>Cores favoritas</h1>
        <div className="cards">
          { allColors.map(color => {
              return (<Card card = {color}/>) }
            ) }
        </div>
      </section>
    </main>
  )
}

export default App