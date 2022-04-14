import { useState, useEffect } from "react"
import PropTypes from "prop-types"
import GetUserApi from "../../../containers/dashboard/getUserApi"
import { Container, Loader, Error, Stat, Header, Title, Legend, LegendColor, LegendTitle, TooltipBox, TooltipList, TooltipItem } from "./dailyUI"
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Bar, Tooltip } from "recharts"

/**
 * Creates and returns the tooltip box when hovering any of the chart's entries, or null if not
 * @param {*} param0 - the tooltip's state and the values to be displayed
 * @returns { StyledComponent | null }
 */
const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return(
      <TooltipBox>
        <TooltipList>
          <TooltipItem>{payload[0].value} kg</TooltipItem>
          <TooltipItem>{payload[1].value} kCal</TooltipItem>
        </TooltipList>
      </TooltipBox>
    )
  }

  return null;
}

/**
 * Displays the analytics for the user's daily activity via a bar chart
 * @param { GetUserApi } api - Mandatory
 * @returns { Component }
 */
export default function Daily(props) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)

  const api = props.api

  /**
   * Fetches and stores the user's daily activity over the last 7 days into an array
   */
  useEffect(() => {
    api.getUserActivity()
    .then(response => {
      if(response.statusText !== "OK") {
        throw new Error(response.statusText)
      }

      return response.data.data
    })
    .then(data => {
      let sessions = []

      data.sessions.forEach(session => {
        const date = new Date(session.day)
        sessions.push({
          "day": date.getUTCDate(),
          "kilogram": session.kilogram,
          "calories": session.calories,
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
          <Header>
            <Title>Activité quotidienne</Title>
            <Legend>
              <LegendColor>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z" fill="#282D30"/>
                </svg>
              </LegendColor>
              <LegendTitle>Poids (kg)</LegendTitle>
              <LegendColor>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z" fill="#E60000"/>
                </svg>
              </LegendColor>
              <LegendTitle>Calories brûlées (kCal)</LegendTitle>
            </Legend>
          </Header>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 80, right: 24, bottom: 32, left: 24 }} barGap={8} barCategoryGap="40%">
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="day" dy={16} tickLine={false} tick={{ fontSize: 14, fontWeight: 500 }} />
              <YAxis dataKey="calories" hide={true} />
              <Bar dataKey="kilogram" fill="#000000" radius={[50, 50, 0, 0]} />
              <Bar dataKey="calories" fill="#ff0000" radius={[50, 50, 0, 0]} />
              <Tooltip cursor={{ fill: "rgba(0, 0, 0, 0.1)" }} content={<CustomTooltip />} />
            </BarChart>
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

Daily.propTypes = {
  api: PropTypes.instanceOf(GetUserApi).isRequired
}
