import Axios from "axios"

/**
 * @class Api
 * @classdesc Manages HTTP GET calls in order to fetch the necessary data
 */

export default class Api {
  constructor() {
    this.baseUrl = "http://localhost:3000"
    this.fetch = null
  }

  /**
   * Creates an Axios instance which allows the getters to get the desired data
   * @returns AxiosInstance
   */
  #init() {
    let headers = {
      Accept: "application/json",
    }
    
    this.fetch = Axios.create({
      baseURL: this.baseUrl,
      headers: headers,
    })

    return this.fetch
  }

  /**
   * Returns an Axios response with the user's information
   * @param { Integer } userId 
   * @returns Promise
   */
  getUser(userId) {
    return this.#init().get(`/user/${userId}`)
  }

  /**
   * Returns an Axios response with the user's daily activity
   * @param { Integer } userId 
   * @returns Promise
   */
  getUserActivity(userId) {
    return this.#init().get(`/user/${userId}/activity`)
  }

  /**
   * Returns an Axios response with the average duration of the user's sessions
   * @param { Integer } userId 
   * @returns Promise
   */
  getUserAverageSessions(userId) {
    return this.#init().get(`/user/${userId}/average-sessions`)
  }

  /**
   * Returns an Axios response with the user's daily goal information
   * @param { Integer } userId 
   * @returns Promise
   */
  getUserTodayScore(userId) {
    return this.#init().get(`/user/${userId}/today-score`)
  }

  /**
   * Returns an Axios response with the types of activities chosen by the user
   * @param { Integer } userId 
   * @returns Promise
   */
  getUserActivities(userId) {
    return this.#init().get(`/user/${userId}/activities`)
  }

  /**
   * Returns an Axios response with the user's key data (calories, proteins, etc.)
   * @param { Integer } userId 
   * @returns Promise
   */
  getUserKeyData(userId) {
    return this.#init().get(`/user/${userId}/key-data`)
  }
}