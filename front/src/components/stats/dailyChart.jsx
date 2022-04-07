import { Component } from "react"
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
} from "recharts"
import styled from "styled-components"

const Stat = styled.div`
  position: relative;
  grid-area: 1 / 1 / 2 / 4;
  background-color: #fbfbfb;
  border-radius: 5px;
`

const Header = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 1rem;
  left: 1.5rem;
  width: calc(100% - 3rem);
`

const Title = styled.h2`
  font-size: 15px;
  font-weight: 500;
`

const Legend = styled.div`
  display: flex;
  align-items: center;
  width: 280px;
  justify-content: space-between;
`

const LegendColor = styled.div`
  margin-right: 0.2rem;
`

const LegendTitle = styled.p`
  color: #74798c;
  font-size: 14px;
  font-weight: 500;
`

const TooltipBox = styled.div`
  background-color: red;
  padding: 0.5rem;
  border-radius: 5px;
`

const TooltipList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const TooltipItem = styled.li`
  color: white;
  font-size: 10px;
  font-weight: 500;
  text-align: center;
`

const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return(
      <TooltipBox>
        <TooltipList>
          <TooltipItem>{payload[0].value} kg</TooltipItem>
          <TooltipItem>{payload[1].value} kCal</TooltipItem>
        </TooltipList>
      </TooltipBox>
    )
  }

  return null;
}

export default class DailyChart extends Component {
  constructor(props) {
    super(props)
    this.state = { data: null }
  }

  componentDidMount() {
    this.fetch()
  }

  fetch() {
    this.props.api.getUserActivity()
    .then(response => {
      if(response.statusText !== "OK") {
        throw new Error(response.statusText)
      }
      return response.data.data
    })
    .then(data => {
      let sessions = []

      data.sessions.forEach(session => {
        const date = new Date(session.day)
        sessions.push({
          "day": date.getUTCDate(),
          "kilogram": session.kilogram,
          "calories": session.calories,
        })
      })
      
      this.setState({ data: sessions })
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    return(
      <Stat>
        { this.state.data &&
          <>
            <Header>
              <Title>Activité quotidienne</Title>
              <Legend>
                <LegendColor>
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z" fill="#282D30"/>
                  </svg>
                </LegendColor>
                <LegendTitle>Poids (kg)</LegendTitle>
                <LegendColor>
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z" fill="#E60000"/>
                  </svg>
                </LegendColor>
                <LegendTitle>Calories brûlées (kCal)</LegendTitle>
              </Legend>
            </Header>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={this.state.data}
                margin={{ top: 80, right: 24, bottom: 32, left: 24 }}
                barGap={8}
                barCategoryGap="40%"
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                />
                <XAxis 
                  dataKey="day"
                  dy={16}
                  tickLine={false}
                  tick={{ fontSize: 14, fontWeight: 500 }}
                />
                <YAxis
                  dataKey="calories"
                  hide={true}
                />
                <Bar
                  dataKey="kilogram"
                  fill="#000000"
                  radius={[50, 50, 0, 0]}
                />
                <Bar
                  dataKey="calories"
                  fill="#ff0000"
                  radius={[50, 50, 0, 0]}
                />
                <Tooltip
                  cursor={{
                    fill: "rgba(0, 0, 0, 0.1)",
                  }}
                  content={<CustomTooltip />}
                />
              </BarChart>
            </ResponsiveContainer>
          </>
        }
      </Stat>
    )
  }
}
