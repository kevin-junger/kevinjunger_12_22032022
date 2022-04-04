import BicycleIcon from "../assets/icons/bicycle"
import SwimIcon from "../assets/icons/swim"
import WeightIcon from "../assets/icons/weight"
import YogaIcon from "../assets/icons/yoga"
import styled from "styled-components"

const Sidebar = styled.aside`
  height: calc(100vh - 90px);
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`

const SidebarMenu = styled.ul`
  margin: 1.5rem;
  padding: 0;
  list-style: none;
`

const SidebarMenuElt = styled.li`
  margin-bottom: 1rem;
  background-color: white;
  padding: 1rem;
  border-radius: 10px;
`

const Copyright = styled.p`
  margin-top: 3rem;
  margin-bottom: 2rem;
  color: white;
  writing-mode: vertical-lr;
  text-orientation: sideways-right;
`

export default function SidebarUI() {
  return(
    <Sidebar>
      <SidebarMenu>
        <SidebarMenuElt><YogaIcon /></SidebarMenuElt>
        <SidebarMenuElt><SwimIcon /></SidebarMenuElt>
        <SidebarMenuElt><BicycleIcon /></SidebarMenuElt>
        <SidebarMenuElt><WeightIcon /></SidebarMenuElt>
      </SidebarMenu>
      <Copyright>(c) SportSee - 2022</Copyright>
    </Sidebar>
  )
}
