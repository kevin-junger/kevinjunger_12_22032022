import styled from "styled-components"
import { keyframes } from "styled-components"

export const Container = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  background-color: red;
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
    opacity: 50%;
    animation: ${rotateLoader} 1.2s linear infinite;
  }
`

export const Error = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: white;
  color: red;
  display: flex;
  font-size: 40px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
`

export const Stat = styled.div`
  position: relative;
  grid-area: 2 / 1 / 3 / 2;
  background-color: red;
  border-radius: 5px;
`

export const Title = styled.h2`
  left: 1.5rem;
  top: 0.5rem;
  width: calc(100% - 3rem);
  position: absolute;
  font-size: 15px;
  font-weight: 500;
  color: white;
  opacity: 50%;
`

export const TooltipBox = styled.div`
  background-color: white;
  padding: 0.5rem;
  border-radius: 5px;
`

export const TooltipInfo = styled.p`
  margin: 0;
  padding: 0;
  font-size: 10px;
  font-weight: 500;
`
