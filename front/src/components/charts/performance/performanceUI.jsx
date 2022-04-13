import styled from "styled-components"
import { keyframes } from "styled-components"

export const Container = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  background-color: #282D30;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: ${rotateLoader} 1.2s linear infinite;
  }
`

export const Error = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: white;
  color: #282D30;
  display: flex;
  font-size: 40px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
`

export const Stat = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  background-color: #282D30;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`
