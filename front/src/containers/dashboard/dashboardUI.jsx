import styled from "styled-components"

export const Wrapper = styled.section`
  width: calc(100vw - 150px);
  height: calc(100vh - 120px);
  overflow: hidden;
`

export const Dashboard = styled.div`
  margin: 2rem;
  display: grid;
  grid-template-columns: 70% 30%;
  column-gap: 2rem;
  height: calc(100% - 158px);
`

export const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1.5rem;
`

export const Aside = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  row-gap: 1rem;
`
