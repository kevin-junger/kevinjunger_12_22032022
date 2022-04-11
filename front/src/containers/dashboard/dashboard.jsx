import { useParams } from "react-router-dom"
import GetUserApi from "./getUserApi"
import { Wrapper, Dashboard, Stats, Nutrition } from "./dashboardUI"
import Greetings from "../../components/greetings/grettings"
import Daily from "../../components/charts/daily/daily"
import Goal from "../../components/charts/goal/goal"
import Performance from "../../components/charts/performance/performance"
import Sessions from "../../components/charts/sessions/sessions"
import NutritionChart from "../../components/nutrition/nutritionChart"

export default function DashboardUI() {
  let params = useParams()
  const api = new GetUserApi(params.userId)
  
  return(
    <Wrapper>
      <Greetings api={api} />
      <Dashboard>
        <Stats>
          <Daily api={api} />
          <Sessions api={api} />
          <Performance api={api} />
          <Goal api={api} />
        </Stats>
        <Nutrition>
          <NutritionChart api={api} />
        </Nutrition>
      </Dashboard>
    </Wrapper>
  )
}
