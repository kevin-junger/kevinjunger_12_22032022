import Greetings from "./grettings"
import DailyChart from "./stats/dailyChart"
import GoalChart from "./stats/goalChart"
import PerformanceChart from "./stats/performanceChart"
import SessionsChart from "./stats/sessionsChart"
import NutritionChart from "./nutrition/nutritionChart"
import Api from "../Api"
import styled from "styled-components"

const Wrapper = styled.section`
  width: calc(100vw - 150px);
  height: calc(100vh - 120px);
  overflow: hidden;
`

const Dashboard = styled.div`
  margin: 2rem;
  display: grid;
  grid-template-columns: 70% 30%;
  column-gap: 2rem;
  height: calc(100% - 158px);
`

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1.5rem;
`

const Nutrition = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  row-gap: 1rem;
`

export default function DashboardUI() {
  const api = new Api(12)
  
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
