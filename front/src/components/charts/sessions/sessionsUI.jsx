import styled from "styled-components"

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
