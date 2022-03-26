import Axios from "axios"

export default class Api {
  constructor() {
    this.baseUrl = "http://localhost:3000"
    this.fetch = null
  }

  init() {
    let headers = {
      Accept: "application/json",
    }
    
    this.fetch = Axios.create({
      baseURL: this.baseUrl,
      headers: headers,
    })

    return this.fetch
  }

  getUser(userId) {
    return this.init().get(`/user/${userId}`)
  }

  getUserActivity(userId) {
    return this.init().get(`/user/${userId}/activity`)
  }

  getUserAverageSessions(userId) {
    return this.init().get(`/user/${userId}/average-sessions`)
  }

  getUserTodayScore(userId) {
    return this.init().get(`/user/${userId}/today-score`)
  }

  getUserActivities(userId) {
    return this.init().get(`/user/${userId}/activities`)
  }

  getUserKeyData(userId) {
    return this.init().get(`/user/${userId}/key-data`)
  }
}