import { Component } from "react"
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

export default class SessionsChart extends Component {
  constructor(props) {
    super(props)
    this.state = { data: null }
  }

  componentDidMount() {
    this.fetch()
  }

  fetch() {
    this.props.api.getUserAverageSessions()
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
      <div className="sessions">
        { this.state.data &&
          <>
            <h2>Durée moyenne des sessions</h2>
            <ResponsiveContainer width="100%" height="60%">
              <LineChart
                data={this.state.data.sessions}
                margin={{ top: 0, right: 24, bottom: 16, left: 24 }}
              >
                <XAxis
                  dataKey="day"
                  stroke="rgba(255, 255, 255, 0.6)"
                  axisLine={false}
                  dy={10}
                  tickLine={false}
                  tick={{
                    fontSize: 12,
                    fontWeight: 500,
                  }}
                />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="sessionLength"
                  stroke="rgba(255, 255, 255, 0.6)"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{
                    stroke: "rgba(255,255,255, 0.6)",
                    strokeWidth: 10,
                    r: 5,
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </>
        }
      </div>
    )
  }
}
