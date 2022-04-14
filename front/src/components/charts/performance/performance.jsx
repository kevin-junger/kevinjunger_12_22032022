import { useState, useEffect } from "react"
import PropTypes from "prop-types"
import GetUserApi from "../../../containers/dashboard/getUserApi"
import { Container, Loader, Error, Stat } from "./performanceUI"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts"

/**
 * Displays the analytics for the user's performance stats
 * @param { GetUserApi } api - Mandatory
 * @returns { Component | null }
 */
export default function Performance(props) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)

  const api = props.api

  useEffect(() => {
    api.getUserPerformance()
    .then(response => {
      if(response.statusText !== "OK") {
        throw new Error(response.statusText)
      }

      return response.data.data
    })
    .then(data => {
      let perfs = []

      const kinds = ['Cardio', 'Energie', 'Endurance', 'Force', 'Vitesse', 'Intensité']

      for (const [kindKey] of Object.entries(data.kind)) {
        data.data.forEach(datum => {
          if (datum.kind === parseInt(kindKey, 10)) {
            perfs.push({
              kind: kinds[parseInt(kindKey, 10) - 1],
              value: datum.value,
            })
          }
        })
      }

      setLoading(false)
      setData(perfs)
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
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart outerRadius={"60%"} innerRadius={"0"} data={data}>
              <PolarGrid radialLines={false} />
              <PolarAngleAxis dataKey="kind" stroke="white" dy={4} tickLine={false} tick={{ fontSize: 12, fontWeight: 500, }} />
              <Radar dataKey="value" stroke="transparent" fill="#ff0000" fillOpacity={0.7} />
            </RadarChart>
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

Performance.propTypes = {
  api: PropTypes.instanceOf(GetUserApi).isRequired,
}
