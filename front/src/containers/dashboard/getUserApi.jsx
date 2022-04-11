import Axios from "axios"
import PropTypes from "prop-types"

/**
 * @class GetUserApi
 * @classdesc Manages HTTP GET calls in order to fetch the necessary data corresponding the user's id
 */
export default class GetUserApi {
  constructor(userId) {
    this.baseUrl = "http://localhost:3000"
    this.userId = `/user/${userId}`
  }

  static propTypes = {
    userId: PropTypes.number.isRequired,
  }

  /**
   * Creates an Axios instance, then from the desired path, returns an Axios response with the corresponding data.
   * @param { string } path - Can be left empty (which means the URI will be `/user/${userId}`), or it'll be add to the end of the default URI (e.g. `/user/${userId}/activity` if `path = "activity"`)
   * @returns object
   */
  init(path = '') {
    let headers = {
      Accept: "application/json",
    }
    
    const instance = Axios.create({
      baseURL: this.baseUrl,
      headers: headers,
    })

    return instance.get(`${this.userId}${path}`)
  }

  /**
   * Returns an Axios response with the user's information
   * @returns object
   */
  getUser() {
    return this.init()
  }

  /**
   * Returns an Axios response with the user's daily activity
   * @returns object
   */
  getUserActivity() {
    return this.init("/activity")
  }

  /**
   * Returns an Axios response with the average duration of the user's sessions
   * @returns object
   */
  getUserAverageSessions() {
    return this.init("/average-sessions")
  }

  /**
   * Returns an Axios response with the user's performance
   * @returns object
   */
  getUserPerformance() {
    return this.init("/performance")
  }
}
