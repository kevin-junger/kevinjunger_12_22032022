import BicycleIcon from "./icons/bicycle"
import SwimIcon from "./icons/swim"
import WeightIcon from "./icons/weight"
import YogaIcon from "./icons/yoga"
import { Sidebar, SidebarMenu, SidebarMenuElt, Copyright } from "./sidebarUI"

export default function SidebarUI() {
  const date = new Date()
  return(
    <Sidebar>
      <SidebarMenu>
        <SidebarMenuElt><YogaIcon /></SidebarMenuElt>
        <SidebarMenuElt><SwimIcon /></SidebarMenuElt>
        <SidebarMenuElt><BicycleIcon /></SidebarMenuElt>
        <SidebarMenuElt><WeightIcon /></SidebarMenuElt>
      </SidebarMenu>
      <Copyright>(c) SportSee - {date.getUTCFullYear()}</Copyright>
    </Sidebar>
  )
}
