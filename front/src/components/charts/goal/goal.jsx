import { useState, useEffect } from "react"
import PropTypes from "prop-types"
import GetUserApi from "../../../containers/dashboard/getUserApi"
import { Container, Loader, Error, Stat, Title } from "./goalUI"
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from "recharts"

/**
 * Displays the user's daily goal achievement via a radial bar chart
 * @param { GetUserApi } api - Mandatory
 * @returns { Component | null }
 */
export default function Goal(props) {
  
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)

  const api = props.api
  
  /**
   * Fetches and stores the user's current percentage of achievement
   */
  useEffect(() => {
    api.getUser()
    .then(response => {
      if(response.statusText !== "OK") {
        throw new Error(response.statusText)
      }
      return response.data.data
    })
    .then(data => {
      setLoading(false)
      setData([
        { value: data.todayScore * 100 }
      ])
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
          <Title>Score</Title>
          <ResponsiveContainer width="100%" height="85%">
            <RadialBarChart innerRadius={"90%"} barSize={10} data={data} startAngle={225} endAngle={-45}>
              <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
              <RadialBar background clockWise dataKey="value" fill="#ff0000" cornerRadius={50} />
              <text x={"50%"} y={"45%"} fontSize={26} fontWeight={"700"} textAnchor="middle" dominantBaseline="middle">
                {data[0].value} %
              </text>
              <text x={"50%"} y={"55%"} fontSize={16} fontWeight={"500"} textAnchor="middle" dominantBaseline="middle">
                de votre
              </text>
              <text x={"50%"} y={"63%"} fontSize={16} fontWeight={"500"} textAnchor="middle" dominantBaseline="middle">
                objectif
              </text>
            </RadialBarChart>
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

Goal.propTypes = {
  api: PropTypes.instanceOf(GetUserApi).isRequired,
}
