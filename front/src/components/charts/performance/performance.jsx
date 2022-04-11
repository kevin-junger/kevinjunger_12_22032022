import { Component } from "react"
import PropTypes from "prop-types"
import GetUserApi from "../../../containers/dashboard/getUserApi"
import { Stat } from "./performanceUI"
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts"

export default class Performance extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      error: false,
    }
  }

  static propTypes = {
    api: PropTypes.instanceOf(GetUserApi).isRequired,
  }

  componentDidMount() {
    this.props.api.getUserPerformance()
    .then(response => {
      if(response.statusText !== "OK") {
        throw new Error(response.statusText)
      }

      return response.data.data
    })
    .then(data => {
      const perfs = []

      const kinds = ['Cardio', 'Energie', 'Endurance', 'Force', 'Vitesse', 'Intensité']

      for (const [kindKey] of Object.entries(data.kind)) {
        data.data.forEach(datum => {
          if (datum.kind === parseInt(kindKey, 10)) {
            perfs.push({
              kind: kinds[parseInt(kindKey, 10) - 1],
              value: datum.value,
            })
          }
        })
      }

      this.setState({
        data: perfs,
        error: false,
      })
    })
    .catch(error => {
      console.log(error)
      this.setState({
        data: null,
        error: true,
      })
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
        { this.state.error &&
          <>
            <p>Chargement impossible</p>
          </>
        }
      </Stat>
    )
  }
}
