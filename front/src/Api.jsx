import Axios from "axios"

/**
 * @class Api
 * @classdesc Manages HTTP GET calls in order to fetch the necessary data
 */
export default class Api {
  constructor(userId) {
    this.baseUrl = "http://localhost:3000"
    this.userId = userId
  }

  /**
   * Creates an Axios instance which allows the getters to get the desired data
   * @returns AxiosInstance
   */
  init() {
    let headers = {
      Accept: "application/json",
    }
    
    return Axios.create({
      baseURL: this.baseUrl,
      headers: headers,
    })
  }

  /**
   * Returns an Axios response with the user's information
   * @param { Integer } userId 
   * @returns Promise
   */
  getUser() {
    return this.init().get(`/user/${this.userId}`)
  }

  /**
   * Returns an Axios response with the user's daily activity
   * @param { Integer } userId 
   * @returns Promise
   */
  getUserActivity() {
    return this.init().get(`/user/${this.userId}/activity`)
  }

  /**
   * Returns an Axios response with the average duration of the user's sessions
   * @param { Integer } userId 
   * @returns Promise
   */
  getUserAverageSessions() {
    return this.init().get(`/user/${this.userId}/average-sessions`)
  }

  /**
   * Returns an Axios response with the user's performance
   * @param { Integer } userId 
   * @returns Promise
   */
  getUserPerformance() {
    return this.init().get(`/user/${this.userId}/performance`)
  }
}