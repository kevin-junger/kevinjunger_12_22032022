import BicycleIcon from "./icons/bicycle"
import SwimIcon from "./icons/swim"
import WeightIcon from "./icons/weight"
import YogaIcon from "./icons/yoga"
import "./sidebar.css"

export default function Sidebar() {
  return(
    <aside className="sidebar">
      <ul className="sidebar__menu">
        <li><YogaIcon /></li>
        <li><SwimIcon /></li>
        <li><BicycleIcon /></li>
        <li><WeightIcon /></li>
      </ul>
      <p className="sidebar__copyright">(c) SportSee - 2022</p>
    </aside>
  )
}
