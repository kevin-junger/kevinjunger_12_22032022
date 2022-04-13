import styled from "styled-components"
import { keyframes } from "styled-components"

export const Loading = styled.div`
  grid-area: 1 / 1 / 2 / 4;
  background-color: #fbfbfb;
  border-radius: 5px;
  display: flex;
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
    border: 6px solid #000;
    border-color: #000 transparent #ff0000 transparent;
    animation: ${rotateLoader} 1.2s linear infinite;
  }
`

export const Stat = styled.div`
  position: relative;
  grid-area: 1 / 1 / 2 / 4;
  background-color: #fbfbfb;
  border-radius: 5px;
`

export const Header = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 1rem;
  left: 1.5rem;
  width: calc(100% - 3rem);
`

export const Title = styled.h2`
  font-size: 15px;
  font-weight: 500;
`

export const Legend = styled.div`
  display: flex;
  align-items: center;
  width: 280px;
  justify-content: space-between;
`

export const LegendColor = styled.div`
  margin-right: 0.2rem;
`

export const LegendTitle = styled.p`
  color: #74798c;
  font-size: 14px;
  font-weight: 500;
`

export const TooltipBox = styled.div`
  background-color: red;
  padding: 0.5rem;
  border-radius: 5px;
`

export const TooltipList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const TooltipItem = styled.li`
  color: white;
  font-size: 10px;
  font-weight: 500;
  text-align: center;
`
