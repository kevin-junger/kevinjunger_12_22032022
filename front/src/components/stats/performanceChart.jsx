import { Component } from "react"
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts"

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
      this.setState({ data: data })
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    return(
      <div className="performance">
        { this.state.data &&
          <ResponsiveContainer width="100%" height="80%">
            <RadarChart
              outerRadius={"90%"}
              data={this.state.data.data}
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
      </div>
    )
  }
}
