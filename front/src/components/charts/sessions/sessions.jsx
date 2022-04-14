import { useState, useEffect } from "react"
import PropTypes from "prop-types"
import GetUserApi from "../../../containers/dashboard/getUserApi"
import { Container, Loader, Error, Stat, Title, TooltipBox, TooltipInfo } from "./sessionsUI"
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts"

/**
 * Creates and returns the tooltip box when hovering any of the chart's entries, or null if not
 * @param {*} param0 - the tooltip's state and the values to be displayed
 * @returns { StyledComponent | null }
 */
const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return(
      <TooltipBox>
        <TooltipInfo>{payload[0].value} min</TooltipInfo>
      </TooltipBox>
    )
  }

  return null;
}

/**
 * Displays the user's average session duration per day on a weekly basis
 * @param { GetUserApi } api - Mandatory
 * @returns { Component }
 */
export default function Sessions(props) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)

  const api = props.api

  /**
   * Fetches and stores the average daily duration
   */
  useEffect(() => {
    api.getUserAverageSessions()
    .then(response => {
      if(response.statusText !== "OK") {
        throw new Error(response.statusText)
      }
      return response.data.data
    })
    .then(data => {
      let sessions = []

      const daysByName = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]

      data.sessions.forEach(session => {
        const dayIndex = parseInt(session.day, 10) - 1
        sessions.push({
          "day": daysByName[dayIndex].charAt(0),
          "sessionLength": session.sessionLength,
        })
      })
      
      setLoading(false)
      setData(sessions)
    })
    .catch(error => {
      console.log(error)
      setLoading(false)
      setError(true)
    })
  }, [api])

  return(
    <>
      { loading &&
        <Container>
          <Loader />
        </Container>
      }
      { data &&
        <Stat>
          <Title>Durée moyenne des sessions</Title>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 68, right: 24, bottom: 24, left: 24 }}>
              <XAxis dataKey="day" stroke="rgba(255, 255, 255, 0.6)" axisLine={false} dy={10} tickLine={false} tick={{ fontSize: 12, fontWeight: 500 }} />
              <Tooltip content={<CustomTooltip />} />
              <Line type="monotone" dataKey="sessionLength" stroke="rgba(255, 255, 255, 0.6)" strokeWidth={2} dot={false} activeDot={{ stroke: "rgba(255,255,255, 0.6)", strokeWidth: 10, r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </Stat>
      }
      { error &&
        <Container>
          <Error>!</Error>
        </Container>
      }
    </>
  )
}

Sessions.propTypes = {
  api: PropTypes.instanceOf(GetUserApi).isRequired,
}
