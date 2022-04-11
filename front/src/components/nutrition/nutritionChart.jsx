import { Component } from "react"
import NutritionCard from "./nutritionCard"
import CaloriesIcon from "./icons/calories"
import LipidsIcon from "./icons/lipids"
import CarbohydratesIcon from "./icons/carbohydrates"
import ProteinsIcon from "./icons/proteins"

import styled from "styled-components"

const Card = styled.div`
  display: flex;
  align-items: center;
  background-color: #fbfbfb;
  border-radius: 5px;
`

export default class NutritionChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      error: false,
    }
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
      const keyData = []
      const categories = ['Calories', 'Protéines', 'Glucides', 'Lipides']
      const catIcons = [CaloriesIcon, ProteinsIcon, CarbohydratesIcon, LipidsIcon]

      let i = 0

      for (const [dataKey, dataValue] of Object.entries(data.keyData)) {
        keyData.push({
          category: dataKey,
          title: categories[i],
          value: dataValue,
          icon: catIcons[i]
        })
        i += 1
      }

      this.setState({
        data: keyData,
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
      <>
        { this.state.data && this.state.data.map(datum =>
          <Card key={datum.category}>
            <NutritionCard category={datum.category} title={datum.title} datum={datum.value} vector={datum.icon} />
          </Card>
        )
        }
      </>
    )
  }
}