import { Component } from "react"
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis
} from "recharts"
import styled from "styled-components"

const Stat = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  grid-area: 2 / 3 / 3 / 4;
  background-color: #fbfbfb;
  border-radius: 5px;
`

const Title = styled.h2`
  left: 1.5rem;
  top: 0.5rem;
  position: absolute;
  font-size: 15px;
  font-weight: 500;
`

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
      </Stat>
    )
  }
}
