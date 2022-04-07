import { Component } from "react"
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts"

import styled from "styled-components"

const Stat = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  background-color: #282D30;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default class PerformanceChart extends Component {
  constructor(props) {
    super(props)
    this.state = { data: null }
  }

  componentDidMount() {
    this.fetch()
  }

  fetch() {
    this.props.api.getUserPerformance()
    .then(response => {
      if(response.statusText !== "OK") {
        throw new Error(response.statusText)
      }

      return response.data.data
    })
    .then(data => {
      const perfs = []

      for (const [kindKey, kindValue] of Object.entries(data.kind)) {
        data.data.forEach(datum => {
          if (datum.kind === parseInt(kindKey, 10)) {
            perfs.push({
              kind: kindValue.charAt(0).toUpperCase() + kindValue.slice(1),
              value: datum.value,
            })
          }
        })
      }

      this.setState({ data: perfs })
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    return(
      <Stat>
        { this.state.data &&
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart
              outerRadius={"60%"}
              innerRadius={"0"}
              data={this.state.data}
            >
              <PolarGrid radialLines={false} />
              <PolarAngleAxis
                dataKey="kind"
                stroke="white"
                dy={4}
                tickLine={false}
                tick={{
                  fontSize: 12,
                  fontWeight: 500,
                }} />
              <Radar
                dataKey="value"
                stroke="transparent"
                fill="#ff0000"
                fillOpacity={0.7}
              />
            </RadarChart>
          </ResponsiveContainer>
        }
      </Stat>
    )
  }
}
