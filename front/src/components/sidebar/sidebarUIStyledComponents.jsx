import styled from "styled-components"

export const Sidebar = styled.aside`
  height: calc(100vh - 90px);
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`

export const SidebarMenu = styled.ul`
  margin: 1.5rem;
  padding: 0;
  list-style: none;
`

export const SidebarMenuElt = styled.li`
  margin-bottom: 1rem;
  background-color: white;
  padding: 1rem;
  border-radius: 10px;
`

export const Copyright = styled.p`
  margin-top: 3rem;
  margin-bottom: 2rem;
  color: white;
  writing-mode: vertical-lr;
  text-orientation: sideways-right;
`