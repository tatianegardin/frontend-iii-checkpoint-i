//Este componente deverá receber dados por Props e mostrar as Informações em Tela

export function Card (props) {
  return (
    <div className = "card" style ={{backgroundColor:`${props.card.color}`}}>
      <div className= "descritpion-card">
        <p>{props.card.name}</p>
        <h1 style ={{backgroundColor:`${props.card.color}`}}>{props.card.color}</h1>
      </div>
    </div>
  )
}