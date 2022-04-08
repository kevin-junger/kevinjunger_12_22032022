import { Wrapper, Dashboard, Stats, Nutrition } from "./dashboardUIStyledComponents"

import Greetings from "../../components/grettings"
import DailyChart from "../../components/stats/dailyChart"
import GoalChart from "../../components/stats/goalChart"
import PerformanceChart from "../../components/stats/performanceChart"
import SessionsChart from "../../components/stats/sessionsChart"
import NutritionChart from "../../components/nutrition/nutritionChart"

export const UI = ({ api }) => {
  if (api) {
    return(
      <Wrapper>
      <Greetings api={api} />
      <Dashboard>
        <Stats>
          <DailyChart api={api} />
          <SessionsChart api={api} />
          <PerformanceChart api={api} />
          <GoalChart api={api} />
        </Stats>
        <Nutrition>
          <NutritionChart api={api} />
        </Nutrition>
      </Dashboard>
    </Wrapper>
    )
  }
}