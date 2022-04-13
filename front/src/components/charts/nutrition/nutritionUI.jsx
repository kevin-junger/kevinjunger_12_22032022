import styled from "styled-components"
import { keyframes } from "styled-components"

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fbfbfb;
  border-radius: 5px;
`

const rotateLoader = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Loader = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #000;
    border-color: #000 transparent #000 transparent;
    animation: ${rotateLoader} 1.2s linear infinite;
  }
`

export const Card = styled.div`
  display: flex;
  align-items: center;
  background-color: #fbfbfb;
  border-radius: 5px;
`

export const Info = styled.div`
  margin-left: 1.5rem;
`

export const Title = styled.em`
  font-style: normal;
  font-size: 14px;
  font-weight: 500;
  color: #74798C;
`

export const Datum = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 0.5rem;
`

const iconMixin = props => {
  switch(true) {
    case props.category === "proteinCount": return "background-color: rgba(74, 184, 255, 0.1);"
    case props.category === "carbohydrateCount": return "background-color: rgba(249, 206, 35, 0.1);"
    case props.category === "lipidCount": return "background-color: rgba(253, 81, 129, 0.1);"
    default: return "background-color: rgba(255, 0, 0, 0.1);"
  }
}

export const Icon = styled.div`
  ${iconMixin}
  margin-left: 10%;
  padding: 1.5rem;
  border-radius: 5px;
`
