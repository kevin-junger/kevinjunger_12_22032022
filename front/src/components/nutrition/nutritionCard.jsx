import styled from "styled-components"

const Card = styled.div`
  display: flex;
  align-items: center;
  background-color: #fbfbfb;
  border-radius: 5px;
`

const Info = styled.div`
  margin-left: 1.5rem;
`

const Title = styled.em`
  font-style: normal;
  font-size: 14px;
  font-weight: 500;
  color: #74798C;
`

const Datum = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 0.5rem;
`

const iconMixin = props => {
  switch(true) {
    case props.category === "proteins": return "background-color: rgba(74, 184, 255, 0.1);"
    case props.category === "glucids": return "background-color: rgba(249, 206, 35, 0.1);"
    case props.category === "fats": return "background-color: rgba(253, 81, 129, 0.1);"
    default: return "background-color: rgba(255, 0, 0, 0.1);"
  }
}

const Icon = styled.div`
  ${iconMixin}
  margin-left: 10%;
  padding: 1.5rem;
  border-radius: 5px;
`

export default function NutritionCard(props) {
  const category = props.category
  const title = props.title
  const datum = props.datum
  const Vector = props.vector

  return(
    <Card>
      <Icon category={category}>
        <Vector />
      </Icon>
      <Info>
        <Datum>{datum} {category === 'calories' ? 'kcal' : 'g'}</Datum>
        <Title>{title}</Title>
      </Info>
    </Card>
  )
}