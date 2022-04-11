import { Component } from "react"
import {
  Stat,
  Title,
  TooltipBox,
  TooltipInfo
} from "./sessionsUI"
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return(
      <TooltipBox>
        <TooltipInfo>{payload[0].value} min</TooltipInfo>
      </TooltipBox>
    )
  }

  return null;
}

export default class Sessions extends Component {
  constructor(props) {
    super(props)
    this.state = { data: null }
  }

  componentDidMount() {
    this.props.api.getUserAverageSessions()
    .then(response => {
      if(response.statusText !== "OK") {
        throw new Error(response.statusText)
      }
      return response.data.data
    })
    .then(data => {
      let sessions = []

      const daysByName = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]

      data.sessions.forEach(session => {
        const dayIndex = parseInt(session.day, 10) - 1
        sessions.push({
          "day": daysByName[dayIndex].charAt(0),
          "sessionLength": session.sessionLength,
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
            <Title>Durée moyenne des sessions</Title>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={this.state.data}
                margin={{ top: 68, right: 24, bottom: 24, left: 24 }}
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
                <Tooltip
                  content={<CustomTooltip />}
                />
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
      </Stat>
    )
  }
}
