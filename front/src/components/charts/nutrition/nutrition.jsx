import { Component } from "react"
import PropTypes from "prop-types"
import GetUserApi from "../../../containers/dashboard/getUserApi"
import {
  Loading,
  Loader,
  Card,
  Info,
  Title,
  Datum,
  Icon,
} from "./nutritionUI"
import CaloriesIcon from "./icons/calories"
import LipidsIcon from "./icons/lipids"
import CarbohydratesIcon from "./icons/carbohydrates"
import ProteinsIcon from "./icons/proteins"

/**
 * @class Nutrtition
 * @classdesc Displays the user's daily nutrition information (calories, etc.) via cards on the right
 * @param { GetUserApi } api - Mandatory
 */
export default class Nutrition extends Component {
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
   * Fetches and stores the user's nutritional information
   */
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
        loading: false,
        data: keyData,
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
          <>
            <Loading>
              <Loader />
            </Loading>
            <Loading>
              <Loader />
            </Loading>
            <Loading>
              <Loader />
            </Loading>
            <Loading>
              <Loader />
            </Loading>
          </>
        }
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
        { this.state.error &&
          <>
            <p>Chargement impossible</p>
          </>
        }
      </>
    )
  }
}
