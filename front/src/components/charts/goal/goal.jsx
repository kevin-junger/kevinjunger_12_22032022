import { Component } from "react"
import PropTypes from "prop-types"
import GetUserApi from "../../../containers/dashboard/getUserApi"
import { Stat, Title } from "./goalUI"
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis
} from "recharts"

export default class Goal extends Component {
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
    this.props.api.getUser()
    .then(response => {
      if(response.statusText !== "OK") {
        throw new Error(response.statusText)
      }
      return response.data.data
    })
    .then(data => {
      this.setState({
        data: [
          { value: data.todayScore * 100 }
        ],
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
          <>
            <Title>Score</Title>
            <ResponsiveContainer width="100%" height="85%">
              <RadialBarChart
                innerRadius={"90%"}
                barSize={10}
                data={this.state.data}
                startAngle={225}
                endAngle={-45}
              >
                <PolarAngleAxis
                  type="number"
                  domain={[0, 100]}
                  angleAxisId={0}
                  tick={false}
                />
                <RadialBar
                  background
                  clockWise
                  dataKey="value"
                  fill="#ff0000"
                  cornerRadius={50}
                />
                <text
                  x={"50%"}
                  y={"45%"}
                  fontSize={26}
                  fontWeight={"700"}
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  {this.state.data[0].value} %
                </text>
                <text
                  x={"50%"}
                  y={"55%"}
                  fontSize={16}
                  fontWeight={"500"}
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  de votre
                </text>
                <text
                  x={"50%"}
                  y={"63%"}
                  fontSize={16}
                  fontWeight={"500"}
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  objectif
                </text>
              </RadialBarChart>
            </ResponsiveContainer>
          </>
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
