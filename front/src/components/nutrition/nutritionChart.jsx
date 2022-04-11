import { Component } from "react"
import NutritionCard from "./nutritionCard"
import CaloriesIcon from "./icons/calories"
import FatsIcon from "./icons/fats"
import GlucidsIcon from "./icons/glucids"
import ProteinsIcon from "./icons/proteins"

export default class NutritionChart extends Component {
  constructor(props) {
    super(props)
    this.state = { data: null }
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
        data: data.keyData
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    return(
      <>
        { this.state.data &&
          <>
            <NutritionCard category="calories" title="Calories" datum={this.state.data.calorieCount} vector={CaloriesIcon} />
            <NutritionCard category="proteins" title="Protéines" datum={this.state.data.proteinCount} vector={ProteinsIcon} />
            <NutritionCard category="glucids" title="Glucides" datum={this.state.data.carbohydrateCount} vector={GlucidsIcon} />
            <NutritionCard category="fats" title="Lipides" datum={this.state.data.lipidCount} vector={FatsIcon} />
          </>
        }
      </>
    )
  }
}