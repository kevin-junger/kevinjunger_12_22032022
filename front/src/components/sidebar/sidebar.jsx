import BicycleIcon from "./icons/bicycle"
import SwimIcon from "./icons/swim"
import WeightIcon from "./icons/weight"
import YogaIcon from "./icons/yoga"
import { Sidebar, SidebarMenu, SidebarMenuElt, Copyright } from "./sidebarUI"

/**
 * Displays the global sidebar
 * @returns { StyledComponent }
 */
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
      <Copyright>© SportSee - {date.getUTCFullYear()}</Copyright>
    </Sidebar>
  )
}
