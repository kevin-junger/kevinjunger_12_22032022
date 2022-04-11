import { Component } from "react"
import {
  Card,
  Info,
  Title,
  Datum,
  Icon
} from "./nutritionUI"
import CaloriesIcon from "./icons/calories"
import LipidsIcon from "./icons/lipids"
import CarbohydratesIcon from "./icons/carbohydrates"
import ProteinsIcon from "./icons/proteins"

export default class Nutrition extends Component {
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
            <Icon category={datum.category}>
              {datum.icon()}
            </Icon>
            <Info>
              <Datum>{datum.value} {datum.category === 'calorieCount' ? 'kcal' : 'g'}</Datum>
              <Title>{datum.title}</Title>
            </Info>
          </Card>
        )
        }
      </>
    )
  }
}
