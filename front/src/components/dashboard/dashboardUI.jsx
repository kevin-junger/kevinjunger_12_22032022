import DailyChart from "./stats/dailyChart"
import GoalChart from "./stats/goalChart"
import PerformanceChart from "./stats/performanceChart"
import SessionsChart from "./stats/sessionsChart"

export default function DashboardUI(props) {
  const api = props.api
  
  return(
    <section className="wrapper">
      <h1>Bonjour Thomas</h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      <div className="dashboard">
        <div className="stats">
          <DailyChart api={api} />
          <SessionsChart api={api} />
          <PerformanceChart api={api} />
          <GoalChart api={api} />
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
