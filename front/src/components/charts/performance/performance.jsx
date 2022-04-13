import { Component } from "react"
import PropTypes from "prop-types"
import GetUserApi from "../../../containers/dashboard/getUserApi"
import {
  Container,
  Loader,
  Error,
  Stat,
} from "./performanceUI"
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts"

/**
 * @class Performance
 * @classdesc Displays the analytics for the user's performance stats
 * @param { GetUserApi } api - Mandatory
 */
export default class Performance extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      data: null,
      error: false,
    }
  }

  static propTypes = {
    api: PropTypes.instanceOf(GetUserApi).isRequired,
  }

  /**
   * Fetches and stores the user's performance indexes
   */
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
        loading: false,
        data: perfs,
        error: false,
      })
    })
    .catch(error => {
      console.log(error)
      this.setState({
        loading: false,
        data: null,
        error: true,
      })
    })
  }

  render() {
    return(
      <>
        { this.state.loading &&
          <Container>
            <Loader />
          </Container>
        }
        { this.state.data &&
          <Stat>
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
          </Stat>
        }
        { this.state.error &&
          <Container>
            <Error>!</Error>
          </Container>
        }
      </>
    )
  }
}
