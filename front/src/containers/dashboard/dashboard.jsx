import { useParams } from "react-router-dom"
import GetUserApi from "./getUserApi"
import { Wrapper, Dashboard, Stats, Aside } from "./dashboardUI"
import Greetings from "../../components/greetings/greetings"
import Daily from "../../components/charts/daily/daily"
import Goal from "../../components/charts/goal/goal"
import Performance from "../../components/charts/performance/performance"
import Sessions from "../../components/charts/sessions/sessions"
import Nutrition from "../../components/charts/nutrition/nutrition"

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
        <Aside>
          <Nutrition api={api} />
        </Aside>
      </Dashboard>
    </Wrapper>
  )
}
