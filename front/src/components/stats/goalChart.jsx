import { Component } from "react"
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis
} from "recharts"

export default class GoalChart extends Component {
  constructor(props) {
    super(props)
    this.state = { data: null }
  }

  componentDidMount() {
    this.fetch()
  }

  fetch() {
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
        ]
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    return(
      <div className="goal">
        { this.state.data &&
          <>
            <h2>Score</h2>
            <ResponsiveContainer width="100%" height="80%">
              <RadialBarChart
                innerRadius={"95%"}
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
                  y={"50%"}
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  couille
                </text>
              </RadialBarChart>
            </ResponsiveContainer>
          </>
        }
      </div>
    )
  }
}
