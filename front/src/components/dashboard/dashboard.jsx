export default function Dashboard(props) {
  const api = props.api
  
  return(
    <section className="wrapper">
      <h1>Bonjour Thomas</h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      <div className="dashboard">
        <div className="stats">
          <div>
            <h2>Activité quotidienne</h2>
          </div>
          <div>
            <h2>Durée moyenne des sessions</h2>
          </div>
          <div>
            <h2>Radar Chart</h2>
          </div>
          <div>
            <h2>Score</h2>
          </div>
        </div>
        <div className="nutrition">
          <div className="card">
            <h3>Calories</h3>
          </div>
          <div className="card">
            <h3>Protéines</h3>
          </div>
          <div className="card">
            <h3>Glucides</h3>
          </div>
          <div className="card">
            <h3>Lipides</h3>
          </div>
        </div>
      </div>
    </section>
  )
}