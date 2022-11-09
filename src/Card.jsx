//Este componente deverá receber dados por Props e mostrar as Informações em Tela

export function Card (props) {
  return (
    <div className = "card" style ={{backgroundColor:`${props.card.color}`}}>
        <h2 style ={{backgroundColor:`${props.card.color}`}}>{props.card.name}</h2>
    </div>
  )
}